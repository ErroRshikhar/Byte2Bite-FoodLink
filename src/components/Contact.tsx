import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would connect to backend when Supabase is integrated
    console.log('Contact form data:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@foodlink.org',
      description: 'Get in touch for partnerships or support'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) FOOD-LINK',
      description: 'Monday to Friday, 9 AM - 6 PM EST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 Community Way, Food City, FC 12345',
      description: 'Our office is open to community partners'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-foreground">Get in Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions, suggestions, or want to partner with us? 
            We'd love to hear from you and explore how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={info.title} className="border-0 shadow-soft animate-scale-in" style={{animationDelay: `${index * 100}ms`}}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{info.title}</h4>
                        <p className="text-primary font-medium mb-1">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            <Card className="border-0 shadow-soft bg-gradient-subtle">
              <CardContent className="p-6 text-center">
                <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Join Our Community</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Follow us for updates and food rescue tips
                </p>
                <div className="flex justify-center space-x-3">
                  <Button variant="outline" size="sm">Twitter</Button>
                  <Button variant="outline" size="sm">LinkedIn</Button>
                  <Button variant="outline" size="sm">Instagram</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-warm border-0 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-warm rounded-full flex items-center justify-center">
                    <Send className="h-4 w-4 text-secondary-foreground" />
                  </div>
                  <span>Send us a Message</span>
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry, partnership proposal, or how we can help..."
                      className="min-h-[120px]"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground text-center">
                <strong>Note:</strong> To enable real-time message handling and automated responses, 
                connect this app to Supabase for backend functionality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;