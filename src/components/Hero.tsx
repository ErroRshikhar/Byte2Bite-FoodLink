import { ArrowRight, Users, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero.jpg';


const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Community food sharing - hands connecting surplus food with those in need"
          className="w-full h-full object-cover opacity-50"
        />
        {/* Overlay with 50% opacity */}
        <div className="absolute inset-0 bg-background/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              <span className="text-foreground">Connecting </span>
              <span className="bg-gradient-hero bg-clip-text text-foreground">Surplus Food</span>
              <span className="text-foreground"> with </span>
              <span className="bg-gradient-warm bg-clip-text text-foreground">Hungry Mouths</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Bridge the gap between food waste and hunger. Connect event organizers, 
              restaurants, and individuals with surplus food to nearby NGOs and charities 
              making a real difference in communities.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="bg-gray-300 border border-border rounded-lg p-4 shadow-soft max-w-xs group">
                <Utensils className="mr-2 h-5 w-5" />
                Post Surplus Food
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="warm" size="lg" className="bg-gray-300 border border-border rounded-lg p-4 shadow-soft max-w-xs group">
                <Users className="mr-2 h-5 w-5" />
                Find NGOs
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Impact Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start mt-12 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Meals Saved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-secondary">250+</div>
                <div className="text-sm text-muted-foreground">NGOs Connected</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent">5 Tons</div>
                <div className="text-sm text-muted-foreground">Food Rescued</div>
              </div>
            </div>
          </div>

          {/* Floating Cards */}
          <div className="hidden lg:block relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="space-y-4 animate-float">
                <div className="bg-gray-300 border border-border rounded-lg p-4 shadow-soft max-w-xs">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
                      <Utensils className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Fresh Wedding Catering</div>
                      <div className="text-xs text-muted-foreground">50 portions available</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-300 border border-border rounded-lg p-4 shadow-soft max-w-xs ml-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-warm rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-secondary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Hope Community Kitchen</div>
                      <div className="text-xs text-muted-foreground">2.5 km away</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
