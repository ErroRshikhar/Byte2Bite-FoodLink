import { Heart, Target, Users, Leaf } from 'lucide-react';
// If 'card' is in 'src/components/ui/card.tsx', use:
import { Card, CardContent } from "../components/ui/card";

// Or, if you are using a UI library like 'shadcn/ui', use:
 // import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Community Impact',
      description: 'Building bridges between food abundance and food insecurity in our communities.'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Reducing food waste while promoting environmental responsibility and conscious consumption.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Connecting restaurants, event organizers, NGOs, and individuals for maximum impact.'
    },
    {
      icon: Target,
      title: 'Efficiency',
      description: 'Streamlined processes that make food sharing quick, safe, and accessible for everyone.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-foreground">About Foodlink</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            FoodLink was born from a simple yet powerful observation: while millions of people 
            struggle with food insecurity, tons of perfectly good food goes to waste every day 
            from events, restaurants, and households. We believe technology can bridge this gap 
            and create a more equitable, sustainable food system.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="bg-card/80 backdrop-blur-sm border-0 shadow-soft">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To eliminate food waste and hunger simultaneously by creating an efficient, 
                  technology-driven platform that connects surplus food with those who need it most, 
                  while fostering community partnerships and environmental sustainability.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border-0 shadow-soft">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A world where no edible food goes to waste and no person goes hungry. 
                  We envision thriving communities where sharing surplus food is as natural 
                  as recycling, creating lasting social and environmental impact.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card 
                  key={value.title} 
                  className="text-center group hover:shadow-warm transition-all duration-300 border-0 shadow-soft animate-scale-in"
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Impact Stats */}
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-soft">
          <h3 className="text-2xl font-bold text-center mb-8">Our Growing Impact</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10,847</div>
              <div className="text-sm text-muted-foreground">Meals Saved</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">276</div>
              <div className="text-sm text-muted-foreground">Partner NGOs</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">5.2</div>
              <div className="text-sm text-muted-foreground">Tons Food Rescued</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1,240</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Join us in creating a more sustainable and equitable food system for everyone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;