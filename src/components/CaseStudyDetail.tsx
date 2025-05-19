import Image from "next/image";
import { FaTools } from "react-icons/fa";

interface CaseStudyDetailProps {
  title: string;
  description: string;
  context: string;
  approach: string;
  tools: string[];
  outcome: string;
  image: string;
  date: string;
}

export default function CaseStudyDetail({
  title,
  description,
  context,
  approach,
  tools,
  outcome,
  image,
  date,
}: CaseStudyDetailProps) {
  return (
    <div className="text-text-primary">
      {/* Hero Image */}
      <div className="relative w-full h-96 mb-12 overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={`${title} project image`}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute inset-0 bg-black opacity-40" />
      </div>

      {/* Content */}
      <h1 className="text-4xl md:text-5xl font-bold mb-6 heading-underline">{title}</h1>
      <p className="text-text-secondary text-lg mb-8">{date}</p>
      <p className="text-lg mb-6">{description}</p>

      <div className="grid md:grid-cols-2 gap-12 mb-12">
        {/* Context */}
        <div>
          <h2 className="text-2xl font-semibold text-accent mb-4">Context</h2>
          <p className="text-text-secondary">{context}</p>
        </div>

        {/* Approach */}
        <div>
          <h2 className="text-2xl font-semibold text-accent mb-4">Approach</h2>
          <p className="text-text-secondary">{approach}</p>
        </div>
      </div>

      {/* Tools */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-accent mb-4 flex items-center">
          <FaTools className="mr-2" /> Tools
        </h2>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool, index) => (
            <span
              key={index}
              className="bg-surface px-3 py-1 rounded-full text-sm text-text-primary"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Outcome */}
      <div>
        <h2 className="text-2xl font-semibold text-accent mb-4">Outcome</h2>
        <p className="text-text-secondary">{outcome}</p>
      </div>
    </div>
  );
}