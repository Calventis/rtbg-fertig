import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface MediaItem {
  title: string;
  description: string;
  mediaUrl: string;
  isVideo: boolean;
  courseLink: string;
  courseName: string;
}

const mediaItems: MediaItem[] = [
  {
    title: 'Moderne Trainingsatmosphäre',
    description: 'Unser professionell ausgestattetes Studio bietet optimale Trainingsbedingungen',
    mediaUrl: 'https://tibyxmobrwazabhbwptm.supabase.co/storage/v1/object/sign/royal-media/Royal%20Thai%20Box%20Gym/Gym/IMG-20250415-WA0012.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2U2NjE2YjJjLTMxODctNDVlOC1hYTIwLWUwZjNkMzgzNTg4MSJ9.eyJ1cmwiOiJyb3lhbC1tZWRpYS9Sb3lhbCBUaGFpIEJveCBHeW0vR3ltL0lNRy0yMDI1MDQxNS1XQTAwMTIuanBnIiwiaWF0IjoxNzQ2NDUzMDgwLCJleHAiOjMxMzQwMzcwODB9.iVa8rTYQqAa1Lcz9nccjoLYSraNcs4qeNLYt-g7DOu4',
    isVideo: false,
    courseLink: '#gallery/gym',
    courseName: 'Galerie'
  },
  {
    title: 'Wettkampfvorbereitung',
    description: 'Spannende Kämpfe und unvergessliche Momente in unserem Gym',
    mediaUrl: 'https://tibyxmobrwazabhbwptm.supabase.co/storage/v1/object/sign/royal-media/Royal%20Thai%20Box%20Gym/Veranstaltungen/NIGHT%20OF%20THE%20CHAMPS%2011,MARS,23/IMG-20250415-WA0021.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2U2NjE2YjJjLTMxODctNDVlOC1hYTIwLWUwZjNkMzgzNTg4MSJ9.eyJ1cmwiOiJyb3lhbC1tZWRpYS9Sb3lhbCBUaGFpIEJveCBHeW0vVmVyYW5zdGFsdHVuZ2VuL05JR0hUIE9GIFRIRSBDSEFNUFMgMTEsTUFSUywyMy9JTUctMjAyNTA0MTUtV0EwMDIxLmpwZyIsImlhdCI6MTc0NjQ0ODYzMywiZXhwIjoyNDQwMjQwNjMzfQ.JM3Hq7FzalcuBN_VfBAIAinz1jPIsjLE8zNIP6AZAPI',
    isVideo: false,
    courseLink: '#gallery/events',
    courseName: 'Veranstaltungen'
  }
];

const MediaGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Einblicke in unser Training</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Erlebe die Energie und Leidenschaft in unserem Gym. Von intensiven Trainingseinheiten 
            bis hin zu spannenden Wettkämpfen – hier bekommst du einen authentischen Einblick in 
            unseren Trainingsalltag.
          </p>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {mediaItems.map((item, index) => (
              <motion.div
                key={item.mediaUrl}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer transform hover:scale-[1.02] transition-all duration-300"
                onClick={() => window.location.hash = item.courseLink.substring(1)}
              >
                <div className="relative aspect-video">
                  <img
                    src={item.mediaUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <span className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold">
                    {item.courseName} entdecken
                    <ChevronRight className="ml-1 w-4 h-4" />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center mt-12">
          <a
            href="#courses"
            className="inline-flex items-center bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors text-lg font-semibold"
          >
            Jetzt Probetraining vereinbaren
            <ChevronRight className="ml-2" />
          </a>
        </div>

        {selectedVideo && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div className="relative w-full max-w-4xl aspect-video">
              <video
                src={selectedVideo}
                autoPlay
                controls
                className="w-full h-full"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MediaGallery;