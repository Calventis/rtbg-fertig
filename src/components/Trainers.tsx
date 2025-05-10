import React from 'react';

const trainers = [
  {
    name: 'Hamdi Mehmeti',
    role: 'Studiogründer & Box-/Kick-Thaibox Trainer',
    image: '/Medien Royal Thai/Trainer/Screenshot 2025-04-18 121009.png',
    description: 'Mit über 15 Jahren Erfahrung im Kampfsport leitet Hamdi das Royal Thai Box Gym mit Leidenschaft und Expertise.'
  },
  {
    name: 'Avni Mehmeti',
    role: 'Box-/Kick-Thaibox Trainer',
    image: '/Medien Royal Thai/Trainer/Screenshot 2025-04-22 151635.png',
    description: 'Spezialisiert auf technisches Training und Wettkampfvorbereitung.'
  },
  {
    name: 'Daniel Klein-Horst',
    role: 'Kick-Thaibox Trainer',
    image: '/Medien Royal Thai/Trainer/IMG-20250418-WA0002.jpg',
    description: 'Erfahrener Trainer mit Fokus auf präzise Technik und individuelles Training.'
  }
];

const Trainers = () => {
  return (
    <section id="trainers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Unsere Trainer</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Unser erfahrenes Team aus professionellen Trainern steht dir mit Rat und Tat zur Seite.
            Profitiere von jahrelanger Kampf- und Trainingserfahrung.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6 inline-block">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-64 h-64 rounded-full object-cover mx-auto"
                  loading="lazy"
                />
                <div className="absolute inset-0 rounded-full border-4 border-red-600"></div>
              </div>
              <h3 className="text-xl font-bold mb-2">{trainer.name}</h3>
              <p className="text-red-600 font-semibold mb-4">{trainer.role}</p>
              <p className="text-gray-600">{trainer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;