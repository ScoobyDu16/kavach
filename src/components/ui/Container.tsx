import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Consistent page-width container.
 * max-w-7xl + horizontal padding: 16px mobile → 24px tablet → 48px desktop
 */
export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}
