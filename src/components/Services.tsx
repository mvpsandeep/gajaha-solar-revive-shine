
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Residential Solar",
      description: "Custom solar solutions for homes with complete installation and maintenance services.",
      icon: "🏠"
    },
    {
      title: "Commercial Solar",
      description: "Large-scale solar installations for businesses and industrial facilities.",
      icon: "🏢"
    },
    {
      title: "Solar Water Heating",
      description: "Efficient solar water heating systems for residential and commercial use.",
      icon: "💧"
    },
    {
      title: "Grid-Tie Systems",
      description: "Connect your solar system to the grid and sell excess power back.",
      icon: "⚡"
    },
    {
      title: "Off-Grid Solutions",
      description: "Complete off-grid solar systems with battery storage for remote locations.",
      icon: "🔋"
    },
    {
      title: "Maintenance & Support",
      description: "Comprehensive maintenance and support services for all solar installations.",
      icon: "🔧"
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
            We offer comprehensive solar energy solutions tailored to your specific needs, 
            from initial consultation to ongoing maintenance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
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
