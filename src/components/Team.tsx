
import { Card, CardContent } from "@/components/ui/card";
import { Sun, Linkedin, Mail } from "lucide-react";
import dnSinghImage from "@/assets/DN_Singh.jpg";
import kuldeepKumarImage from "@/assets/Kuldeep_Kumar.jpg";
import tarunImage from "@/assets/tarun.jpg";
import vijayKumarImage from "@/assets/Vijay-kumar.jpg";
import gajahaLogo from "@/assets/Gajaha_Logo.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. D.N. Singh",
      position: "President",
      experience: "One of the most prominent leaders in solar PV and Semiconductor technology with 51 years of experience. Ph.D. in semiconductor technology from IIT Delhi and former CTO at Indosolar Limited.",
      image: dnSinghImage,
      description: "Leading semiconductor technology expert and solar PV pioneer"
    },
    {
      name: "Mr. Kuldeep Kumar",
      position: "Founder and CEO",
      experience: "M.Tech from IIT-Roorkee with 21 years of experience in Semiconductor and PV technologies. Expert in PV Systems design, installation and commissioning.",
      image: kuldeepKumarImage,
      description: "Visionary founder with deep technical expertise"
    },
    {
      name: "Mr. Tarun Acharya",
      position: "Sr. Consultant",
      experience: "Over 30 years of experience in Project Management and Infrastructure Construction. Former Indian Air Force officer with expertise in executing 3000+ MW solar projects since 2006.",
      image: tarunImage,
      description: "Senior project management expert with global experience"
    },
    {
      name: "Mr. Vijay Kumar",
      position: "Chief Adviser",
      experience: "Master's from IIT-Kanpur with 45+ years of experience in entire PV value chain. Expert in technology evaluations and international cooperation in renewable energy.",
      image: vijayKumarImage,
      description: "Senior technology adviser with comprehensive PV expertise"
    },
    {
      name: "Miss Anupama Singh",
      position: "Director - HR",
      experience: "Human resources leader focused on building exceptional teams in renewable energy sector with strategic organizational development expertise.",
      image: gajahaLogo,
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
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
