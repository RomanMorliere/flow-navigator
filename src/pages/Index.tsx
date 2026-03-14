import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import mashLogo from "@/assets/mash_logo.svg";

const sections = [
  { id: "dj", label: "DJ" },
  { id: "home", label: "Home" },
  { id: "events", label: "Events" },
];

const Index = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start on center (home)
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slideTo = useCallback(
    (direction: -1 | 1) => {
      const next = currentIndex + direction;
      if (next < 0 || next > 2 || isTransitioning) return;
      setIsTransitioning(true);
      setCurrentIndex(next);
      setTimeout(() => setIsTransitioning(false), 600);
    },
    [currentIndex, isTransitioning]
  );

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-background">
      {/* Fixed centered logo */}
      <div className="pointer-events-none fixed inset-0 z-30 flex items-center justify-center">
        <img
          src={mashLogo}
          alt="MASH Logo"
          className="w-40 h-auto drop-shadow-lg"
        />
      </div>

      {/* Navigation arrows */}
      {currentIndex > 0 && (
        <button
          onClick={() => slideTo(-1)}
          className="fixed left-6 top-1/2 z-40 -translate-y-1/2 rounded-full bg-foreground/10 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-foreground/20 hover:scale-110"
          aria-label="Section précédente"
        >
          <ChevronLeft className="h-6 w-6 text-foreground" />
        </button>
      )}

      {currentIndex < 2 && (
        <button
          onClick={() => slideTo(1)}
          className="fixed right-6 top-1/2 z-40 -translate-y-1/2 rounded-full bg-foreground/10 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-foreground/20 hover:scale-110"
          aria-label="Section suivante"
        >
          <ChevronRight className="h-6 w-6 text-foreground" />
        </button>
      )}

      {/* Dot indicators */}
      <div className="fixed bottom-8 left-1/2 z-40 flex -translate-x-1/2 gap-3">
        {sections.map((s, i) => (
          <button
            key={s.id}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrentIndex(i);
                setTimeout(() => setIsTransitioning(false), 600);
              }
            }}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === currentIndex
                ? "w-8 bg-foreground"
                : "w-2 bg-foreground/30 hover:bg-foreground/50"
            }`}
            aria-label={s.label}
          />
        ))}
      </div>

      {/* Sliding panels */}
      <div
        className="flex h-full transition-transform duration-600 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
        style={{
          width: "300vw",
          transform: `translateX(-${currentIndex * 100}vw)`,
          transitionDuration: "600ms",
        }}
      >
        {/* DJ Section */}
        <section className="flex h-full w-screen items-center justify-center bg-jelly-bean">
          <div className="text-center">
            <h2 className="mb-4 text-6xl font-bold tracking-tight text-primary-foreground">
              DJ
            </h2>
            <p className="text-lg text-primary-foreground/70">
              Sets · Mixes · Live
            </p>
          </div>
        </section>

        {/* Home / Center Section */}
        <section className="flex h-full w-screen items-center justify-center bg-sidecar">
          <div className="text-center">
            <div className="h-40" /> {/* Space for logo */}
            <p className="mt-8 text-lg tracking-widest uppercase text-foreground/50">
              Explore
            </p>
          </div>
        </section>

        {/* Third Section */}
        <section className="flex h-full w-screen items-center justify-center bg-milan-red">
          <div className="text-center">
            <h2 className="mb-4 text-6xl font-bold tracking-tight text-primary-foreground">
              Events
            </h2>
            <p className="text-lg text-primary-foreground/70">
              Agenda · Dates · Lieux
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
