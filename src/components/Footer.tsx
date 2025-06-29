
import { Sun, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="relative">
                  <Sun className="h-10 w-10 text-orange-500 animate-pulse" />
                  <div className="absolute inset-0 h-10 w-10 border-2 border-orange-300 rounded-full animate-ping opacity-50"></div>
                </div>
                <h3 className="text-3xl font-bold">
                  Gajaha Solar<span className="text-orange-500"> Power</span>
                </h3>
              </div>
              <p className="text-gray-300 text-lg mb-6 max-w-md">
                Leading Nepal's renewable energy revolution with comprehensive solar power solutions. 
                Powering your future with clean, sustainable, and reliable solar energy systems.
              </p>
              <div className="flex space-x-4">
                <button className="p-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
                  <Facebook className="h-5 w-5" />
                </button>
                <button className="p-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
                  <Twitter className="h-5 w-5" />
                </button>
                <button className="p-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
                  <Instagram className="h-5 w-5" />
                </button>
                <button className="p-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-6 text-orange-500">Our Services</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="hover:text-orange-500 transition-colors cursor-pointer">Residential Solar Systems</li>
                <li className="hover:text-orange-500 transition-colors cursor-pointer">Commercial Solar Installation</li>
                <li className="hover:text-orange-500 transition-colors cursor-pointer">Industrial Solar Solutions</li>
                <li className="hover:text-orange-500 transition-colors cursor-pointer">Solar Water Heating</li>
                <li className="hover:text-orange-500 transition-colors cursor-pointer">Grid-Tie Systems</li>
                <li className="hover:text-orange-500 transition-colors cursor-pointer">Maintenance & Support</li>
                <li className="hover:text-orange-500 transition-colors cursor-pointer">Solar Financing</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-6 text-orange-500">Contact Info</h4>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Gajaha Solar Power Pvt. Ltd.</p>
                    <p>Baluwatar, Kathmandu</p>
                    <p>Nepal</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-orange-500" />
                  <p>+977-1-4419245</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-orange-500" />
                  <p>info@gajahasolar.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
              &copy; 2024 Gajaha Solar Power Pvt. Ltd. All rights reserved. | Powering Nepal with Clean Energy
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
