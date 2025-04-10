import Link from "next/link"

const seriesData = {
  "sunroom-diaries": {
    title: "Sunroom Diaries",
    quote: `"In the stillness of sunlight, thoughts drift like dust."`,
    description:
      "A warm, cozy series inspired by early morning light and reflective solitude. Created using SDXL and ComfyUI.",
    cover: "/images/sunroom-diaries/cover.jpg",
    works: [
      "/images/sunroom-diaries/1.jpg",
      "/images/sunroom-diaries/2.jpg",
      "/images/sunroom-diaries/3.jpg",
    ],
    model: "SDXL",
    engine: "ComfyUI",
    prompts: "12",
    tags: ["cozy", "anime", "slice of life"],
    promptText:
      "A young woman sits by the window in the warm morning light, sipping tea, surrounded by houseplants and soft shadows. An atmosphere of quiet introspection and domestic peace. Ultra detailed, cinematic framing, soft focus, SDXL model.",
    devlog: [
      "🗓️ March 12: Began searching for the perfect morning light — warm, soft, yet not overexposed.",
      "🗓️ March 13: Style exploration inspired by nostalgic 90s anime, focusing on expression and light interplay.",
      "🗓️ March 15: Final adjustments to color palette, composition and tagging. Each frame tells a quiet story."
    ],
    backgroundColor: "bg-[#fefae0] text-neutral-900",
    available: true,
  },
  "red-requiem": {
    title: "Red Requiem",
    quote: `"Cyber monks chant in silence. Neon destiny begins."`,
    description:
      "Dark, gothic cyberpunk vibes fused with monastic mystery. Created with ComfyUI and SDXL.",
    cover: "/images/red-requiem/cover.jpg",
    works: [
      "/images/red-requiem/1.jpg",
      "/images/red-requiem/2.jpg",
      "/images/red-requiem/3.jpg",
    ],
    model: "SDXL",
    engine: "ComfyUI",
    prompts: "14",
    tags: ["cyberpunk", "gothic", "futuristic"],
    promptText:
      "a futuristic monk in neon-lit cathedral, high contrast, gothic sci-fi blend, 85mm, cinematic, dark tones",
    devlog: [
      "Started with ControlNet pose guiding in cathedral scene.",
      "Mid process: switched to dark LUT + post style via nodes.",
      "Final outputs curated from 30 seed tests.",
    ],
    backgroundColor: "bg-black text-white",
    available: true,
  },
}

export default function SeriesSlugPage({ params }) {
  const { slug } = params
  const series = seriesData[slug]

  if (!series) {
    return (
      <div className="text-center py-20 text-neutral-400">
        This series is not available yet.
      </div>
    )
  }

  return (
    <div className={`min-h-screen ${series.backgroundColor} px-4 py-10 space-y-10`}>
      {/* Title & Quote */}
      <section className="text-center space-y-3">
        <h1 className="text-4xl font-bold">{series.title}</h1>
        <p className="text-lg italic text-neutral-500">{series.quote}</p>
        <p className="text-sm text-neutral-500">{series.description}</p>

        {/* Tags */}
        <div className="flex justify-center gap-2 mt-4 flex-wrap">
          {series.tags?.map((tag, i) => (
            <span
              key={i}
              className="bg-neutral-200 text-xs px-3 py-1 rounded-full text-purple-700 hover:scale-105 transition"
            >
              #{tag}
            </span>
          ))}
        </div>
      </section>

      {/* Cover */}
      <section className="w-full">
        <img
          src={series.cover}
          alt={series.title}
          className="rounded-xl w-full object-cover max-h-[500px] mx-auto shadow-lg hover:scale-105 transition duration-300"
        />
      </section>

      {/* Gallery */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {series.works.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Artwork ${index + 1}`}
              className="rounded-lg object-cover w-full h-60 hover:scale-105 transition"
            />
          ))}
        </div>
      </section>

      {/* Prompt reveal */}
      {series.promptText && (
        <details className="mt-6">
          <summary className="cursor-pointer text-sm text-purple-500 underline">
            ▸ Reveal prompt
          </summary>
          <pre className="bg-black text-green-400 p-4 mt-2 rounded whitespace-pre-wrap">
            {series.promptText}
          </pre>
        </details>
      )}

      {/* Technical Info */}
      <section className="text-sm text-neutral-600 space-y-1">
        <p>🧠 Engine: <strong>{series.engine}</strong></p>
        <p>🧬 Model: <strong>{series.model}</strong></p>
        <p>🖼️ Works: <strong>{series.prompts}</strong></p>
      </section>

      {/* Devlog */}
      {series.devlog && (
        <section className="mt-10 space-y-3">
          <h3 className="text-lg font-semibold">📓 Devlog</h3>
          <ul className="list-disc list-inside text-neutral-700 text-sm space-y-1">
            {series.devlog.map((entry, index) => (
              <li key={index}>{entry}</li>
            ))}
          </ul>
        </section>
      )}

      {/* CTA */}
      <section className="pt-4 text-center">
        <Link
          href="/order#ai-art"
          className="inline-block bg-purple-700 hover:bg-purple-600 text-white px-6 py-2 rounded-xl shadow transition"
        >
          ✨ Order similar series
        </Link>
      </section>
    </div>
  )
}
