
import React from 'react';

const DifferentiatorSection: React.FC = () => {
    return (
        <section className="py-20 md:py-28 bg-slate-50">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <div className="inline-block bg-sky-100 text-sky-600 rounded-full p-4 mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        Por que o QuitCig vale cada centavo
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        O QuitCig não é um app comum — é um guia pessoal que te acompanha diariamente, mantendo você motivado, focado e no controle. Com um valor mensal menor que uma carteira de cigarros, você investe em algo que realmente muda sua vida.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default DifferentiatorSection;