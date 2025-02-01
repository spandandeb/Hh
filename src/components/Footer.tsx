import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">FoodLink</h3>
            <p className="text-sm">
              Connecting surplus food with those who need it most, creating a more sustainable and caring community.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </p>
              <p className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>contact@foodlink.org</span>
              </p>
              <p className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4" />
                <span>123 Food Street, Kitchen City, FC 12345</span>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Hours</h3>
            <div className="space-y-2 text-sm">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} FoodLink. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;