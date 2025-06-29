
import { Button } from "@/components/ui/button";
import { Sun, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
              <div className="relative">
                <Sun className="h-12 w-12 text-orange-500 animate-pulse" />
                <div className="absolute inset-0 h-12 w-12 border-2 border-orange-300 rounded-full animate-ping"></div>
              </div>
              <h1 className="text-4xl font-bold text-gray-800">
                Gajaha<span className="text-orange-500">Solar</span>
              </h1>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Power Your Future with 
              <span className="text-orange-500 block">Clean Energy</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Leading solar energy solutions in Nepal. We provide comprehensive solar power systems, 
              from residential rooftops to large-scale commercial installations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-4 text-lg">
                Our Projects
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-orange-500">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500">100%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Solar panels"
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
