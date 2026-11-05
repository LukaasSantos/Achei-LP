import React from 'react';

export const Button = ({
  children,
  variant = 'glow',
  size = 'md',
  href,
  onClick,
  className = '',
  target,
  rel,
  type = 'button',
  icon,
  iconPosition = 'right',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-bold rounded-full transition-all duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-[#00AB4F]/50';

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-6 py-3 text-sm gap-2',
    lg: 'px-8 py-4 text-base gap-2.5'
  };

  const variantStyles = {
    glow: 'btn-glow bg-[#00AB4F] hover:bg-[#00853c] text-white shadow-lg hover:shadow-[#00AB4F]/25 hover:scale-[1.02] active:scale-[0.98]',
    outline: 'border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white hover:scale-[1.02] active:scale-[0.98]',
    ghost: 'text-gray-300 hover:text-white hover:bg-white/5',
    secondary: 'bg-[#131b2e] hover:bg-[#1a253e] text-white border border-white/10 hover:border-[#00AB4F]/40'
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.glow} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={target}
        rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
        onClick={onClick}
        {...props}
      >
        {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};

