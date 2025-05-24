interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  index: number;
}

export default function FeatureCard({ icon, title, description, color, index }: FeatureCardProps) {
  return (
    <div
      className={`relative p-6 rounded-xl shadow-lg border ${color} bg-gray-800 animate-slide-up`}
      style={{ animationDelay: `${index * 0.2}s` }}
      role="listitem"
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-2xl font-semibold text-gray-200 mb-4 text-center font-roboto">{title}</h3>
      <p className="text-gray-400 text-center font-roboto">{description}</p>
    </div>
  );
}