import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Trainer {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
}

const trainers: Trainer[] = [
  {
    id: 1,
    name: "Hamdi Mehmeti",
    role: "Gründer, Box- & Thaibox-Trainer",
    description: "",
    image: "https://tibyxmobrwazabhbwptm.supabase.co/storage/v1/object/sign/royal-media/Royal%20Thai%20Box%20Gym/Trainer/HAMDI.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2U2NjE2YjJjLTMxODctNDVlOC1hYTIwLWUwZjNkMzgzNTg4MSJ9.eyJ1cmwiOiJyb3lhbC1tZWRpYS9Sb3lhbCBUaGFpIEJveCBHeW0vVHJhaW5lci9IQU1ESS5wbmciLCJpYXQiOjE3NDY0NDg0MjIsImV4cCI6Mjc4NzEzNjQyMn0.wuagt-r3eXge7jm6tFVEpXeRKfIDqQknS4VwhHdJlm0"
  },
  {
    id: 2,
    name: "Avni Mehmeti",
    role: "Box- & Thaibox-Trainer",
    description: "",
    image: "https://tibyxmobrwazabhbwptm.supabase.co/storage/v1/object/sign/royal-media/Royal%20Thai%20Box%20Gym/Trainer/AVNI.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2U2NjE2YjJjLTMxODctNDVlOC1hYTIwLWUwZjNkMzgzNTg4MSJ9.eyJ1cmwiOiJyb3lhbC1tZWRpYS9Sb3lhbCBUaGFpIEJveCBHeW0vVHJhaW5lci9BVk5JLnBuZyIsImlhdCI6MTc0NjQ0ODQ0NywiZXhwIjozNDQ5MzkyNDQ3fQ.UCbWpY9fnbuqN_6ySWS05xEMlHpWKeVZsZR_aXRaXdo"
  },
  {
    id: 3,
    name: "Daniel Klein-Horst",
    role: "Kick-Thai-Box Trainer",
    description: "",
    image: "https://tibyxmobrwazabhbwptm.supabase.co/storage/v1/object/sign/royal-media/Royal%20Thai%20Box%20Gym/Trainer/Daniel.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2U2NjE2YjJjLTMxODctNDVlOC1hYTIwLWUwZjNkMzgzNTg4MSJ9.eyJ1cmwiOiJyb3lhbC1tZWRpYS9Sb3lhbCBUaGFpIEJveCBHeW0vVHJhaW5lci9EYW5pZWwuanBnIiwiaWF0IjoxNzQ2NDQ4NDcwLCJleHAiOjI4MTg2NzI0NzB9.ZKtoqyiXiJV6CduFL2Tlpzes-aVP4nt1_KAM6WrrCEo"
  }
];

const AboutUs = () => {
  const [currentTrainer, setCurrentTrainer] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const [textRef, textInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px',
  });

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentTrainer((prev) => (prev + 1) % trainers.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevTrainer = () => {
    setIsAutoPlaying(false);
    setCurrentTrainer((prev) => (prev - 1 + trainers.length) % trainers.length);
  };

  const handleNextTrainer = () => {
    setIsAutoPlaying(false);
    setCurrentTrainer((prev) => (prev + 1) % trainers.length);
  };

  const getTrainerPosition = (index: number) => {
    if (index === currentTrainer) return 'center';
    if (index === (currentTrainer + 1) % trainers.length) return 'right';
    if (index === (currentTrainer - 1 + trainers.length) % trainers.length) return 'left';
    return 'hidden';
  };

  const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: 50,
      transition: { duration: 0.6 }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="about" className="py-20 bg-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-start">
          <div ref={textRef} className="w-full">
            <motion.div
              initial="hidden"
              animate={textInView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-bold mb-6">
                Was Kampfsport für uns <span className="text-red-600">bedeutet</span>
              </h2>
              <div className="space-y-6 text-gray-700">
                <p>
                  Diese Punkte beschreiben im Royal Thai Box Gym das Gesetz, dort werden sie durchgeführt und gelehrt:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-red-600 mr-2">✓</span>
                    <span>Respekt</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-600 mr-2">✓</span>
                    <span>Geduld</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-600 mr-2">✓</span>
                    <span>Selbstbeherrschung</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-600 mr-2">✓</span>
                    <span>Disziplin</span>
                  </li>
                </ul>
                <p>
                  Nur durch diese Säulen funktioniert ein Team, ein Team was das erlernte richtig umsetzt und zum Erfolg gebracht werden kann.
                </p>
              </div>
            </motion.div>
          </div>
          
          <div className="relative h-[400px] w-full mt-8 md:mt-0">
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={handlePrevTrainer}
                className="absolute left-4 z-10 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-all"
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className="relative w-[300px] h-[300px] md:w-[320px] md:h-[320px]">
                {trainers.map((trainer, index) => (
                  <motion.div
                    key={trainer.id}
                    className="absolute w-[220px] h-[300px] md:w-[240px] md:h-[320px] transition-all duration-500"
                    style={{
                      left: getTrainerPosition(index) === 'center' 
                        ? '40px'
                        : getTrainerPosition(index) === 'left'
                        ? '-60px'
                        : getTrainerPosition(index) === 'right'
                        ? '140px'
                        : '40px',
                      opacity: getTrainerPosition(index) === 'hidden' ? 0 : 1,
                      filter: getTrainerPosition(index) === 'center' ? 'none' : 'grayscale(100%)',
                      zIndex: getTrainerPosition(index) === 'center' ? 2 : 1,
                      transform: getTrainerPosition(index) === 'center'
                        ? 'scale(1)'
                        : 'scale(0.85)',
                    }}
                  >
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-full h-full object-cover rounded-lg shadow-xl"
                    />
                    {getTrainerPosition(index) === 'center' && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute -bottom-16 left-0 right-0 text-center bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-4 shadow-lg mx-2"
                      >
                        <h3 className="text-xl font-bold text-gray-900 leading-tight mb-1">{trainer.name}</h3>
                        <p className="text-red-600 font-semibold text-sm tracking-wide">{trainer.role}</p>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>

              <button
                onClick={handleNextTrainer}
                className="absolute right-4 z-10 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-all"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;