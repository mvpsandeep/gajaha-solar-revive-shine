
import { Button } from "@/components/ui/button";
import { Sun, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
              <div className="relative">
                <Sun className="h-12 w-12 text-orange-500 animate-pulse" />
                <div className="absolute inset-0 h-12 w-12 border-2 border-orange-300 rounded-full animate-ping"></div>
              </div>
              <h1 className="text-4xl font-bold text-gray-800">
                Gajaha Solar<span className="text-orange-500"> Power</span>
              </h1>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              SUN POWER
              <span className="text-orange-500 block text-2xl lg:text-3xl font-normal mt-2">
                For A Brighter Future and Greener World for Our Next Generation
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Leading provider of comprehensive solar energy solutions. We specialize in 
              residential, commercial, and industrial solar installations with cutting-edge technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-4 text-lg">
                View Projects
              </Button>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Solar panel installation"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white p-4 rounded-full">
                <Sun className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
