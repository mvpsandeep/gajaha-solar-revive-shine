
import { Button } from "@/components/ui/button";
import { Sun, ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-blue-200 rounded-full animate-bounce opacity-40"></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 bg-yellow-200 rounded-full animate-pulse opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
              <div className="relative">
                <Sun className="h-16 w-16 text-orange-500 animate-spin" style={{animationDuration: '10s'}} />
                <div className="absolute inset-0 h-16 w-16 border-2 border-orange-300 rounded-full animate-ping"></div>
              </div>
              <div>
                <h1 className="text-5xl font-bold text-gray-800">
                  Gajaha Solar<span className="text-orange-500"> Power</span>
                </h1>
                <p className="text-lg text-gray-600 mt-2">Leading Solar Solutions in Nepal</p>
              </div>
            </div>
            
            <h2 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              HARNESS THE
              <span className="text-orange-500 block animate-pulse">SUN'S POWER</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl animate-fade-in">
              Transform your energy future with our comprehensive solar solutions. From residential rooftops 
              to large-scale commercial installations, we deliver clean, reliable, and cost-effective solar power systems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg hover:scale-105 transition-transform">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-4 text-lg hover:scale-105 transition-transform">
                <Play className="mr-2 h-5 w-5" />
                Watch Video
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">20+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">1000+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">50MW+</div>
                <div className="text-sm text-gray-600">Installed Capacity</div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Solar panel installation"
                className="rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -top-6 -right-6 bg-orange-500 text-white p-4 rounded-full animate-bounce">
                <Sun className="h-10 w-10" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-blue-500 text-white p-4 rounded-lg shadow-lg">
                <div className="text-sm font-semibold">Clean Energy</div>
                <div className="text-xs opacity-90">24/7 Power Generation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
