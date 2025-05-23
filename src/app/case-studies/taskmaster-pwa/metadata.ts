import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://nyxtrael.com"), // Replace with your actual domain
  title: "TaskMaster – PWA Task Manager",
  description: "Discover TaskMaster, a Progressive Web App for task management with offline mode, seamless syncing, and intuitive progress tracking.",
  openGraph: {
    title: "TaskMaster – PWA Task Manager",
    description: "Discover TaskMaster, a Progressive Web App for task management with offline mode, seamless syncing, and intuitive progress tracking.",
    url: "https://nyxtrael.com/case-studies/taskmaster-pwa", // Replace with your actual domain
    siteName: "TaskMaster",
    images: [
      {
        url: "/images/og-images/taskmaster-pwa.png", // Ensure this image exists in /public/images/og-images
        width: 1200,
        height: 630,
        alt: "TaskMaster PWA Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TaskMaster – PWA Task Manager",
    description: "Discover TaskMaster, a Progressive Web App for task management with offline mode, seamless syncing, and intuitive progress tracking.",
    images: ["/images/og-images/taskmaster-pwa.png"], // Ensure this image exists in /public/images/og-images
  },
};