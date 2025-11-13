
import React from 'react';

interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100 flex items-start space-x-4">
        <div className="text-3xl">{icon}</div>
        <div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">{title}</h3>
            <p className="text-slate-600">{description}</p>
        </div>
    </div>
);

const FeaturesSection: React.FC = () => {
    const features = [
        { icon: '⏱️', title: 'Contador em tempo real', description: 'Acompanhe o tempo desde o último cigarro.' },
        { icon: '💰', title: 'Calculadora de economia', description: 'Veja quanto dinheiro já poupou.' },
        { icon: '🏆', title: 'Conquistas diárias', description: 'Receba recompensas a cada vitória.' },
        { icon: '🌬️', title: 'Exercícios de respiração guiada', description: 'Controle a ansiedade e o impulso.' },
        { icon: '✅', title: 'Tarefas do dia', description: 'Pequenas metas que te mantêm firme.' },
        { icon: '🔐', title: 'Conta segura', description: 'Salve seu progresso e volte quando quiser.' },
    ];

    return (
        <section className="py-20 md:py-28 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Seu parceiro diário na jornada para parar de fumar.
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;