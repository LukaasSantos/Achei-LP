import React from 'react';

export const SectionHeading = ({
  badge,
  title,
  subtitle,
  align = 'right',
  className = ''
}) => {
  const alignClass = {
    right: 'text-right items-end ml-auto',
    center: 'text-center items-center mx-auto',
    left: 'text-left items-start mr-auto'
  }[align];

  return (
    <div
      className={`max-w-3xl mb-14 space-y-3 flex flex-col ${alignClass} ${className}`}
      data-aos="fade-up"
    >
      {badge && (
        <div className="inline-flex items-center space-x-2 text-[#00AB4F] text-xs font-bold uppercase tracking-widest p-0 m-0 bg-transparent border-0 shadow-none">
          {/* <span className="w-2 h-2 rounded-full bg-[#00AB4F] animate-pulse"></span> */}
          <span>{badge}</span>
        </div>
      )}

      {title && (
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading">
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="text-sm md:text-base text-gray-400 font-light max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}

      <div className="w-16 h-1 bg-[#00AB4F] rounded-full mt-2"></div>
    </div>
  );
};
