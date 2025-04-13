const galleryData = [
  {
    title: "Sunroom Diaries",
    slug: "sunroom-diaries",
    quote: "In the stillness of sunlight, thoughts drift like dust.",
    description:
      "A series bathed in morning nostalgia — warm light, cozy moments, and ceramic cups.",
    status: "Complete",
    cover: "/images/sunroom-diaries/cover.jpg",
    thumbnails: [
      "/images/sunroom-diaries/1.jpg",
      "/images/sunroom-diaries/2.jpg",
      "/images/sunroom-diaries/3.jpg"
    ],
    model: "SDXL",
    engine: "ComfyUI",
    prompts: "12",
    promptText:
      "A young woman sits by the window in the warm morning light, sipping tea, surrounded by houseplants and soft shadows. An atmosphere of quiet introspection and domestic peace. Ultra detailed, cinematic framing, soft focus, SDXL model.",
    devlog: [
      "🗓️ March 12: Began searching for the perfect morning light — warm, soft, yet not overexposed.",
      "🗓️ March 13: Style exploration inspired by nostalgic 90s anime, focusing on expression and light interplay.",
      "🗓️ March 15: Final adjustments to color palette, composition and tagging. Each frame tells a quiet story."
    ],
    backgroundColor: "bg-[#fefae0] text-neutral-900",
    tags: [
      { label: "#cozycore", description: "Soft light and cozy atmospheres." },
      { label: "#melancholyvibes", description: "Artful sadness in still moments." },
      { label: "#sliceoflife", description: "Everyday beauty and simplicity." },
      { label: "#AIvisions", description: "Dreams shaped through generative design." },
      { label: "#warmLight", description: "Golden-hour tones and natural light." },
    ],
  },
  {
    title: "Red Requiem",
    slug: "red-requiem",
    quote: "Cyber monks chant in silence. Neon destiny begins.",
    description:
      "Cyber-gothic monks and neon cathedral echoes. Chanting in silence, bathed in crimson faith.",
    status: "Complete",
    cover: "/images/red-requiem/cover.jpg",
    thumbnails: [
      "/images/red-requiem/1.jpg",
      "/images/red-requiem/2.jpg",
      "/images/red-requiem/3.jpg"
    ],
    model: "SDXL",
    engine: "ComfyUI",
    prompts: "14",
    promptText:
      "a futuristic monk in neon-lit cathedral, high contrast, gothic sci-fi blend, 85mm, cinematic, dark tones",
    devlog: [
      "Started with ControlNet pose guiding in cathedral scene.",
      "Mid process: switched to dark LUT + post style via nodes.",
      "Final outputs curated from 30 seed tests.",
    ],
    backgroundColor: "bg-black text-white",
    tags: [
      { label: "#gothicAI", description: "Neo-gothic spiritualism fused with tech." },
      { label: "#melancholyvibes", description: "Artful sadness in still moments." },
      { label: "#roses", description: "Thorns, beauty, and silent drama." },
      { label: "#cathedralSilence", description: "Ethereal calm in monumental spaces." },
      { label: "#AIvisions", description: "Dreams shaped through generative design." },
    ],
  },
  {
    title: "Astral Divines",
    slug: "astral-divines",
    quote: "Golden deities, woven from stardust and silence.",
    description:
      "Golden-haired deities woven from stardust, guardians of cosmic balance draped in light. Each gaze stirs silence among galaxies.",
    status: "Complete",
    cover: "/images/astral-divines/cover.jpg",
    thumbnails: [
      "/images/astral-divines/1.jpg",
      "/images/astral-divines/2.jpg",
      "/images/astral-divines/3.jpg",
      "/images/astral-divines/4.jpg"
    ],
    model: "SDXL",
    engine: "ComfyUI",
    prompts: "18",
    promptText:
      "ethereal celestial beings in shimmering robes, cosmic background, stars, divinity, portrait with glow effect, highly detailed SDXL",
    devlog: [
      "Initial concepts were based on constellations and astral projections.",
      "Integrated chromatic light blends and gold overlays in post.",
      "Final render took 7 hours due to compositing and upscaling.",
    ],
    backgroundColor: "bg-gradient-to-b from-[#1a0e2a] to-[#0c0f1e] text-white",
    tags: [
      { label: "#celestial", description: "Heavenly radiance and divine serenity." },
      { label: "#AIvisions", description: "Dreams shaped through generative design." },
      { label: "#futuremyth", description: "Synthetic mythology for a digital age." },
      { label: "#chromedivine", description: "Spiritual elegance with sci-fi undertones." },
    ],
  },
];

export default galleryData;
