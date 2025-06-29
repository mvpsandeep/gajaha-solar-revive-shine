
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Users, Award, TreePine } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Zap,
      number: "100MW+",
      label: "Solar Power Installed",
      description: "Clean energy generating capacity"
    },
    {
      icon: Users,
      number: "2000+",
      label: "Happy Customers",
      description: "Satisfied clients across India"
    },
    {
      icon: Award,
      number: "15+",
      label: "Years Experience",
      description: "Decade and a half of solar expertise"
    },
    {
      icon: TreePine,
      number: "25K+",
      label: "Trees Equivalent",
      description: "CO2 emissions prevented annually"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="relative mb-4">
                  <stat.icon className="h-16 w-16 text-orange-500 mx-auto animate-pulse" />
                  <div className="absolute inset-0 h-16 w-16 border-2 border-orange-300 rounded-full mx-auto animate-ping opacity-75"></div>
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</p>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
