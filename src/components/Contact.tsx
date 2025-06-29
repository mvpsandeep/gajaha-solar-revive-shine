
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Sun, MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sun className="h-8 w-8 text-orange-500" />
            <h2 className="text-4xl font-bold text-gray-900">Get In Touch</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your solar journey? Contact our experts for a free consultation 
            and discover how solar power can transform your energy future.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center gap-2">
                <Sun className="h-6 w-6 text-orange-500" />
                Request Your Free Solar Quote
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First Name" className="hover:border-orange-300 focus:border-orange-500" />
                <Input placeholder="Last Name" className="hover:border-orange-300 focus:border-orange-500" />
              </div>
              <Input placeholder="Email Address" type="email" className="hover:border-orange-300 focus:border-orange-500" />
              <Input placeholder="Phone Number" type="tel" className="hover:border-orange-300 focus:border-orange-500" />
              <Input placeholder="Property Type (Residential/Commercial)" className="hover:border-orange-300 focus:border-orange-500" />
              <Textarea 
                placeholder="Tell us about your solar requirements, roof size, current electricity bill, and any specific needs..." 
                rows={4} 
                className="hover:border-orange-300 focus:border-orange-500"
              />
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-3 hover:scale-105 transition-transform">
                Get Free Solar Consultation
              </Button>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-orange-100 rounded-full">
                    <MapPin className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Our Office</h3>
                </div>
                <p className="text-gray-600 text-lg">
                  Gajaha Solar Power Pvt. Ltd.<br />
                  3rd Floor - 308, Meridian View Plaza<br />
                  Commercial Belt, Alpha - 1, Greater Noida<br />
                  Uttar Pradesh, Pincode - 201308<br />
                  India
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-orange-100 rounded-full">
                    <Phone className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Call Us</h3>
                </div>
                <p className="text-gray-600 text-lg">
                  <strong>Mobile:</strong> +91-7065553300<br />
                  <strong>Mobile:</strong> +91-7065553322<br />
                  <strong>Office:</strong> 0120-44903749
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-orange-100 rounded-full">
                    <Mail className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Email Us</h3>
                </div>
                <p className="text-gray-600 text-lg">
                  <strong>General:</strong> info@gajahasolar.com<br />
                  <strong>Sales:</strong> sales@gajahasolar.com<br />
                  <strong>Support:</strong> support@gajahasolar.com
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-orange-100 rounded-full">
                    <Clock className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Business Hours</h3>
                </div>
                <p className="text-gray-600 text-lg">
                  <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM<br />
                  <strong>Saturday:</strong> 10:00 AM - 4:00 PM<br />
                  <strong>Sunday:</strong> Closed<br />
                  <strong>Emergency Support:</strong> 24/7 Available
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
