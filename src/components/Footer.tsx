import { Heart, Utensils, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { name: 'Post Food', href: '#post' },
      { name: 'Find NGOs', href: '#ngos' },
      { name: 'How It Works', href: '#about' },
      { name: 'Success Stories', href: '#' }
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Us', href: '#contact' },
      { name: 'Report Issue', href: '#' },
      { name: 'Feedback', href: '#' }
    ],
    community: [
      { name: 'NGO Partners', href: '#' },
      { name: 'Volunteer', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Newsletter', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Guidelines', href: '#' }
    ]
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="bg-grey-300 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Utensils className="h-8 w-8 text-primary-foreground" />
                <Heart className="h-4 w-4 text-secondary absolute -top-1 -right-1" />
              </div>
              <span className="text-2xl font-bold">FoodLink</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Connecting surplus food with hungry mouths. Building stronger, 
              more sustainable communities one meal at a time.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@foodlink.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) FOOD-LINK</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Community Way, Food City</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-primary-foreground/80 mb-4 md:mb-0">
              © {currentYear} FoodLink. All rights reserved. Made with{' '}
              <Heart className="inline h-4 w-4 text-secondary" /> for communities.
            </div>
            
            <div className="flex space-x-6">
              {footerLinks.legal.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Impact Banner */}
        <div className="mt-8 bg-primary-foreground/10 rounded-lg p-6 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-2xl font-bold text-secondary">10K+</div>
              <div className="text-sm text-primary-foreground/80">Meals Saved</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary">276</div>
              <div className="text-sm text-primary-foreground/80">NGO Partners</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary">5.2T</div>
              <div className="text-sm text-primary-foreground/80">Food Rescued</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary">1.2K</div>
              <div className="text-sm text-primary-foreground/80">Active Users</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;