
import { Card, CardContent } from "@/components/ui/card";
import { Sun } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sun className="h-8 w-8 text-orange-500" />
              <h2 className="text-4xl font-bold text-gray-900">About Gajaha Solar Power</h2>
            </div>
            
            <p className="text-lg text-gray-600 mb-6">
              Gajaha Solar Power is a leading renewable energy company specializing in comprehensive 
              solar power solutions. We are committed to providing sustainable, reliable, and 
              cost-effective solar energy systems for residential, commercial, and industrial applications.
            </p>
            
            <p className="text-lg text-gray-600 mb-8">
              Our mission is to accelerate the adoption of clean energy by delivering high-quality 
              solar installations, exceptional customer service, and innovative energy solutions 
              that contribute to a greener future for generations to come.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">1000+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">20+</div>
                  <div className="text-gray-600">Years Experience</div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Solar installation team"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">Certified</div>
              <div className="text-sm opacity-90">Professional Installation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
