import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface SecondaryButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  dataEvent?: string;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  href,
  onClick,
  className = '',
  dataEvent
}) => {
  const buttonProps = {
    variant: 'outline' as const,
    size: 'lg' as const,
    className: `text-lg px-8 ${className}`,
    onClick,
    ...(dataEvent && { 'data-event': dataEvent })
  };

  if (href) {
    return (
      <Button asChild {...buttonProps}>
        <a href={href} target="_blank" rel="noopener noreferrer">
          <Download className="mr-2 w-5 h-5" />
          {children}
        </a>
      </Button>
    );
  }

  return <Button {...buttonProps}>{children}</Button>;
};

export default SecondaryButton;
