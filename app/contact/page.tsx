import ContactForm from '@/components/contact-form';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <section className="w-full pt-16 md:pt-24 lg:pt-32">
        <div className="container px-4 md:px-6 text-center">
          <Badge variant="default" className="text-sm">Get In Touch</Badge>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline mt-4">
            Partner With Us
          </h1>
          <p className="max-w-[700px] mx-auto mt-4 text-muted-foreground md:text-xl">
            Whether you're a government agency, a hospitality business, or a potential partner, we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="w-full pt-0">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2 space-y-8">
              <h2 className="text-2xl font-bold">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a href="mailto:partner@composg.com" className="text-muted-foreground hover:text-primary">
                      partner@composg.com
                    </a>
                    <p className="text-sm text-muted-foreground">For all partnership inquiries</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <a href="tel:+6561234567" className="text-muted-foreground hover:text-primary">
                      +65 6123 4567
                    </a>
                     <p className="text-sm text-muted-foreground">Mon - Fri, 9am - 6pm</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Office</h3>
                    <p className="text-muted-foreground">123 Green Avenue, #04-56<br />Singapore 123456</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
