import { chromium } from "playwright";
import fs from "node:fs/promises";

const baseUrl = process.env.PLAYWRIGHT_BASE_URL || "http://localhost:3000";
const screenshotsDir = "tmp/playwright";
const viewports = [
  { width: 375, height: 900, name: "mobile" },
  { width: 768, height: 1024, name: "tablet" },
  { width: 1024, height: 900, name: "laptop" },
  { width: 1440, height: 1000, name: "desktop" }
];

await fs.mkdir(screenshotsDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const errors = [];

async function warmLazyAssets(page, viewportHeight) {
  const scrollHeight = await page.evaluate(() => document.documentElement.scrollHeight);
  const step = Math.max(320, Math.floor(viewportHeight * 0.5));

  for (let y = 0; y <= scrollHeight; y += step) {
    await page.evaluate((nextY) => window.scrollTo(0, nextY), y);
    await page.waitForTimeout(300);
  }

  await page.waitForLoadState("networkidle").catch(() => {});
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);
}

try {
  for (const viewport of viewports) {
    const page = await browser.newPage({ viewport });

    page.on("console", (message) => {
      if (message.type() === "error") {
        errors.push(`[${viewport.name}] console error: ${message.text()}`);
      }
    });
    page.on("pageerror", (error) => errors.push(`[${viewport.name}] page error: ${error.message}`));

    await page.goto(`${baseUrl}/?utm_source=codex&utm_medium=verify&utm_campaign=landing&gclid=test-gclid`, {
      waitUntil: "networkidle"
    });

    await warmLazyAssets(page, viewport.height);

    await page.screenshot({
      path: `${screenshotsDir}/home-${viewport.name}.png`,
      fullPage: true
    });

    if (viewport.width === 375) {
      await page.getByRole("button", { name: "Open navigation" }).click();
      const mobileNav = page.locator('nav[aria-label="Mobile navigation"]');
      await mobileNav.waitFor({ state: "visible" });
      await mobileNav.getByRole("link", { name: "Menus" }).click();
      await page.evaluate(() => {
        window.__lastCheckoutUrl = "";
        window.LemonSqueezy = {
          Url: {
            Open(url) {
              window.__lastCheckoutUrl = url;
            }
          }
        };
      });
      await page.getByRole("button", { name: /get the guide/i }).last().click();
      const checkoutUrl = await page.evaluate(() => window.__lastCheckoutUrl);
      if (!checkoutUrl.includes("utm_source=codex") || !checkoutUrl.includes("source_location=sticky_mobile")) {
        errors.push("[mobile] checkout URL did not preserve expected UTM/source params");
      }
    }

    await page.getByRole("button", { name: /The table/i }).click();
    await page.keyboard.press("Escape");
    await page.getByRole("button", { name: /Does it include legal fireworks guidance/i }).focus();
    await page.keyboard.press("Enter");

    const footerBox = await page.locator("#site-footer").boundingBox();
    if (!footerBox) {
      errors.push(`[${viewport.name}] footer was not rendered`);
    }

    await page.close();
  }
} finally {
  await browser.close();
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Playwright verification passed. Screenshots saved in ${screenshotsDir}.`);
