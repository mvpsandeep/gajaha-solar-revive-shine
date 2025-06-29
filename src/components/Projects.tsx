
import { Card, CardContent } from "@/components/ui/card";
import { Sun } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Residential Rooftop Installation",
      location: "Suburban Home",
      capacity: "8.5 kW",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Commercial Office Building",
      location: "Downtown Business District",
      capacity: "45 kW",
      image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Industrial Solar Farm",
      location: "Manufacturing Facility",
      capacity: "120 kW",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Community Solar Project",
      location: "Municipal Building",
      capacity: "75 kW",
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Agricultural Solar Installation",
      location: "Farm Operations",
      capacity: "25 kW",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Educational Institution",
      location: "School Campus",
      capacity: "60 kW",
      image: "https://images.unsplash.com/photo-1581091870621-fee9725cd7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
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
