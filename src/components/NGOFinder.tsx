import { useState } from 'react';
import { MapPin, Clock, Phone, Star, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

interface NGO {
  id: string;
  name: string;
  description: string;
  address: string;
  phone: string;
  distance: string;
  workingHours: string;
  rating: number;
  specialties: string[];
  verified: boolean;
}

const sampleNGOs: NGO[] = [
  {
    id: '1',
    name: 'Hope Community Kitchen',
    description: 'Providing meals to homeless individuals and families in need',
    address: '123 Main St, Downtown',
    phone: '+1 (555) 123-4567',
    distance: '2.5 km',
    workingHours: '9:00 AM - 8:00 PM',
    rating: 4.8,
    specialties: ['Prepared Meals', 'Emergency Food'],
    verified: true
  },
  {
    id: '2',
    name: 'Green Harvest Food Bank',
    description: 'Collecting and distributing fresh produce to low-income families',
    address: '456 Oak Avenue, Westside',
    phone: '+1 (555) 987-6543',
    distance: '3.8 km',
    workingHours: '8:00 AM - 6:00 PM',
    rating: 4.6,
    specialties: ['Fresh Produce', 'Packaged Food'],
    verified: true
  },
  {
    id: '3',
    name: 'Unity Shelter Services',
    description: 'Supporting homeless shelter with regular meal programs',
    address: '789 Pine Road, Eastside',
    phone: '+1 (555) 456-7890',
    distance: '5.2 km',
    workingHours: '24/7',
    rating: 4.9,
    specialties: ['Prepared Meals', 'Beverages'],
    verified: true
  }
];

const NGOFinder = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [ngos] = useState<NGO[]>(sampleNGOs);

  const handleNotifyNGO = (ngoId: string) => {
    // This would connect to backend when Supabase is integrated
    console.log('Notifying NGO:', ngoId);
  };

  return (
    <section id="ngos" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Find Nearby NGOs & Charities</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with verified NGOs and charities in your area ready to collect 
            and distribute surplus food to those who need it most.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Enter your location to find nearby NGOs"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              className="pl-10 h-12"
            />
            <Button variant="hero" size="sm" className="absolute right-2 top-1/2 transform -translate-y-1/2">
              Search
            </Button>
          </div>
        </div>

        {/* NGO Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ngos.map((ngo, index) => (
            <Card key={ngo.id} className={`group hover:shadow-warm transition-all duration-300 bg-gray-300 border-0 shadow-soft animate-scale-in`} style={{animationDelay: `${index * 100}ms`}}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg flex items-center space-x-2">
                      <span>{ngo.name}</span>
                      {ngo.verified && (
                        <Badge variant="secondary" className="bg-yellow-100 text-xs">
                          ✓ Verified
                        </Badge>
                      )}
                    </CardTitle>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(ngo.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">{ngo.rating}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-yellow-100 text-primary">
                    {ngo.distance}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription>{ngo.description}</CardDescription>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{ngo.address}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{ngo.workingHours}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span>{ngo.phone}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {ngo.specialties.map((specialty, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-2 pt-2">
                  <Button 
                    variant="hero" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => handleNotifyNGO(ngo.id)}
                  >
                    Notify for Pickup
                  </Button>
                  <Button variant="outline" size="sm">
                    <Navigation className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-muted/50 rounded-lg border border-border text-center">
          <p className="text-muted-foreground mb-4">
            <strong>Coming Soon:</strong> Interactive map view and real-time NGO availability
          </p>
          <p className="text-sm text-muted-foreground">
            Connect with us to enable live NGO data, real-time notifications, and advanced filtering
          </p>
        </div>
      </div>
    </section>
  );
};

export default NGOFinder;