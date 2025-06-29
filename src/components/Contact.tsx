
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Sun } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sun className="h-8 w-8 text-orange-500" />
            <h2 className="text-4xl font-bold text-gray-900">Contact Us</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to make the switch to solar energy? Get in touch with us for a free consultation 
            and personalized solar solution for your needs.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
              </div>
              <Input placeholder="Email Address" type="email" />
              <Input placeholder="Phone Number" type="tel" />
              <Textarea placeholder="Tell us about your project..." rows={4} />
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                Send Message
              </Button>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">📍 Our Location</h3>
                <p className="text-gray-600">
                  Gajaha Solar Pvt. Ltd.<br />
                  Kathmandu, Nepal<br />
                  P.O. Box: 12345
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">📞 Contact Information</h3>
                <p className="text-gray-600">
                  <strong>Phone:</strong> +977-1-5555-123<br />
                  <strong>Mobile:</strong> +977-98-1234-5678<br />
                  <strong>Email:</strong> info@gajahasolar.com<br />
                  <strong>Website:</strong> www.gajahasolar.com
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🕒 Business Hours</h3>
                <p className="text-gray-600">
                  <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM<br />
                  <strong>Saturday:</strong> 9:00 AM - 4:00 PM<br />
                  <strong>Sunday:</strong> Closed
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
