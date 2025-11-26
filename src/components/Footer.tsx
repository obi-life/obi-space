import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display text-2xl font-black mb-4 text-gradient">OBI</h3>
            <p className="text-background/80 leading-relaxed">
              Where city ends and nature begins. Your outdoor venue for celebrations, connections, and memories.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-background/80">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>hello@obi.com</span>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span>Off Sarjapur Road, Bengaluru</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>&copy; {new Date().getFullYear()} OBI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
