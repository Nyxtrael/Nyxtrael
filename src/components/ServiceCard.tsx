interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  return (
    <div className="relative bg-surface p-8 rounded-xl border border-gray-800 card overflow-hidden">
      {/* Gradient Border Overlay */}
      <div className="absolute inset-0 border-2 border-transparent rounded-xl bg-gradient-to-r from-transparent via-accent to-transparent opacity-20" />
      <div className="relative">
        <h3 className="text-2xl md:text-3xl font-semibold text-text-primary mb-4">{title}</h3>
        <p className="text-text-secondary leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;