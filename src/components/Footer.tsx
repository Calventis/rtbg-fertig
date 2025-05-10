import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    
    if (!href) return;

    if (href === '#impressum') {
      window.location.hash = 'impressum';
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    if (href === '#gallery') {
      window.location.hash = 'gallery';
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    const targetElement = document.querySelector(href);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.pageYOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <img 
              src="https://tibyxmobrwazabhbwptm.supabase.co/storage/v1/object/sign/royal-media/Royal%20Thai%20Box%20Gym/LOGO.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2U2NjE2YjJjLTMxODctNDVlOC1hYTIwLWUwZjNkMzgzNTg4MSJ9.eyJ1cmwiOiJyb3lhbC1tZWRpYS9Sb3lhbCBUaGFpIEJveCBHeW0vTE9HTy5qcGciLCJpYXQiOjE3NDY0NDgyMzMsImV4cCI6ODc0NzQ0MDIzM30.qguqdAUm5a5tUgm2diq7IMRQsZ3ReZvv25q71C8v-Is" 
              alt="Royal Thai Box Gym Logo" 
              className="h-24 w-auto object-contain mb-4"
            />
            <p className="text-gray-400">
              Professionelles Muay Thai Training in moderner Atmosphäre. 
              Werde Teil unserer Kampfsport-Familie!
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" onClick={handleLinkClick} className="text-gray-400 hover:text-red-600">Home</a></li>
              <li><a href="#about" onClick={handleLinkClick} className="text-gray-400 hover:text-red-600">Über uns</a></li>
              <li><a href="#schedule" onClick={handleLinkClick} className="text-gray-400 hover:text-red-600">Kursplan</a></li>
              <li><a href="#gallery" onClick={handleLinkClick} className="text-gray-400 hover:text-red-600">Galerie</a></li>
              <li><a href="#contact" onClick={handleLinkClick} className="text-gray-400 hover:text-red-600">Kontakt</a></li>
              <li><a href="#impressum" onClick={handleLinkClick} className="text-gray-400 hover:text-red-600">Impressum</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Regentenstraße 74</li>
              <li>42389 Wuppertal</li>
              <li>
                <a href="tel:015901122335" className="hover:text-red-600 transition-colors">
                  Tel: 015901122335
                </a>
              </li>
              <li>
                <a href="mailto:info@royalthaiboxgym.de" className="hover:text-red-600 transition-colors">
                  Email: info@royalthaiboxgym.de
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Folge uns</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/royalthay.boxgym?locale=de_DE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-600 transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://www.instagram.com/royal_thai_box_gym/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-600 transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
            <div className="mt-4 text-sm text-gray-400">
              <p>Geschäftsführer: Hamdi Mehmeti</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Royal Thai Box Gym. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;