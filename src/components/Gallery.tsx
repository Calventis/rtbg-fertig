import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";

interface GalleryProps {
  initialCategory?: string;
}

interface GalleryItem {
  src: string;
  category: string;
  title?: string;
  section?: string;
  isVideo?: boolean;
}

const categories = [
  { id: 'all', name: 'Alle' },
  { id: 'events', name: 'Veranstaltungen' },
  { id: 'gym', name: 'Gym' },
  { id: 'adults', name: 'Training Erwachsene' },
  { id: 'kids', name: 'Training Kids' }
];

const galleryItems: GalleryItem[] = [
  // Gym Images
  { src: "/public/Medien Royal Thai/Galerie/GYM/IMG-20250415-WA0012.jpg", category: "gym" },
  { src: "/public/Medien Royal Thai/Galerie/GYM/IMG-20250415-WA0013.jpg", category: "gym" },
  { src: "/public/Medien Royal Thai/Galerie/GYM/IMG-20250415-WA0014.jpg", category: "gym" },
  { src: "/public/Medien Royal Thai/Galerie/GYM/IMG-20250415-WA0015.jpg", category: "gym" },
  { src: "/public/Medien Royal Thai/Galerie/GYM/IMG-20250415-WA0016.jpg", category: "gym" },
  { src: "/public/Medien Royal Thai/Galerie/GYM/IMG-20250415-WA0017.jpg", category: "gym" },

  // Adults Training Images
  { src: "/public/Medien Royal Thai/Galerie/TRAINING ERWACHSENE/royalthaiboxgym-14.jpeg", category: "adults" },
  { src: "/public/Medien Royal Thai/Galerie/TRAINING ERWACHSENE/royalthaiboxgym_gallery_0010.jpeg", category: "adults" },
  { src: "/public/Medien Royal Thai/Galerie/TRAINING ERWACHSENE/royalthaiboxgym_gallery_0011.jpeg", category: "adults" },
  { src: "/public/Medien Royal Thai/Galerie/TRAINING ERWACHSENE/royalthaiboxgym_gallery_0012.jpeg", category: "adults" },
  { src: "/public/Medien Royal Thai/Galerie/TRAINING ERWACHSENE/royalthaiboxgym_gallery_0019.jpeg", category: "adults" },
  { src: "/public/Medien Royal Thai/Galerie/TRAINING ERWACHSENE/royalthaiboxgym_gallery_0018.jpeg", category: "adults" },
  { src: "/public/Medien Royal Thai/Galerie/TRAINING ERWACHSENE/royalthaiboxgym_gallery_0021.jpeg", category: "adults" },
  { src: "/public/Medien Royal Thai/Galerie/TRAINING ERWACHSENE/royalthaiboxgym_gallery_0017.jpeg", category: "adults" },
  { src: "/public/Medien Royal Thai/Galerie/TRAINING ERWACHSENE/royalthaiboxgym_gallery_0014.jpeg", category: "adults" },
  { src: "/public/Medien Royal Thai/Galerie/TRAINING ERWACHSENE/royalthaiboxgym-06.jpeg", category: "adults" },
  { src: "/public/Medien Royal Thai/Galerie/TRAINING ERWACHSENE/royalthaiboxgym-13.jpeg", category: "adults" },
  { src: "/public/Medien Royal Thai/Galerie/TRAINING ERWACHSENE/royalthaiboxgym-07.jpeg", category: "adults" },
  { src: "/public/Medien Royal Thai/Galerie/TRAINING ERWACHSENE/IMG-20250415-WA0004.jpg", category: "adults" },
  { src: "/public/Medien Royal Thai/Galerie/TRAINING ERWACHSENE/IMG-20250415-WA0022.jpg", category: "adults" },
  { src: "/public/Medien Royal Thai/Galerie/TRAINING ERWACHSENE/IMG-20250415-WA0005.jpg", category: "adults" },

  // Kids Training Images
  { src: "/public/Medien Royal Thai/Galerie/TRAINING KIDS/royalthaiboxgym_gallery_005.jpeg", category: "kids" },
  { src: "/public/Medien Royal Thai/Galerie/TRAINING KIDS/royalthaiboxgym_gallery_006.jpeg", category: "kids" },

  // Event Images - Eigene Hausgala
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Eigene Hausgala/IMG-20231201-WA0019.jpg", category: "events", section: "Eigene Hausgala - Dezember 2023" },
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Eigene Hausgala/IMG-20231203-WA0013.jpg", category: "events", section: "Eigene Hausgala - Dezember 2023" },
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Eigene Hausgala/IMG-20231203-WA0023.jpg", category: "events", section: "Eigene Hausgala - Dezember 2023" },
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Eigene Hausgala/IMG-20231203-WA0034.jpg", category: "events", section: "Eigene Hausgala - Dezember 2023" },
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Eigene Hausgala/IMG-20231203-WA0045.jpg", category: "events", section: "Eigene Hausgala - Dezember 2023" },
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Eigene Hausgala/IMG-20231203-WA0050.jpg", category: "events", section: "Eigene Hausgala - Dezember 2023" },
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Eigene Hausgala/IMG-20231203-WA0052.jpg", category: "events", section: "Eigene Hausgala - Dezember 2023" },
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Eigene Hausgala/IMG-20231203-WA0059.jpg", category: "events", section: "Eigene Hausgala - Dezember 2023" },
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Eigene Hausgala/IMG-20231203-WA0060.jpg", category: "events", section: "Eigene Hausgala - Dezember 2023" },
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Eigene Hausgala/IMG-20231203-WA0062.jpg", category: "events", section: "Eigene Hausgala - Dezember 2023" },
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Eigene Hausgala/IMG-20231203-WA0066.jpg", category: "events", section: "Eigene Hausgala - Dezember 2023" },
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Eigene Hausgala/IMG-20231203-WA0073.jpg", category: "events", section: "Eigene Hausgala - Dezember 2023" },
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Eigene Hausgala/IMG-20231203-WA0091.jpg", category: "events", section: "Eigene Hausgala - Dezember 2023" },

  // Event Images - Night of the Champs
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Night of the Champs/IMG-20250415-WA0021.jpg", category: "events", section: "Night of the Champs - März 2023" },
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Night of the Champs/IMG-20250415-WA0024.jpg", category: "events", section: "Night of the Champs - März 2023" },
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Night of the Champs/pdf_converter_202206094817.jpeg", category: "events", section: "Night of the Champs - März 2023" },
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Night of the Champs/pdf_converter_202206094838.jpeg", category: "events", section: "Night of the Champs - März 2023" },
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Night of the Champs/pdf_converter_202206094856.jpeg", category: "events", section: "Night of the Champs - März 2023" },
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Night of the Champs/pdf_converter_202206094931.jpeg", category: "events", section: "Night of the Champs - März 2023" },
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Night of the Champs/pdf_converter_202206094947.jpeg", category: "events", section: "Night of the Champs - März 2023" },
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Night of the Champs/pdf_converter_202206095257.jpeg", category: "events", section: "Night of the Champs - März 2023" },

  // Event Images - Bakis Fight night 06
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Bakis Fight night 06/IMG-20230604-WA0007.jpg", category: "events", section: "Bakis Fight Night - Juni 2023" },
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Bakis Fight night 06/IMG-20230604-WA0010.jpg", category: "events", section: "Bakis Fight Night - Juni 2023" },
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Bakis Fight night 06/IMG-20230604-WA0012.jpg", category: "events", section: "Bakis Fight Night - Juni 2023" },
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Bakis Fight night 06/IMG-20230604-WA0015.jpg", category: "events", section: "Bakis Fight Night - Juni 2023" },
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Bakis Fight night 06/IMG-20230604-WA0019.jpg", category: "events", section: "Bakis Fight Night - Juni 2023" },
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Bakis Fight night 06/IMG-20230604-WA0024.jpg", category: "events", section: "Bakis Fight Night - Juni 2023" },
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Bakis Fight night 06/IMG-20230604-WA0025.jpg", category: "events", section: "Bakis Fight Night - Juni 2023" },
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Bakis Fight night 06/IMG-20230604-WA0028.jpg", category: "events", section: "Bakis Fight Night - Juni 2023" },
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Bakis Fight night 06/IMG_20230603_162557_850.jpg", category: "events", section: "Bakis Fight Night - Juni 2023" },
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Bakis Fight night 06/IMG-20230603-WA0011.jpg", category: "events", section: "Bakis Fight Night - Juni 2023" },
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Bakis Fight night 06/IMG-20230603-WA0016.jpg", category: "events", section: "Bakis Fight Night - Juni 2023" },
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Bakis Fight night 06/20230603_145053.jpg", category: "events", section: "Bakis Fight Night - Juni 2023" },

  // Event Images - Bakis Fight Night 11
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Bakis Fight Night 11/IMG-20221105-WA0024.jpg", category: "events", section: "Bakis Fight Night - November 2022" },
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Bakis Fight Night 11/IMG-20221105-WA0013.jpg", category: "events", section: "Bakis Fight Night - November 2022" },
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Bakis Fight Night 11/IMG-20221105-WA0014.jpg", category: "events", section: "Bakis Fight Night - November 2022" },
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Bakis Fight Night 11/IMG-20221105-WA0015.jpg", category: "events", section: "Bakis Fight Night - November 2022" },
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Bakis Fight Night 11/IMG-20221105-WA0017.jpeg", category: "events", section: "Bakis Fight Night - November 2022" },

  // Event Images - Thailand
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Thailand/IMG-20250415-WA0030.jpg", category: "events", section: "Trainingslager Thailand" },
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Thailand/IMG-20250415-WA0031.jpg", category: "events", section: "Trainingslager Thailand" },
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Thailand/IMG-20250415-WA0032.jpg", category: "events", section: "Trainingslager Thailand" },
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Thailand/royalthaiboxgym-05.jpeg", category: "events", section: "Trainingslager Thailand" },
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Thailand/royalthaiboxgym-08.jpeg", category: "events", section: "Trainingslager Thailand" },
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Thailand/royalthaiboxgym-15.jpeg", category: "events", section: "Trainingslager Thailand" },
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Thailand/royalthaiboxgym-16.jpeg", category: "events", section: "Trainingslager Thailand" },
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Thailand/royalthaiboxgym-19.jpeg", category: "events", section: "Trainingslager Thailand" },
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Thailand/IMG-20250415-WA0027.jpg", category: "events", section: "Trainingslager Thailand" },
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Thailand/IMG-20250415-WA0028.jpg", category: "events", section: "Trainingslager Thailand" },
  { src: "/public/Medien Royal Thai/Galerie/VERANSTALTUNGEN/Thailand/IMG-20250415-WA0029.jpg", category: "events", section: "Trainingslager Thailand" }
];

const Gallery: React.FC<GalleryProps> = ({ initialCategory = 'all' }) => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [currentImage, setCurrentImage] = useState(-1);
  const [filteredItems, setFilteredItems] = useState(galleryItems);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let items = selectedCategory === 'all'
      ? galleryItems
      : galleryItems.filter(item => item.category === selectedCategory);

    // Sort items by section if they have sections
    items = items.sort((a, b) => {
      if (!a.section && !b.section) return 0;
      if (!a.section) return 1;
      if (!b.section) return -1;
      return a.section.localeCompare(b.section);
    });

    setFilteredItems(items);
  }, [selectedCategory]);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    window.location.hash = categoryId === 'all' ? 'gallery' : `gallery/${categoryId}`;
  };

  const renderGalleryItems = () => {
    if (selectedCategory !== 'events') {
      return (
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="aspect-square relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
                onClick={() => setCurrentImage(index)}
              >
                <motion.img
                  src={item.src}
                  alt={item.title || 'Gallery image'}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  layoutId={`image-${item.src}`}
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      );
    }

    // For events category, group by sections
    const sections = Array.from(new Set(filteredItems.map(item => item.section))).filter(Boolean);
    
    return sections.map(section => (
      <div key={section} className="mb-12">
        <h3 className="text-2xl font-bold mb-6">{section}</h3>
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems
              .filter(item => item.section === section)
              .map((item, index) => (
                <motion.div
                  key={item.src}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="aspect-square relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
                  onClick={() => setCurrentImage(
                    filteredItems.findIndex(i => i.src === item.src)
                  )}
                >
                  <motion.img
                    src={item.src}
                    alt={item.title || 'Gallery image'}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    layoutId={`image-${item.src}`}
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </motion.div>
              ))}
          </AnimatePresence>
        </motion.div>
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed spacer for header */}
      <div className="h-[calc(80px+var(--announcement-height,40px))]" />
      
      {/* Category Navigation */}
      <div 
        className={`fixed top-[calc(80px+var(--announcement-height,40px))] left-0 right-0 z-30 bg-white/95 backdrop-blur-sm shadow-md transition-all duration-300 ${
          scrollPosition > 100 ? 'py-2' : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Galerie</h1>
            
            {/* Desktop Categories */}
            <div className="hidden md:flex space-x-4">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-4 py-2 rounded-md transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-red-600 text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Mobile Categories */}
            <div className="md:hidden">
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="form-select rounded-md border-gray-300 shadow-sm focus:border-red-600 focus:ring focus:ring-red-200"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for category navigation */}
      <div className="h-[72px]" />

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderGalleryItems()}
      </div>

      <Lightbox
        open={currentImage >= 0}
        index={currentImage}
        close={() => setCurrentImage(-1)}
        slides={filteredItems.map(item => ({ src: item.src }))}
      />
    </div>
  );
};

export default Gallery;