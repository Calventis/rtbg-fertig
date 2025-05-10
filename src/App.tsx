import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Schedule from './components/Schedule';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Impressum from './components/Impressum';
import MediaGallery from './components/MediaGallery';
import Gallery from './components/Gallery';
import FightAnnouncement from './components/FightAnnouncement';
import FloatingActionBar from './components/FloatingActionBar';
import CourseSelection from './components/CourseSelection';
import Fighters from './components/Fighters';
import TrainersPage from './components/TrainersPage';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [showImpressum, setShowImpressum] = React.useState(false);
  const [currentView, setCurrentView] = React.useState('home');
  const [selectedGalleryCategory, setSelectedGalleryCategory] = React.useState('all');

  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'impressum') {
        setShowImpressum(true);
        setCurrentView('impressum');
      } else if (hash.startsWith('gallery/')) {
        const category = hash.split('/')[1];
        setCurrentView('gallery');
        setSelectedGalleryCategory(category);
        setShowImpressum(false);
      } else if (hash === 'gallery') {
        setCurrentView('gallery');
        setSelectedGalleryCategory('all');
        setShowImpressum(false);
      } else if (hash === 'courses') {
        setCurrentView('courses');
        setShowImpressum(false);
      } else if (hash === 'fighters') {
        setCurrentView('fighters');
        setShowImpressum(false);
      } else if (hash === 'trainers') {
        setCurrentView('trainers');
        setShowImpressum(false);
      } else if (hash === 'about' || hash === 'schedule') {
        setCurrentView('home');
        setShowImpressum(false);
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        setCurrentView(hash || 'home');
        setShowImpressum(false);
      }
      
      if (hash !== 'about' && hash !== 'schedule') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (path: string) => {
    setCurrentView(path.split('/')[0]);
    setIsMenuOpen(false);
    if (path === 'impressum') {
      setShowImpressum(true);
    } else {
      setShowImpressum(false);
    }
    if (path.startsWith('gallery/')) {
      const category = path.split('/')[1];
      setSelectedGalleryCategory(category);
    }
    window.location.hash = path;
  };

  const renderContent = () => {
    if (showImpressum) {
      return <Impressum />;
    }

    switch (currentView) {
      case 'gallery':
        return <Gallery initialCategory={selectedGalleryCategory} />;
      case 'courses':
        return <CourseSelection />;
      case 'fighters':
        return <Fighters />;
      case 'trainers':
        return <TrainersPage />;
      default:
        return (
          <>
            <Hero />
            <AboutUs />
            <Schedule />
            <MediaGallery />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <FightAnnouncement />
      <NavBar 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        onNavigate={handleNavigate}
      />
      <FloatingActionBar />
      <main>
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;