import React from 'react';

export const GlassCard = ({
  children,
  className = '',
  hoverEffect = true,
  glow = false,
  ...props
}) => {
  return (
    <div
      className={`glass-card rounded-2xl relative overflow-hidden transition-all duration-500 ease-out ${
        hoverEffect
          ? 'hover:border-[#00AB4F]/50 hover:-translate-y-1.5 hover:shadow-[0_14px_34px_-10px_rgba(0,171,79,0.3)]'
          : ''
      } ${
        glow ? 'border-[#00AB4F]/30 shadow-[0_0_30px_rgba(0,171,79,0.1)]' : 'border-white/5'
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

