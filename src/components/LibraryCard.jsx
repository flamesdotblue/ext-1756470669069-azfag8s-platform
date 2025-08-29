import TripleSlider from './TripleSlider';

function LibraryCard({ gameName, setGameName, dewey, setDewey, sliders, updateSlider }) {
  return (
    <div className="relative isolate">
      <div className="absolute -inset-2 bg-gradient-to-br from-amber-200/60 to-orange-100/40 rounded-3xl blur-xl" />

      <section
        className="relative rounded-3xl bg-[rgb(248,244,234)] shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-stone-300/70 overflow-hidden"
        aria-label="Library card for board game classification"
      >
        <div className="absolute inset-x-0 top-14 h-px bg-stone-300/70" />
        <div className="absolute inset-x-0 top-[4.5rem] h-px bg-stone-300/50" />
        <div className="absolute inset-x-0 top-[7rem] h-px bg-stone-300/40" />

        <header className="p-6 pb-4">
          <div className="flex flex-col sm:flex-row sm:items-end gap-4">
            <label className="flex-1">
              <span className="block text-[10px] uppercase tracking-[0.18em] text-stone-600">Title</span>
              <input
                value={gameName}
                onChange={(e) => setGameName(e.target.value)}
                placeholder="e.g., Cascadia"
                className="mt-1 w-full bg-transparent border-b border-stone-800/70 focus:border-stone-900 text-2xl sm:text-3xl font-semibold tracking-tight outline-none placeholder:text-stone-400"
              />
            </label>

            <label className="w-full sm:w-56">
              <span className="block text-[10px] uppercase tracking-[0.18em] text-stone-600">Dewey Decimal</span>
              <input
                value={dewey}
                onChange={(e) => setDewey(e.target.value)}
                placeholder="794.1"
                className="mt-1 w-full bg-transparent border-b border-stone-800/70 focus:border-stone-900 text-xl font-medium tracking-wide outline-none placeholder:text-stone-400"
              />
            </label>
          </div>
        </header>

        <div className="px-6 pt-6 pb-8 grid gap-6">
          <TripleSlider
            title="Theme"
            leftLabel="Abstract"
            middleLabel="Decorated"
            rightLabel="Immersive"
            value={sliders.theme}
            onChange={(v) => updateSlider('theme', v)}
          />

          <TripleSlider
            title="Randomness"
            leftLabel="Luck"
            middleLabel="Tactical"
            rightLabel="Skill"
            value={sliders.randomness}
            onChange={(v) => updateSlider('randomness', v)}
          />

          <TripleSlider
            title="Interaction"
            leftLabel="Solitaire"
            middleLabel="Indirect"
            rightLabel="Constant"
            value={sliders.interaction}
            onChange={(v) => updateSlider('interaction', v)}
          />

          <TripleSlider
            title="Learning"
            leftLabel="Intuitive"
            middleLabel="Moderate"
            rightLabel="Heavy"
            value={sliders.learning}
            onChange={(v) => updateSlider('learning', v)}
          />

          <TripleSlider
            title="Tempo"
            leftLabel="Fast"
            middleLabel="Thoughtful"
            rightLabel="Brain Melting"
            value={sliders.tempo}
            onChange={(v) => updateSlider('tempo', v)}
          />
        </div>

        <footer className="px-6 py-4 bg-gradient-to-b from-transparent to-stone-200/40 border-t border-stone-300/60 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-stone-600">
            Filed under Dewey {dewey || '—'} • Card style inspired by classic library checkouts
          </p>
          <div className="flex items-center gap-2 text-xs text-stone-700">
            <span className="inline-block rounded-sm bg-stone-900 text-stone-50 px-2 py-1 tracking-wide">BOARD GAMES</span>
            <span className="inline-block rounded-sm bg-amber-800/90 text-amber-50 px-2 py-1 tracking-wide">REFERENCE</span>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default LibraryCard;
