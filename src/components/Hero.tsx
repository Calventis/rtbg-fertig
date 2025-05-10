import React from 'react';
import { ChevronRight } from 'lucide-react';
import { scrollToCenter } from '../utils/scroll';

const Hero = () => {
  const handleCourseClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToCenter('schedule');
  };

  return (
    <section id="home" className="relative h-screen">
      <video
        src="https://tibyxmobrwazabhbwptm.supabase.co/storage/v1/object/sign/royal-media/Royal%20Thai%20Box%20Gym/Videos/Hero-Video.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2U2NjE2YjJjLTMxODctNDVlOC1hYTIwLWUwZjNkMzgzNTg4MSJ9.eyJ1cmwiOiJyb3lhbC1tZWRpYS9Sb3lhbCBUaGFpIEJveCBHeW0vVmlkZW9zL0hlcm8tVmlkZW8ubXA0IiwiaWF0IjoxNzQ2ODI1NjE3LCJleHAiOjE0NTc3MTczNzYxN30.e08XdWu5hFQj5lIW3_TnloHK8e_Xad2W1PYLp9gvC6w"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
      
      <div className="relative h-full flex items-end z-10 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <p className="text-2xl md:text-3xl text-gray-200 mb-8 leading-relaxed font-bold">
              Trainiere mit erfahrenen Coaches und modernster Ausstattung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#courses"
                className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-4 rounded-md hover:bg-red-700 transition-colors text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
              >
                Kostenloses Probetraining
                <ChevronRight className="ml-2" />
              </a>
              <a
                href="#schedule"
                onClick={handleCourseClick}
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-md hover:bg-white hover:text-black transition-all text-lg font-semibold"
              >
                Kursplan ansehen
                <ChevronRight className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;