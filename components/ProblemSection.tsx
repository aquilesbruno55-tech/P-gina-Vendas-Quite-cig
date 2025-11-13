
import React from 'react';

const ProblemSection: React.FC = () => {
    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        Fumar parece aliviar — mas só prende ainda mais.
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        O vício te faz acreditar que o cigarro traz calma, mas na verdade ele aumenta a dependência. Com o QuitCig, você aprende a lidar com a vontade, controla o estresse e transforma o desejo de fumar em força de superação.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;