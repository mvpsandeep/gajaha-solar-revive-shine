
import { Card, CardContent } from "@/components/ui/card";
import { Sun, Linkedin, Mail } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. D.N. Singh",
      position: "President",
      experience: "Distinguished leader with extensive experience in renewable energy sector",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Visionary leader driving India's solar revolution"
    },
    {
      name: "Mr. Kuldeep Kumar",
      position: "Founder and CEO",
      experience: "Pioneering entrepreneur with deep expertise in solar technology and business development",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Founding leader with strategic vision for sustainable energy"
    },
    {
      name: "Mr. Vijay Kumar",
      position: "Chief Adviser",
      experience: "Strategic advisor with comprehensive knowledge in solar project management",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Strategic excellence and industry expertise specialist"
    },
    {
      name: "Miss Anupama Singh",
      position: "Director - HR",
      experience: "Human resources leader focused on building exceptional teams in renewable energy",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "HR excellence and organizational development leader"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sun className="h-8 w-8 text-orange-500" />
            <h2 className="text-4xl font-bold text-gray-900">Our Leadership Team</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the experienced professionals who lead Gajaha Solar Power with vision, 
            expertise, and unwavering commitment to renewable energy excellence in India.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden group">
              <div className="relative">
                <div className="w-full h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm">{member.description}</p>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-orange-500 font-semibold text-lg mb-2">{member.position}</p>
                <p className="text-gray-600 text-sm mb-4">{member.experience}</p>
                <div className="flex justify-center space-x-3">
                  <button className="p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </button>
                  <button className="p-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors">
                    <Mail className="h-4 w-4" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
