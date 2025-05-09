"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Head from "next/head";
import AddonsSelector from "../../components/AddonsSelector";
import TermsAgreement from "../../components/TermsAgreement";
import FileUpload from "../../components/FileUpload";

function OrderForm() {
  const [projectType, setProjectType] = useState("image");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    style: "",
    images: "2",
    prompt: "",
    specialIdea: false,
    specialIdeaText: "",
    videoPackage: "",
    videoLength: "",
    videoDescription: "",
    videoLink: "",
    videoAddons: [],
    imageAddons: [],
    webPackage: "",
    webOptions: [],
    webBrief: "",
    commercial: false,
  });
  const [priceEstimate, setPriceEstimate] = useState(null);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [errors, setErrors] = useState({});
  const [priceAnimation, setPriceAnimation] = useState(false);
  const [referenceFiles, setReferenceFiles] = useState([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const presetType = searchParams.get("type") || "image";
    const presetStyle = searchParams.get("style");
    const presetImages = searchParams.get("images");
    const presetPackage = searchParams.get("package");

    setProjectType(presetType);
    if (presetStyle) setFormData((prev) => ({ ...prev, style: presetStyle }));
    if (presetImages) setFormData((prev) => ({ ...prev, images: presetImages }));
    if (presetPackage) {
      setFormData((prev) => ({
        ...prev,
        videoPackage: presetType === "video" ? presetPackage : "",
        webPackage: presetType === "web" ? presetPackage : "",
      }));
    }
  }, [searchParams]);

  useEffect(() => {
    let base = 0;
    let addonsTotal = 0;
    if (projectType === "image") {
      const prices = { mini: 5, scene: 9, divine: 16 };
      base = prices[formData.style] || 0;
      if (formData.specialIdea) addonsTotal += 2.5;
      if (formData.commercial) base *= 1.3;
      const addonPrices = { revision: 3, prompthelp: 5, colorgrading: 3, animatedexport: 10, sourceprompt: 2, commercial: 15 };
      for (const addon of formData.imageAddons) addonsTotal += addonPrices[addon] || 0;
    } else if (projectType === "video") {
      const prices = { shortspark: 30, narrative: 60, feature: 95 };
      const addonPrices = { music: 15, fx: 15, render4k: 5, socialcuts: 10, rush: 20 };
      base = prices[formData.videoPackage] || 0;
      for (const addon of formData.videoAddons) addonsTotal += addonPrices[addon] || 0;
    } else if (projectType === "web") {
      const prices = { onepager: 90, portfolio: 140, magic: 220 };
      const addonPrices = { animation: 20, cms: 50, domain: 20, ecommerce: 100 };
      base = prices[formData.webPackage] || 0;
      for (const opt of formData.webOptions) addonsTotal += addonPrices[opt] || 0;
    }
    setPriceAnimation(true);
    setTimeout(() => setPriceAnimation(false), 1000);
    setPriceEstimate(base + addonsTotal);
  }, [formData, projectType]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked ? [...(prev[name] || []), value] : (prev[name] || []).filter((v) => v !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      contact: "",
      style: "",
      images: "2",
      prompt: "",
      specialIdea: false,
      specialIdeaText: "",
      videoPackage: "",
      videoLength: "",
      videoDescription: "",
      videoLink: "",
      videoAddons: [],
      imageAddons: [],
      webPackage: "",
      webOptions: [],
      webBrief: "",
      commercial: false,
    });
    setProjectType("image");
    setErrors({});
    setPriceEstimate(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.prompt || formData.prompt.length < 5) newErrors.prompt = "Please describe your project.";
    if (!formData.email.includes("@")) newErrors.email = "Valid email required.";
    if (!formData.name) newErrors.name = "Name is required.";
    if (!agreedToTerms) newErrors.agreedToTerms = "You must agree to terms.";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) router.push("/thanks");
  };

  return (
    <>
  <Head>
    <title>Order - Nyxtrael</title>
    <meta name="description" content="Order custom illustrations, web design, or video editing from Nyxtrael." />
  </Head>

  <main className="relative min-h-screen px-6 py-24 md:px-16 text-white bg-gradient-to-b from-[#1A1A2E] to-[#2A2A3E] overflow-hidden scroll-smooth">
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
      poster="/images/stars-fallback.jpg"
      aria-hidden="true"
    >
      <source src="/videos/6917331_Motion Graphics_Motion Graphic_1280x720.mp4" type="video/mp4" />
    </video>

    <div className="relative z-10 min-h-screen px-4 py-20 md:px-12">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 flex justify-center items-center gap-2">
          <img src="/icons/order.svg" alt="Order icon" width="24" height="24" />
          Place Your Order
        </h1>

          <form id="order-form" onSubmit={handleSubmit} className="space-y-8 bg-[#2A2A3E]/50 border border-[#3A3A4E] p-8 rounded-xl shadow-md">

            <div className="flex gap-4 justify-center">
              {[
                { key: 'image', label: '🎨 Illustration' },
                { key: 'video', label: '✂️ Video Editing' },
                { key: 'web', label: '🌐 Web Design' }
              ].map(pt => (
                <motion.button
                  key={pt.key}
                  type="button"
                  onClick={() => setProjectType(pt.key)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                 className={`flex-1 py-2 px-4 rounded-xl border ${
  projectType === pt.key ? 'bg-pink-600 text-white' : 'bg-[#2A2A3E] text-neutral-300 border-[#3A3A4E]'
} transition`}
                >
                  {pt.label}
                </motion.button>
              ))}
            </div>
            {/* Package Selection */}
			{/* Package Selection */}
{projectType && (
  <motion.div
    key={projectType}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="bg-[#2d223e] p-4 rounded-xl text-neutral-200"
  >
    <h3 className="text-lg font-semibold mb-3">Select a Package:</h3>
    {projectType === "image" && (
      <select
        name="style"
        value={formData.style}
        onChange={handleChange}
        className="w-full p-2 rounded bg-[#1a1320] text-white focus:ring-2 focus:ring-pink-400"
        required
      >
        <option value="">-- Choose an illustration package --</option>
        <option value="mini">🌱 Mini Sketch – 5€</option>
        <option value="scene">🌄 Scene Artwork – 9€</option>
        <option value="divine">🌌 Divine Bundle – 16€</option>
      </select>
    )}
    {projectType === "video" && (
      <select
        name="videoPackage"
        value={formData.videoPackage}
        onChange={handleChange}
        className="w-full p-2 rounded bg-[#1a1320] text-white focus:ring-2 focus:ring-pink-400"
        required
      >
        <option value="">-- Choose a video plan --</option>
        <option value="shortspark">🎬 Short Spark – 30€</option>
        <option value="narrative">🎞️ Narrative Flow – 60€</option>
        <option value="feature">🎥 Full Feature – 95€</option>
      </select>
    )}
    {projectType === "web" && (
      <select
        name="webPackage"
        value={formData.webPackage}
        onChange={handleChange}
        className="w-full p-2 rounded bg-[#1a1320] text-white focus:ring-2 focus:ring-pink-400"
        required
      >
        <option value="">-- Choose a web package --</option>
        <option value="onepager">🖥️ One-Pager Site – 90€</option>
        <option value="portfolio">📖 Mini Portfolio – 140€</option>
        <option value="magic">🧙‍♂️ Magic Website – 220€</option>
      </select>
    )}
  </motion.div>
)}

{/* Addons Section */}
<AddonsSelector
  type={projectType}
  selected={
    projectType === "video"
      ? formData.videoAddons
      : projectType === "web"
      ? formData.webOptions
      : formData.imageAddons
  }
  handleChange={handleChange}
  webPackage={formData.webPackage}
  style={formData.style}
/>
{/* Prompt */}
<div>
  <label htmlFor="prompt" className="block text-sm mb-2 text-neutral-400">Describe Your Vision ✨</label>
  <textarea
    id="prompt"
    name="prompt"
    value={formData.prompt}
    onChange={handleChange}
    placeholder="Tell me about the style, mood, and any forbidden topics..."
    className="w-full p-3 rounded-md bg-[#2A2A3E] text-white focus:ring-2 focus:ring-pink-400"
    required
  />
  {errors.prompt && <p className="text-red-400 text-sm mt-1 italic">{errors.prompt}</p>}
</div>

{/* File Upload */}
<FileUpload
  files={referenceFiles}
  onRemove={(index) => setReferenceFiles(prev => prev.filter((_, i) => i !== index))}
  onChange={(e) => {
    const newFiles = Array.from(e.target.files);
    const totalSize = [...referenceFiles, ...newFiles].reduce((acc, f) => acc + f.size, 0);

    if (referenceFiles.length + newFiles.length > 5) {
      alert('Max 5 files allowed.');
      return;
    }
    if (totalSize > 50 * 1024 * 1024) {
      alert('Max total 50MB.');
      return;
    }
    const filtered = newFiles.filter(f => f.size <= 20 * 1024 * 1024);
    if (filtered.length !== newFiles.length) {
      alert('Some files are too big (>20MB) and were skipped.');
    }
    setReferenceFiles(prev => [...prev, ...filtered]);
  }}
/>

{/* Contact Details */}
<div>
  <label htmlFor="name" className="block text-sm mb-2 text-neutral-400">Your Name 👤</label>
  <input
    type="text"
    id="name"
    name="name"
    value={formData.name}
    onChange={handleChange}
    placeholder="What should I call you?"
    className="w-full p-3 rounded-md bg-[#2A2A3E] text-white focus:ring-2 focus:ring-pink-400"
    required
  />
  {errors.name && <p className="text-red-400 text-sm mt-1 italic">{errors.name}</p>}
</div>

<div>
  <label htmlFor="email" className="block text-sm mb-2 text-neutral-400">Email Address 📧</label>
  <input
    type="email"
    id="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    placeholder="Where should I send your mystical updates?"
    className="w-full p-3 rounded-md bg-[#2A2A3E] text-white focus:ring-2 focus:ring-pink-400"
    required
  />
  {errors.email && <p className="text-red-400 text-sm mt-1 italic">{errors.email}</p>}
  <p className="text-neutral-400 text-xs mt-2 italic">
    🔒 Your data is protected. See our <a href="/terms#privacy" className="text-pink-400 hover:text-pink-300 underline">Privacy Note</a>.
  </p>
</div>

            {/* AddonsSelector */}
            {/* Textarea for Prompt */}
            {/* File Upload */}
            {/* Name and Email Inputs */}
            {/* Order Summary */}
            {/* Terms Agreement */}
            {/* Submit and Reset Buttons */}
          </form>
        </section>
        </div>
</main>
    </>
  );
}

export default function OrderPage() {
  return (
    <Suspense fallback={<div className="text-white p-6">Loading form...</div>}>
      <OrderForm />
    </Suspense>
  );
}
