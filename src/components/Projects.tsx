
import { Card, CardContent } from "@/components/ui/card";
import { Sun } from "lucide-react";
import greenHouseImage from "@/assets/116kw_Green_house_scientific_project.jpg";
import balliaImage from "@/assets/10kw_offgrid_Ballia_project.jpg";
import carportImage from "@/assets/10kw_Caarport_Parking_project.jpg";
import gangapurImage from "@/assets/Gangapur_project.jpg";

const Projects = () => {
  const projects = [
    {
      title: "116 KWp Double Glass Green House Scientific Project",
      location: "Chilkahar, Ballia, UP",
      capacity: "116 kW",
      image: greenHouseImage
    },
    {
      title: "10 KWp Rooftop Off-Grid Installation",
      location: "Chilkahar, Ballia, UP",
      capacity: "10 kW",
      image: balliaImage
    },
    {
      title: "10 kW Farm House with Carport Parking",
      location: "Sec-151, Greater Noida",
      capacity: "10 kW",
      image: carportImage
    },
    {
      title: "20 kW On Grid Rooftop Installation",
      location: "Gangapur, Rajasthan",
      capacity: "20 kW",
      image: gangapurImage
    },
    {
      title: "Solar Water Heating System",
      location: "Residential Complex",
      capacity: "15 kW",
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Educational Institution Solar Project",
      location: "School Campus",
      capacity: "25 kW",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sun className="h-8 w-8 text-orange-500" />
            <h2 className="text-4xl font-bold text-gray-900">Our Projects</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful solar installations across various sectors. 
            Each project showcases our commitment to quality and innovation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {project.capacity}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600">📍 {project.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
