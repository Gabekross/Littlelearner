import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Little Learner Cards",
    short_name: "Little Learner",
    description: "A fun learning app for kids — tap cards to hear words, letters, and numbers!",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#0f0f2e",
    theme_color: "#0f0f2e",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
