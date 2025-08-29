import Spline from '@splinetool/react-spline';

function HeroSpline() {
  return (
    <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/rwKT-aWtlkdY-8UV/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-orange-100/40 via-transparent to-amber-50/90" />

      <div className="absolute inset-0 flex items-end">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 pb-10">
          <div className="backdrop-blur-sm bg-white/50 border border-white/60 shadow-xl rounded-2xl p-5 sm:p-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-stone-900">
              Board Game Library Card
            </h1>
            <p className="mt-1 text-stone-700 max-w-prose">
              A tactile way to profile board games—slide between design poles like Theme, Randomness, and Tempo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSpline;
