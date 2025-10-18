import { Mail, Linkedin, Github, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Mail, href: 'mailto:shaiksikindar5560@gmail.com', label: 'Email' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sikindarbasha/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/Sikindar1', label: 'GitHub' },
  ];

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-12 h-12 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="flex items-center gap-2 text-background/80">
              Made with <Heart size={16} className="text-primary fill-primary" /> by Shaik Sikindar Basha
            </p>
            <p className="text-sm text-background/60 mt-2">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
