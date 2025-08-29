import { useMemo } from 'react';

function TripleSlider({ title, leftLabel, middleLabel, rightLabel, value = 1, onChange }) {
  const positions = useMemo(() => [leftLabel, middleLabel, rightLabel], [leftLabel, middleLabel, rightLabel]);

  const handleChange = (e) => {
    const v = parseInt(e.target.value, 10);
    onChange?.(v);
  };

  return (
    <div className="grid gap-2">
      <div className="flex items-baseline justify-between">
        <h3 className="font-medium tracking-wide text-stone-800">{title}</h3>
        <div className="text-xs text-stone-600">{positions[value]}</div>
      </div>

      <div className="grid gap-3">
        <div className="relative px-2">
          <div className="absolute left-2 right-2 top-1/2 -translate-y-1/2 h-1.5 rounded-full bg-gradient-to-r from-stone-300 via-stone-400 to-stone-300" />

          <div className="relative">
            <input
              type="range"
              min={0}
              max={2}
              step={1}
              value={value}
              onChange={handleChange}
              className="w-full appearance-none bg-transparent cursor-pointer"
              aria-label={`${title} slider`}
            />

            <style>{`
              input[type='range']::-webkit-slider-runnable-track { height: 24px; background: transparent; }
              input[type='range']::-moz-range-track { height: 24px; background: transparent; }
              input[type='range']::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; height: 24px; width: 24px; border-radius: 9999px; background: white; border: 2px solid rgb(41 37 36); box-shadow: 0 2px 6px rgba(0,0,0,0.15); margin-top: -12px; }
              input[type='range']::-moz-range-thumb { height: 24px; width: 24px; border-radius: 9999px; background: white; border: 2px solid rgb(41 37 36); box-shadow: 0 2px 6px rgba(0,0,0,0.15); }
            `}</style>

            <div className="absolute left-2 right-2 top-1/2 -translate-y-1/2 flex justify-between">
              {[0, 1, 2].map((i) => (
                <div key={i} className="relative">
                  <div className={`h-2 w-2 rounded-full ${i === value ? 'bg-stone-900' : 'bg-stone-700'} shadow-[0_0_0_3px_rgba(255,255,255,0.9)]`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between text-[11px] uppercase tracking-widest text-stone-600">
          <span>{leftLabel}</span>
          <span className="text-stone-800 font-semibold">{middleLabel}</span>
          <span>{rightLabel}</span>
        </div>
      </div>
    </div>
  );
}

export default TripleSlider;
