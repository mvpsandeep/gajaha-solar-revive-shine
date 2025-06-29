
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun, Home, Building, Factory, Wrench, Zap, Droplets } from "lucide-react";

const ServicesPage = () => {
  const serviceDetails = [
    {
      icon: Home,
      title: "Residential Solar Systems",
      description: "Complete home solar solutions including design, installation, and maintenance",
      features: ["Rooftop installations", "Ground-mounted systems", "Battery storage", "Grid-tie systems"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Building,
      title: "Commercial Solar Solutions",
      description: "Large-scale solar installations for businesses and commercial facilities",
      features: ["Office buildings", "Retail stores", "Warehouses", "Industrial facilities"],
      image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Factory,
      title: "Industrial Solar Power",
      description: "High-capacity solar systems for manufacturing and industrial operations",
      features: ["Solar farms", "Manufacturing plants", "Processing facilities", "Distribution centers"],
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sun className="h-12 w-12 text-orange-500 animate-pulse" />
              <h1 className="text-5xl font-bold text-gray-900">Our Services</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solar energy solutions for every need
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {serviceDetails.map((service, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center mb-20 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center gap-3 mb-6">
                  <service.icon className="h-10 w-10 text-orange-500" />
                  <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <Services />
      <Footer />
    </div>
  );
};

export default ServicesPage;
