
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Residential Solar Systems",
      description: "Custom solar solutions for homes with complete design, installation and maintenance services.",
      icon: "🏠",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Commercial Solar Installation",
      description: "Large-scale solar installations for businesses, offices, and commercial facilities.",
      icon: "🏢",
      image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Industrial Solar Solutions",
      description: "High-capacity solar systems for industrial facilities and manufacturing plants.",
      icon: "🏭",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Solar Water Heating",
      description: "Efficient solar water heating systems for residential and commercial applications.",
      icon: "💧",
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Grid-Tie Systems",
      description: "Connect your solar system to the grid and benefit from net metering programs.",
      icon: "⚡",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Maintenance & Support",
      description: "Comprehensive maintenance, monitoring, and support services for optimal performance.",
      icon: "🔧",
      image: "https://images.unsplash.com/photo-1559302504-87bf06bc6d4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sun className="h-8 w-8 text-orange-500" />
            <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solar energy solutions from consultation to installation and ongoing maintenance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
