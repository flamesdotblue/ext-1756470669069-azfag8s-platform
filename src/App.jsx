import { useState } from 'react';
import HeroSpline from './components/HeroSpline';
import LibraryCard from './components/LibraryCard';
import FooterInfo from './components/FooterInfo';

function App() {
  const [gameName, setGameName] = useState('');
  const [dewey, setDewey] = useState('794.1');

  const [sliders, setSliders] = useState({
    theme: 1,
    randomness: 1,
    interaction: 1,
    learning: 1,
    tempo: 1,
  });

  const updateSlider = (key, value) => {
    setSliders((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-200/60 via-amber-50 to-stone-50 text-stone-900">
      <HeroSpline />

      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 -mt-24 pb-24">
        <LibraryCard
          gameName={gameName}
          setGameName={setGameName}
          dewey={dewey}
          setDewey={setDewey}
          sliders={sliders}
          updateSlider={updateSlider}
        />
      </main>

      <FooterInfo />
    </div>
  );
}

export default App;
