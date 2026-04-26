import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className = '', hover = false }: GlassCardProps) {
  return (
    <div
      className={`
        relative rounded-xl p-6
        bg-white/70 backdrop-blur-lg
        border border-white/30
        shadow-lg shadow-[var(--glass-shadow)]
        ${hover ? 'transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[var(--glass-shadow)]' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
