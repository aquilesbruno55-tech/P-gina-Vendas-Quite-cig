
import React from 'react';
import Header from './components/Header';
import ProblemSection from './components/ProblemSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import DifferentiatorSection from './components/DifferentiatorSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Header />
      <main>
        <ProblemSection />
        <FeaturesSection />
        <TestimonialsSection />
        <DifferentiatorSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
