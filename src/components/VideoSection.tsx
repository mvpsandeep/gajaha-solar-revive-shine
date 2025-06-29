
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Sun } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sun className="h-8 w-8 text-orange-500" />
            <h2 className="text-4xl font-bold">See Solar Power in Action</h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Watch how we transform homes and businesses with clean, renewable solar energy
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Solar installation video"
                className="rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 rounded-2xl flex items-center justify-center group-hover:bg-black/20 transition-colors duration-300">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 rounded-full p-6">
                  <Play className="h-8 w-8 ml-1" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3">Professional Installation</h3>
                <p className="text-gray-300">
                  Our certified technicians ensure every solar panel is installed with precision and care, 
                  maximizing your system's efficiency and longevity.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3">Quality Components</h3>
                <p className="text-gray-300">
                  We use only the highest quality solar panels, inverters, and mounting systems 
                  from trusted manufacturers with industry-leading warranties.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3">Ongoing Support</h3>
                <p className="text-gray-300">
                  From initial consultation to system monitoring and maintenance, 
                  we're with you every step of your solar journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
