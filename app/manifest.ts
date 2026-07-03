import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: "Perfect Fourth",
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f9f4ec",
    theme_color: "#9c2432",
    icons: [
      {
        src: "/favicons/icon.svg",
        sizes: "any",
        type: "image/svg+xml"
      }
    ]
  };
}
