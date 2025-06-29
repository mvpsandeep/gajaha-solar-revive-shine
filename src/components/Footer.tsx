
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
                Gajaha<span className="text-orange-500">Solar</span>
              </h3>
            </div>
            <p className="text-gray-400">
              Leading the way in sustainable solar energy solutions across Nepal. 
              Powering your future with clean, renewable energy.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Residential Solar</li>
              <li>Commercial Solar</li>
              <li>Solar Water Heating</li>
              <li>Grid-Tie Systems</li>
              <li>Off-Grid Solutions</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>About Us</li>
              <li>Our Projects</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>News & Updates</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>📞 +977-1-5555-123</p>
              <p>📱 +977-98-1234-5678</p>
              <p>✉️ info@gajahasolar.com</p>
              <p>📍 Kathmandu, Nepal</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Gajaha Solar Pvt. Ltd. All rights reserved. | Powering Nepal with Clean Energy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
