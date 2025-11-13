
import React from 'react';

export const PhoneMockup: React.FC = () => {
    return (
        <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
            <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-sky-400">
                <div className="h-full w-full bg-cover bg-center p-4 text-white flex flex-col items-center justify-between" style={{backgroundImage: 'linear-gradient(to bottom, #38bdf8, #0ea5e9)'}}>
                    <div className="text-center mt-8">
                        <div className="text-6xl font-bold">45</div>
                        <div className="text-lg opacity-80">dias sem fumar</div>
                    </div>
                    <div className="w-full space-y-2">
                        <div className="bg-white/20 p-3 rounded-lg flex items-center gap-3">
                            <span className="text-2xl">🏆</span>
                            <span className="font-semibold">Conquista: 1 Mês!</span>
                        </div>
                         <div className="bg-white/20 p-3 rounded-lg flex items-center gap-3">
                            <span className="text-2xl">💰</span>
                            <span className="font-semibold">R$ 450,00 economizados</span>
                        </div>
                    </div>
                    <div className="text-center mb-8 bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                        <div className="text-4xl mb-2">🌬️</div>
                        <div className="font-bold">Respiração Guiada</div>
                        <div className="text-sm opacity-80">Toque para começar</div>
                    </div>
                </div>
            </div>
        </div>
    );
};