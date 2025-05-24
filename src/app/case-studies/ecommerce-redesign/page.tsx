import { caseStudies } from "../data";
import productsData from "@/data/products.json";
import categoriesData from "@/data/categories.json";
import customerStoriesData from "@/data/customerStories.json";
import StickyNav from "./StickyNav";
import BackButton from "./BackButton";
import HeroCarousel from "./HeroCarousel";
import ProductGrid from "./ProductGrid";
import PromoBanner from "./PromoBanner";
import CategoryGrid from "./CategoryGrid";
import FeaturedProduct from "./FeaturedProduct";
import CustomerStories from "./CustomerStories";
import Footer from "./Footer";
import "./ecommerce-redesign.css";

interface CustomerStory {
  image: string;
  caption: string;
  customerName?: string;
  initials?: string;
}

interface Category {
  name: string;
  image: string;
  icon: "Shirt" | "Watch" | "Gift";
}

const caseStudy = caseStudies.find((cs) => cs.slug === "ecommerce-redesign");

export default function EcommerceRedesignCaseStudy() {
  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-shoptrend-bg text-shoptrend-text flex items-center justify-center font-lora">
        Case study not found
      </div>
    );
  }

  const products = productsData;
  const categoriesDataTyped = categoriesData as Category[];
  const categories = categoriesDataTyped;
  const customerStoriesDataTyped = customerStoriesData as CustomerStory[];
  const customerStories = customerStoriesDataTyped.map(story => ({
    ...story,
    customerName: story.customerName || "Anonymous",
    initials: story.initials || "A.",
  }));

  return (
    <main role="main" className="ecom-redesign min-h-screen relative overflow-hidden font-lora space-y-12">
      <StickyNav />
      <BackButton />
      <HeroCarousel caseStudy={caseStudy} products={products} />
      <section id="overview" role="region" aria-labelledby="overview-heading" className="section">
        <div className="container">
          <div className="bg-shoptrend-bg rounded-lg shadow-lg p-8 border border-shoptrend-brown">
            <h2
              id="overview-heading"
              className="text-3xl xs:text-4xl font-playfair font-bold text-shoptrend-text mb-6 heading-underline"
            >
              Project Overview
            </h2>
            <p className="text-shoptrend-text font-lora leading-relaxed">
              ShopTrend underwent a full redesign to elevate its online shopping experience. The new design focuses on a luxurious aesthetic, seamless navigation, and a user-friendly interface, transforming the way customers shop for fashion and accessories.
            </p>
          </div>
        </div>
      </section>
      <ProductGrid products={products} />
      <PromoBanner />
      <CategoryGrid categories={categories} />
      <FeaturedProduct mockupY={0} />
      <CustomerStories customerStories={customerStories} />
      <Footer />
    </main>
  );
}