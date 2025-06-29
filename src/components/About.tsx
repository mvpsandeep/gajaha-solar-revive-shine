
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
              <h2 className="text-4xl font-bold text-gray-900">About GajahaSolar</h2>
            </div>
            
            <p className="text-lg text-gray-600 mb-6">
              Gajaha Solar is a leading solar energy company in Nepal, dedicated to providing 
              sustainable and reliable solar power solutions. With over 15 years of experience 
              in the renewable energy sector, we have successfully completed hundreds of projects 
              across the country.
            </p>
            
            <p className="text-lg text-gray-600 mb-8">
              Our mission is to make clean, renewable energy accessible to everyone while 
              contributing to Nepal's sustainable development goals. We believe in quality, 
              innovation, and customer satisfaction.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Solar installation"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">ISO Certified</div>
              <div className="text-sm opacity-90">Quality Assured</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
