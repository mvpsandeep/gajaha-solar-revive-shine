
import { Sun } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sun className="h-8 w-8 text-orange-500" />
              <h3 className="text-2xl font-bold">
                Gajaha Solar<span className="text-orange-500"> Power</span>
              </h3>
            </div>
            <p className="text-gray-400">
              Leading the renewable energy revolution with comprehensive solar power solutions. 
              Powering your future with clean, sustainable energy.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Residential Solar Systems</li>
              <li>Commercial Solar Installation</li>
              <li>Industrial Solar Solutions</li>
              <li>Solar Water Heating</li>
              <li>Grid-Tie Systems</li>
              <li>Maintenance & Support</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>About Us</li>
              <li>Our Projects</li>
              <li>Leadership Team</li>
              <li>Careers</li>
              <li>News & Updates</li>
              <li>Certifications</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>📞 (555) 123-SOLAR</p>
              <p>📱 (555) 987-6543</p>
              <p>✉️ info@gajahasolarpower.com</p>
              <p>📍 123 Solar Avenue, Green Energy District</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Gajaha Solar Power. All rights reserved. | Powering the Future with Clean Energy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
