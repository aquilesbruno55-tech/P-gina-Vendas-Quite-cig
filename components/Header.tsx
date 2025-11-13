
import React from 'react';
import { PhoneMockup } from './PhoneMockup';
import { CtaButton } from './CtaButton';

const NoSmokingIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.49-12.49L7.51 16.49a.5.5 0 0 1-.71-.71l8.98-8.98a.5.5 0 1 1 .71.71zM8 12h6v2H8v-2zm-1-3h10v2H7V9z" />
        <path d="M17.5 9.5c0 .28-.22.5-.5.5h-1v1h.5c.28 0 .5.22.5.5s-.22.5-.5.5h-.5v1h1c.28 0 .5.22.5.5s-.22.5-.5.5H15v1c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-1h-.5a2.5 2.5 0 0 1 0-5H14v-1c0-.28.22-.5.5-.5s.5.22.5.5v1h.5c.28 0 .5.22.5.5z" opacity=".3" />
        <path d="M18.12 12.12c.06-.23.12-.46.12-.7 0-.9-.39-1.7-1.02-2.27L18.67 7.7a.5.5 0 0 0-.7-.7l-1.45 1.45C16.14 8.16 15.68 8 15.12 8h-4.6c-2.02 0-3.66 1.63-3.66 3.65 0 1.2.6 2.27 1.5 2.92l-2.09 2.09a.5.5 0 0 0 .7.7l2.09-2.09c.47.16.98.25 1.5.25h3.6l.78-2.33 1.56 1.56a.5.5 0 0 0 .7-.7l-1.46-1.46zM15.12 10h-4.6c-1.03 0-1.87-.84-1.87-1.87S9.49 6.25 10.52 6.25h4.6c1.03 0 1.87.84 1.87 1.88s-.84 1.87-1.87 1.87z" transform="translate(-4, -2) scale(1.3)" fill="#ffffff"/>
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M2.5 5.5l19 13" stroke="#fff" strokeWidth="2.5" transform="rotate(20 12 12)"/>
    </svg>
);


const Header: React.FC = () => {
    return (
        <header className="bg-sky-500 text-white pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden relative">
            <div className="container mx-auto px-6 text-center relative z-10">
                <div className="flex flex-col items-center gap-4 mb-12">
                     <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                        <NoSmokingIcon className="w-24 h-24 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                        Pare de fumar de vez — e transforme sua rotina.
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-sky-100">
                        Com o QuitCig, você tem um guia diário para vencer o vício do cigarro, controlar sua ansiedade e celebrar cada conquista. Tudo isso por um valor mensal acessível, que cabe no seu bolso.
                    </p>
                </div>
                
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
                    <div className="lg:w-1/2 lg:text-left flex flex-col items-center lg:items-start">
                        <CtaButton 
                            href="https://pay.cakto.com.br/3fvycc5_647029"
                            text="Quero começar agora"
                            isPrimary={true}
                        />
                    </div>
                    <div className="lg:w-1/2 flex justify-center">
                        <PhoneMockup />
                    </div>
                </div>
            </div>
             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-sky-500 to-sky-600 opacity-80 z-0"></div>
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-white/10 rounded-full"></div>
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full"></div>
        </header>
    );
};

export default Header;