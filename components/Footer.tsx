import Image from "next/image";
import {
  House,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
  Youtube,
} from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { label: "WhatsApp", href: "https://wa.me/919513708090", icon: MessageCircle },
  { label: "Instagram", href: "https://www.instagram.com/anythinkmediaandevents/", icon: Instagram },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/anythink-media/", icon: Linkedin },
  { label: "YouTube", href: "https://www.youtube.com/@anythinkmediaandevents", icon: Youtube },
] as const;

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Who We Are", href: "/about" },
  { label: "What We Do", href: "/services" },
  { label: "Our Work", href: "/work" },
  { label: "Contact Us", href: "/contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-line bg-black relative overflow-hidden">
      {/* Background layer with opacity */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(/homepage/anythinkmedialogobl.svg)',
          opacity: 0.1
        }}
      />
      
      {/* Content layer */}
      <div className="site-rail relative z-10 grid gap-12 py-16 sm:grid-cols-3 sm:items-start sm:gap-8 sm:py-20">
        <div className="space-y-12 pt-10 r">
          <div>
            <div className="mb-4 flex items-center gap-2 font-sans text-sm font-semibold uppercase tracking-[0.12em] text-chalk-dim">
              <Mail size={20} fill="currentColor" aria-hidden="true" />
              <a className="font-mono text-xl font-bold text-mustard transition-opacity hover:opacity-75" href="mailto:rubina@anythink.media">
              rubina@anythink.media
            </a>
            </div>
           
          </div>

          <div>
            <div className="mb-4 flex items-center gap-2 font-sans text-sm font-semibold uppercase tracking-[0.12em] text-chalk-dim">
              <Phone size={19} fill="currentColor" aria-hidden="true" />
               <a className="font-mono text-xl font-bold text-mustard transition-opacity hover:opacity-75" href="tel:+919513708090">
              +91 9513708090
            </a>
            </div>
          
          </div>

          <div>
            <div className="mb-4 flex items-center gap-2 font-sans text-sm font-semibold uppercase tracking-[0.12em] text-chalk-dim ">
              <House size={26} fill="currentColor" aria-hidden="true" />
          <address className="max-w-84 not-italic font-mono text-xl font-bold leading-tight text-mustard ">
              Ulsoor, 1st Floor, Bangalore,
              <br />
              Karnataka - 560 063
            </address>
            </div>
            
          </div>
        </div>

        <nav aria-label="Footer navigation" className="sm:pt-1  h-full ">
          <ul className="grid gap-6 font-mono text-lg text-white/80 pt-8  justify-center">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link className="transition-colors hover:text-mustard" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
         <div className="flex items-center gap-7 justify-center h-full sm:pt-2">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              className="text-chalk-dim transition-colors hover:text-mustard"
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
            >
              <Icon size={26} strokeWidth={2} aria-hidden="true" />
            </a>
          ))}
        </div>
        {/* <div className="flex items-center justify-center sm:pt-2  h-full">
          <Link href="/" aria-label="anyTHINK Media and Events home" className="inline-flex ">
            <Image
              src="/homepage/anythinkmedialogobl.svg"
              alt="anyTHINK Media and Events"
              width={300}
              height={100}
              className="h-auto w-[min(300px,80vw)]"
            />
          </Link>
        </div> */}
       
      </div>
      <div className="border-t border-line/40 relative z-10 py-5 text-center font-sans text-sm text-chalk-dim">
        Copyright © anythink@2025
      </div>
    </footer>
  );
}
