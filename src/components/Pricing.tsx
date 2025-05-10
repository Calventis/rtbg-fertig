import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basis',
    price: '59',
    features: [
      '2x Training pro Woche',
      'Grundkurse',
      'Umkleideräume',
      'Basis Equipment',
    ],
    recommended: false
  },
  {
    name: 'Premium',
    price: '89',
    features: [
      'Unbegrenztes Training',
      'Alle Kurse inkl. Sparring',
      'Umkleideräume & Duschen',
      'Komplettes Equipment',
      'Personal Training Session',
      'Ernährungsberatung'
    ],
    recommended: true
  },
  {
    name: 'Student',
    price: '49',
    features: [
      '3x Training pro Woche',
      'Alle Grundkurse',
      'Umkleideräume',
      'Basis Equipment',
      'Gültige Studentenkarte erforderlich'
    ],
    recommended: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Preise & Mitgliedschaft</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Wähle den Plan, der am besten zu dir passt. Alle Mitgliedschaften sind monatlich kündbar.
            Keine versteckten Kosten oder lange Vertragslaufzeiten.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg p-8 ${
                plan.recommended ? 'border-2 border-red-600 relative' : ''
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-semibold">
                  Empfohlen
                </div>
              )}
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}€</span>
                <span className="text-gray-600">/Monat</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="text-red-600 mr-2" size={20} />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://calendly.com/jschultehoefinghoff/probetraining"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-3 px-6 rounded-md transition-colors ${
                  plan.recommended
                    ? 'bg-red-600 text-white hover:bg-red-700'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                Jetzt starten
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;