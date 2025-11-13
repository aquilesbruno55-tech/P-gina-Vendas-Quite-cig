
import React from 'react';
import { CtaButton } from './CtaButton';

const CtaSection: React.FC = () => {
    return (
        <section className="py-20 md:py-28 bg-sky-600 text-white">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                        🚀 Dê o primeiro passo hoje mesmo.
                    </h2>
                    <p className="text-lg text-sky-100 mb-8 leading-relaxed">
                        Você já tentou parar antes — agora é o momento de conseguir de verdade. Assine o QuitCig e comece hoje sua jornada rumo à liberdade.
                    </p>
                    <CtaButton 
                        href="https://pay.cakto.com.br/3fvycc5_647029" 
                        text="Assinar QuitCig agora – Acesso mensal"
                        isPrimary={true}
                        isLarge={true}
                    />
                </div>
            </div>
        </section>
    );
};

export default CtaSection;