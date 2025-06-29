
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Team from "@/components/Team";
import { Card, CardContent } from "@/components/ui/card";
import { Sun, Award, Users, Zap } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sun className="h-12 w-12 text-orange-500 animate-pulse" />
              <h1 className="text-5xl font-bold text-gray-900">About Us</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading India's renewable energy revolution with over fifteen years of experience
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Award className="h-16 w-16 text-orange-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">15+</h3>
                <p className="text-gray-600">Years Experience</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Users className="h-16 w-16 text-orange-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">2000+</h3>
                <p className="text-gray-600">Happy Customers</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Zap className="h-16 w-16 text-orange-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">100MW+</h3>
                <p className="text-gray-600">Solar Installed</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Sun className="h-16 w-16 text-orange-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">100%</h3>
                <p className="text-gray-600">Clean Energy</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <About />
      <Team />
      <Footer />
    </div>
  );
};

export default AboutPage;
