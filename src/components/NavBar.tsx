import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { scrollToCenter } from '../utils/scroll';

interface NavBarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  onNavigate: (path: string) => void;
}

interface GalleryCategory {
  id: string;
  name: string;
  path: string;
}

const galleryCategories: GalleryCategory[] = [
  { id: 'events', name: 'Veranstaltungen', path: 'gallery/events' },
  { id: 'gym', name: 'Gym', path: 'gallery/gym' },
  { id: 'adults', name: 'Training Erwachsene', path: 'gallery/adults' },
  { id: 'kids', name: 'Training Kids', path: 'gallery/kids' }
];

const NavBar: React.FC<NavBarProps> = ({ isMenuOpen, setIsMenuOpen, onNavigate }) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const handleSectionClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    window.location.hash = sectionId;
    scrollToCenter(sectionId);
    setIsMenuOpen(false);
    setIsAboutOpen(false);
  };

  const handleGalleryClick = (e: React.MouseEvent, category?: string) => {
    e.preventDefault();
    if (category) {
      onNavigate(category);
    } else {
      onNavigate('gallery');
    }
    setIsGalleryOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full bg-black bg-opacity-95 z-40 top-[var(--announcement-height,40px)] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center space-x-1">
            <button onClick={() => onNavigate('home')} className="flex items-center">
              <img 
                src="https://tibyxmobrwazabhbwptm.supabase.co/storage/v1/object/sign/royal-media/Royal%20Thai%20Box%20Gym/LOGO.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2U2NjE2YjJjLTMxODctNDVlOC1hYTIwLWUwZjNkMzgzNTg4MSJ9.eyJ1cmwiOiJyb3lhbC1tZWRpYS9Sb3lhbCBUaGFpIEJveCBHeW0vTE9HTy5qcGciLCJpYXQiOjE3NDY0NDgyMzMsImV4cCI6ODc0NzQ0MDIzM30.qguqdAUm5a5tUgm2diq7IMRQsZ3ReZvv25q71C8v-Is" 
                alt="Royal Thai Box Gym Logo" 
                className="h-16 w-auto object-contain"
                style={{ minWidth: '200px' }}
              />
              <div className="hidden md:block ml-1">
                <h1 className="text-white text-2xl font-bold tracking-wide hover:text-red-600 transition-colors">
                  Royal Thai Box Gym
                </h1>
              </div>
            </button>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <button onClick={() => onNavigate('home')} className="text-white hover:text-red-600 transition-colors">Home</button>
              
              {/* About Us Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsAboutOpen(true)}
                onMouseLeave={() => setIsAboutOpen(false)}
              >
                <button 
                  className="flex items-center text-white hover:text-red-600 transition-colors"
                >
                  Über uns
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                <div 
                  className={`absolute left-0 mt-2 w-48 bg-black bg-opacity-95 rounded-md shadow-lg py-1 transition-all duration-200 ${
                    isAboutOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
                  }`}
                >
                  <a
                    href="#trainers"
                    onClick={() => onNavigate('trainers')}
                    className="block px-4 py-2 text-sm text-white hover:bg-red-600 transition-colors"
                  >
                    Unsere Trainer
                  </a>
                  <a
                    href="#fighters"
                    onClick={() => onNavigate('fighters')}
                    className="block px-4 py-2 text-sm text-white hover:bg-red-600 transition-colors"
                  >
                    Unsere Kämpfer
                  </a>
                </div>
              </div>

              <a 
                href="#schedule"
                onClick={(e) => handleSectionClick(e, 'schedule')}
                className="text-white hover:text-red-600 transition-colors"
              >
                Kursplan
              </a>
              
              {/* Gallery Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsGalleryOpen(true)}
                onMouseLeave={() => setIsGalleryOpen(false)}
              >
                <button 
                  onClick={(e) => handleGalleryClick(e)}
                  className="flex items-center text-white hover:text-red-600 transition-colors"
                >
                  Galerie
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                <div 
                  className={`absolute left-0 mt-2 w-48 bg-black bg-opacity-95 rounded-md shadow-lg py-1 transition-all duration-200 ${
                    isGalleryOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
                  }`}
                >
                  {galleryCategories.map((category) => (
                    <a
                      key={category.id}
                      href={`#${category.path}`}
                      onClick={(e) => handleGalleryClick(e, category.path)}
                      className="block px-4 py-2 text-sm text-white hover:bg-red-600 transition-colors"
                    >
                      {category.name}
                    </a>
                  ))}
                </div>
              </div>
              
              <a
                href="#courses"
                onClick={(e) => handleSectionClick(e, 'courses')}
                className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors"
              >
                Probetraining
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black">
            <button onClick={() => onNavigate('home')} className="block w-full text-left text-white hover:text-red-600 px-3 py-2">Home</button>
            
            {/* Mobile About Us Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsAboutOpen(!isAboutOpen)}
                className="flex items-center justify-between w-full text-left text-white hover:text-red-600 px-3 py-2"
              >
                <span>Über uns</span>
                <ChevronDown className={`w-4 h-4 transform transition-transform ${isAboutOpen ? 'rotate-180' : ''}`} />
              </button>
              {isAboutOpen && (
                <div className="pl-6 space-y-1">
                  <a
                    href="#trainers"
                    onClick={() => onNavigate('trainers')}
                    className="block text-white hover:text-red-600 px-3 py-2 text-sm"
                  >
                    Unsere Trainer
                  </a>
                  <a
                    href="#fighters"
                    onClick={() => onNavigate('fighters')}
                    className="block text-white hover:text-red-600 px-3 py-2 text-sm"
                  >
                    Unsere Kämpfer
                  </a>
                </div>
              )}
            </div>

            <a 
              href="#schedule"
              onClick={(e) => handleSectionClick(e, 'schedule')}
              className="block w-full text-left text-white hover:text-red-600 px-3 py-2"
            >
              Kursplan
            </a>
            
            <div className="relative">
              <button
                onClick={() => setIsGalleryOpen(!isGalleryOpen)}
                className="flex items-center justify-between w-full text-left text-white hover:text-red-600 px-3 py-2"
              >
                <span>Galerie</span>
                <ChevronDown className={`w-4 h-4 transform transition-transform ${isGalleryOpen ? 'rotate-180' : ''}`} />
              </button>
              {isGalleryOpen && (
                <div className="pl-6 space-y-1">
                  {galleryCategories.map((category) => (
                    <a
                      key={category.id}
                      href={`#${category.path}`}
                      onClick={(e) => handleGalleryClick(e, category.path)}
                      className="block text-white hover:text-red-600 px-3 py-2 text-sm"
                    >
                      {category.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            
            <a
              href="#courses"
              onClick={(e) => handleSectionClick(e, 'courses')}
              className="block bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 mt-4"
            >
              Probetraining
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;