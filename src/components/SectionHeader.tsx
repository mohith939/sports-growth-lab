import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, centered = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="mb-4">{title}</h2>
      {subtitle && <p className="text-xl text-muted-foreground">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
