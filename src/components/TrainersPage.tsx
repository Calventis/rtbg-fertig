import React from 'react';
import { motion } from 'framer-motion';
import { Award, Medal, Trophy } from 'lucide-react';

interface Trainer {
  id: number;
  name: string;
  role: string;
  image: string;
  experience: string;
  specialties: string[];
  certifications: string[];
  description: string;
}

const trainers: Trainer[] = [
  {
    id: 1,
    name: "Hamdi Mehmeti",
    role: "Gründer, Box- & Thaibox-Trainer",
    image: "/Medien Royal Thai/Trainer/Screenshot 2025-04-18 121009.png",
    experience: "15+ Jahre",
    specialties: [
      "Muay Thai Technik",
      "Wettkampfvorbereitung",
      "Konditionstraining"
    ],
    certifications: [
      "Lizenzierter Muay Thai Trainer",
      "Kampfsport-Pädagoge",
      "Fitness-Trainer B-Lizenz"
    ],
    description: "Als Gründer des Royal Thai Box Gym bringt Hamdi jahrelange Erfahrung im Kampfsport mit. Seine Leidenschaft für Muay Thai und sein Engagement für die Entwicklung seiner Schüler machen ihn zu einem außergewöhnlichen Trainer."
  },
  {
    id: 2,
    name: "Avni Mehmeti",
    role: "Box- & Thaibox-Trainer",
    image: "/Medien Royal Thai/Trainer/AVNI.png",
    experience: "10+ Jahre",
    specialties: [
      "Boxen",
      "Sparring",
      "Taktisches Training"
    ],
    certifications: [
      "Box-Trainer Lizenz",
      "Kampfsport-Therapeut"
    ],
    description: "Avni ist bekannt für seinen technischen Ansatz und seine Fähigkeit, das Beste aus jedem Schüler herauszuholen. Seine umfassende Erfahrung macht ihn zu einem wertvollen Teil unseres Teams."
  },
  {
    id: 3,
    name: "Daniel Klein-Horst",
    role: "Kick-Thai-Box Trainer",
    image: "/Medien Royal Thai/Trainer/IMG-20250418-WA0002.jpg",
    experience: "8+ Jahre",
    specialties: [
      "Kickboxen",
      "Fitness Boxing",
      "Anfängertraining"
    ],
    certifications: [
      "Kickbox-Trainer Lizenz",
      "Fitness-Trainer A-Lizenz",
      "Reha-Sport-Qualifikation"
    ],
    description: "Daniel spezialisiert sich auf die Integration von modernen Trainingsmethoden in traditionelles Thaiboxen. Seine innovativen Trainingskonzepte und sein individueller Betreuungsansatz machen ihn bei Anfängern und Fortgeschrittenen gleichermaßen beliebt."
  },
  {
    id: 4,
    name: "Vasilis Siozos",
    role: "MMA-Trainer",
    image: "public/Medien Royal Thai/Trainer/Wasili.jpg",
    experience: "15+ Jahre",
    specialties: [
      "MMA Technik",
      "Wettkampfvorbereitung",
      "Konditionstraining"
    ],
    certifications: [
      "Lizenzierter Muay Thai Trainer",
      "Kampfsport-Pädagoge",
      "Fitness-Trainer B-Lizenz"
    ],
    description: "Als einziger MMA-Trainer des Royal Thai Box Gym trainiert Vasilis seine Schüler mit Leidenschaft und Engagement"
  }
];

const TrainersPage = () => {
  return (
    <div className="min-h-screen pt-[calc(80px+var(--announcement-height,40px))] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Unsere Trainer</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Entdecken Sie unser erfahrenes Trainerteam. Jeder Trainer bringt einzigartige 
            Expertise und Leidenschaft mit, um Sie bestmöglich zu unterstützen.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {trainers.map((trainer) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <div className="h-full">
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="p-6 md:col-span-2">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-2">{trainer.name}</h2>
                    <p className="text-red-600 font-semibold">{trainer.role}</p>
                    <p className="text-gray-600 mt-2">Erfahrung: {trainer.experience}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 flex items-center">
                        <Trophy className="text-red-600 mr-2" />
                        Spezialgebiete
                      </h3>
                      <ul className="space-y-2">
                        {trainer.specialties.map((specialty, index) => (
                          <li key={index} className="flex items-center text-gray-700">
                            <Medal className="text-red-600 mr-2" size={18} />
                            {specialty}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 flex items-center">
                        <Award className="text-red-600 mr-2" />
                        Qualifikationen
                      </h3>
                      <ul className="space-y-2">
                        {trainer.certifications.map((cert, index) => (
                          <li key={index} className="flex items-center text-gray-700">
                            <Award className="text-yellow-500 mr-2" size={18} />
                            {cert}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <p className="text-gray-600">{trainer.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainersPage;
