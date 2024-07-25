import React from 'react';
import { Car, Zap, Shield, DollarSign } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <Card className="flex flex-col items-center text-center p-6">
    <Icon className="w-12 h-12 mb-4 text-blue-500" />
    <CardHeader className="p-0">
      <CardTitle className="text-xl font-bold">{title}</CardTitle>
    </CardHeader>
    <CardContent className="pt-2">
      <p>{description}</p>
    </CardContent>
  </Card>
);

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to CarHub</h1>
        <p className="text-xl text-gray-600">Your one-stop destination for all things automotive</p>
      </header>

      <div className="mb-12">
        <img src="/placeholder.svg" alt="Latest car model" className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg" />
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Why Choose CarHub?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={Car} 
            title="Wide Selection" 
            description="Browse through our extensive collection of cars from various brands and models."
          />
          <FeatureCard 
            icon={Zap} 
            title="Fast Delivery" 
            description="Get your dream car delivered to your doorstep in record time."
          />
          <FeatureCard 
            icon={Shield} 
            title="Quality Assurance" 
            description="All our cars undergo rigorous quality checks to ensure your satisfaction."
          />
          <FeatureCard 
            icon={DollarSign} 
            title="Competitive Pricing" 
            description="We offer the best deals and financing options to fit your budget."
          />
        </div>
      </section>

      <section className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-4">Ready to Find Your Perfect Car?</h2>
        <p className="text-xl text-gray-600 mb-6">Start your journey with CarHub today and drive away happy!</p>
        <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
          Explore Our Inventory
        </Button>
      </section>

      <footer className="text-center text-gray-500">
        <p>&copy; 2023 CarHub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;