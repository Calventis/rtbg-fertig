import React from 'react';

const Impressum = () => {
  return (
    <section className="pt-32 md:pt-40 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Impressum</h1>
        <div className="prose prose-lg">
          <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
          
          <div className="mb-8">
            <p className="text-gray-800">
              Royal Thai Box Gym GbR<br />
              Regentenstraße 74<br />
              42389 Wuppertal
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Vertreten durch:</h3>
            <p className="text-gray-800">Hamdi Mehmeti</p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Kontakt</h3>
            <p className="text-gray-800">
              Telefon: <a href="tel:015901122335" className="text-red-600 hover:text-red-700">015901122335</a><br />
              E-Mail: <a href="mailto:info@royalthaiboxgym.de" className="text-red-600 hover:text-red-700">info@royalthaiboxgym.de</a>
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">EU-Streitschlichtung</h3>
            <p className="text-gray-800">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700">
                https://ec.europa.eu/consumers/odr/
              </a>
              .<br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h3>
            <p className="text-gray-800">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Haftung für Inhalte</h3>
            <p className="text-gray-800">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="text-gray-800 mt-4">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Haftung für Links</h3>
            <p className="text-gray-800">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            <p className="text-gray-800 mt-4">
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Urheberrecht</h3>
            <p className="text-gray-800">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p className="text-gray-800 mt-4">
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </div>

          <div className="text-sm text-gray-600 mt-12">
            <p>Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700">https://www.e-recht24.de</a></p>
            <p className="mt-4">
              Diese Website wurde von{' '}
              <a href="https://calventis.de" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700">
                Calventis
              </a>{' '}
              zur Verfügung gestellt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impressum;