import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PostFood from '@/components/PostFood';
import NGOFinder from '@/components/NGOFinder';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import AIFoodChecker from '@/components/AIFoodChecker';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <PostFood />
      <NGOFinder />
      <About />
      <Contact />
      <Footer />
      
      {/* Floating Components */}
      <Chatbot />
      <AIFoodChecker />
    </div>
  );
};

export default Index;
