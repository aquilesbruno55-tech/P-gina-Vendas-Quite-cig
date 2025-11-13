
import React from 'react';

interface TestimonialCardProps {
    quote: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote }) => (
    <div className="bg-sky-500 p-8 rounded-xl shadow-lg text-white relative">
        <svg className="absolute top-4 left-4 w-8 h-8 text-sky-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.73 1.95A2.99 2.99 0 005.99 5.01l-.01.02c0 1.65 1.34 3 3 3h.02c1.65 0 3-1.34 3-3V2.02c-.01-.02-.02-.05-.03-.07zM3.73 1.95A2.99 2.99 0 00-1.01 5.01l-.01.02c0 1.65 1.34 3 3 3h.02c1.65 0 3-1.34 3-3V2.02c-.01-.02-.02-.05-.03-.07z" transform="translate(3,3)"></path>
        </svg>
        <blockquote className="text-lg italic leading-relaxed">
            {quote}
        </blockquote>
    </div>
);

const TestimonialsSection: React.FC = () => {
    const testimonials = [
        "Já estou há 45 dias sem fumar. O QuitCig me motiva todos os dias.",
        "Pagar por mês é pouco perto do que economizo sem o cigarro.",
        "Nunca foi tão fácil controlar a vontade. Recomendo demais!"
    ];

    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((quote, index) => (
                        <TestimonialCard key={index} quote={quote} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;