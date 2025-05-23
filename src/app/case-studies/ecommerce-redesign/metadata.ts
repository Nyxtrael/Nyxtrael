import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecommerce Redesign Case Study - ShopTrend | Grok",
  description: "Explore the ShopTrend ecommerce redesign case study, showcasing a luxurious and user-friendly online shopping experience with seamless navigation and elegant design.",
  openGraph: {
    title: "Ecommerce Redesign Case Study - ShopTrend",
    description: "Discover how ShopTrend transformed its online shopping experience with a luxurious redesign, seamless navigation, and user-friendly interface.",
    url: "https://yourdomain.com/case-studies/ecommerce-redesign",
    siteName: "Grok",
    images: [
      {
        url: "/images/promo.jpg",
        width: 1200,
        height: 630,
        alt: "ShopTrend Ecommerce Redesign Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecommerce Redesign Case Study - ShopTrend",
    description: "See how ShopTrend elevated its ecommerce platform with a luxurious redesign and seamless user experience.",
    images: ["/images/promo.jpg"],
  },
};