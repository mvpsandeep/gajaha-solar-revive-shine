
import { Card, CardContent } from "@/components/ui/card";
import { Sun } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Mr. Arjun Maharjan",
      position: "Chairman/CEO",
      experience: "20+ years in renewable energy",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Mr. K.R. Pandeya",
      position: "Managing Director",
      experience: "18+ years in solar technology",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Mr. Anish Sharma",
      position: "General Manager - Technical",
      experience: "15+ years in project management",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sun className="h-8 w-8 text-orange-500" />
            <h2 className="text-4xl font-bold text-gray-900">Our Team</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our experienced leadership team of solar energy professionals who drive 
            innovation and deliver exceptional results for every project.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-orange-500 font-medium mb-2">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.experience}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
