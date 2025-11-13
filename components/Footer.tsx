
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 text-slate-400 py-8">
            <div className="container mx-auto px-6 text-center">
                <p className="mb-4">QuitCig © 2025 – Todos os direitos reservados</p>
                <div className="flex justify-center space-x-4">
                    <a href="#" className="hover:text-white transition-colors">Contato</a>
                    <span>|</span>
                    <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                    <span>|</span>
                    <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
