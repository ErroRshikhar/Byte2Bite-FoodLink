import { useState } from 'react';
import { MapPin, Clock, Camera, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const PostFood = () => {
  const [formData, setFormData] = useState({
    foodType: '',
    quantity: '',
    description: '',
    address: '',
    pickupTime: '',
    contactInfo: '',
    images: null as FileList | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would connect to backend when Supabase is integrated
    console.log('Food posting data:', formData);
  };

  return (
    <section id="post" className="py-20 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Share Your Surplus Food</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Help reduce food waste by connecting your surplus food with local NGOs 
            and charities that can distribute it to those in need.
          </p>
        </div>

        <Card className="shadow-warm border-0 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center">
                <Send className="h-4 w-4 text-primary-foreground" />
              </div>
              <span>Post Food Details</span>
            </CardTitle>
            <CardDescription>
              Provide information about the food you'd like to share
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="foodType">Food Type</Label>
                  <Select onValueChange={(value) => setFormData({...formData, foodType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select food category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="prepared-meals">Prepared Meals</SelectItem>
                      <SelectItem value="fresh-produce">Fresh Produce</SelectItem>
                      <SelectItem value="packaged-food">Packaged Food</SelectItem>
                      <SelectItem value="baked-goods">Baked Goods</SelectItem>
                      <SelectItem value="beverages">Beverages</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quantity">Estimated Quantity</Label>
                  <Input
                    id="quantity"
                    placeholder="e.g., 20 portions, 5kg, 10 boxes"
                    value={formData.quantity}
                    onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Food Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe the food, ingredients, preparation method, expiry details..."
                  className="min-h-[100px]"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="address" className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Pickup Address</span>
                  </Label>
                  <Input
                    id="address"
                    placeholder="Enter pickup location"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pickupTime" className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>Available Until</span>
                  </Label>
                  <Input
                    id="pickupTime"
                    type="datetime-local"
                    value={formData.pickupTime}
                    onChange={(e) => setFormData({...formData, pickupTime: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactInfo">Contact Information</Label>
                <Input
                  id="contactInfo"
                  placeholder="Phone number or email"
                  value={formData.contactInfo}
                  onChange={(e) => setFormData({...formData, contactInfo: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="images" className="flex items-center space-x-2">
                  <Camera className="h-4 w-4 text-primary" />
                  <span>Food Images (Optional)</span>
                </Label>
                <Input
                  id="images"
                  type="file"
                  multiple
                  accept="image/*"
                  className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                  onChange={(e) => setFormData({...formData, images: e.target.files})}
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                <Send className="mr-2 h-5 w-5" />
                Post Food for Sharing
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 p-4 bg-muted/50 rounded-lg border border-border">
          <p className="text-sm text-muted-foreground text-center">
            <strong>Note:</strong> To enable real-time posting and NGO matching, connect this app to Supabase 
            for secure authentication and database functionality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PostFood;