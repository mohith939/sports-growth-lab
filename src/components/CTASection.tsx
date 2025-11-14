import React from 'react';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

interface CTASectionProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  primaryDataEvent?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  secondaryDataEvent?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonHref,
  primaryDataEvent,
  secondaryButtonText,
  secondaryButtonHref,
  secondaryDataEvent
}) => {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-6">{title}</h2>
          <p className="text-xl text-muted-foreground mb-8">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PrimaryButton
              href={primaryButtonHref}
              dataEvent={primaryDataEvent}
            >
              {primaryButtonText}
            </PrimaryButton>
            {secondaryButtonText && secondaryButtonHref && (
              <SecondaryButton
                href={secondaryButtonHref}
                dataEvent={secondaryDataEvent}
              >
                {secondaryButtonText}
              </SecondaryButton>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
