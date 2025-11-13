
import React from 'react';

interface CtaButtonProps {
    href: string;
    text: string;
    isPrimary?: boolean;
    isLarge?: boolean;
}

export const CtaButton: React.FC<CtaButtonProps> = ({ href, text, isPrimary = false, isLarge = false }) => {
    const baseClasses = "font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-block";
    
    const sizeClasses = isLarge 
        ? "px-10 py-5 text-xl" 
        : "px-8 py-4 text-lg";

    const colorClasses = isPrimary
        ? "bg-white text-sky-600 hover:bg-sky-100"
        : "bg-blue-600 text-white hover:bg-blue-700";

    return (
        <a 
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${baseClasses} ${sizeClasses} ${colorClasses}`}
        >
            🔵 👉 {text}
        </a>
    );
};
