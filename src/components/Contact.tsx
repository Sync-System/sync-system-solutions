import { Mail, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 px-4 bg-muted">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary inline-block px-4 py-1 rounded-full bg-primary/10 text-sm font-medium mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
            Let's Start a Conversation
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business? Contact us to discuss your technology needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center p-6 bg-white rounded-xl">
            <Mail className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold text-accent mb-2">Email Us</h3>
            <p className="text-muted-foreground text-center">contact@syncsystem.us</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-white rounded-xl">
            <Phone className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold text-accent mb-2">Call Us</h3>
            <p className="text-muted-foreground text-center">+1 (555) 123-4567</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-white rounded-xl">
            <MapPin className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold text-accent mb-2">Visit Us</h3>
            <p className="text-muted-foreground text-center">United States</p>
          </div>
        </div>
      </div>
    </section>
  );
};