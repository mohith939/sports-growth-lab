import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface PrimaryButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  dataEvent?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  href,
  onClick,
  className = '',
  dataEvent
}) => {
  const buttonProps = {
    size: 'lg' as const,
    className: `bg-accent hover:bg-accent-hover shadow-accent text-lg px-8 ${className}`,
    onClick,
    ...(dataEvent && { 'data-event': dataEvent })
  };

  if (href) {
    return (
      <Button asChild {...buttonProps}>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children} <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </Button>
    );
  }

  return <Button {...buttonProps}>{children}</Button>;
};

export default PrimaryButton;
