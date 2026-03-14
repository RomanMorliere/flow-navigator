import { useCallback, useState } from "react";
import mashLogo from "@/assets/mash_logo.svg";
import { SectorPanel } from "@/components/sector-panel";
import { SECTORS } from "@/data/mash";

const Index = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const moveTo = useCallback(
    (nextIndex: number) => {
      if (nextIndex < 0 || nextIndex >= SECTORS.length || isTransitioning) {
        return;
      }

      setIsTransitioning(true);
      setCurrentIndex(nextIndex);
      window.setTimeout(() => setIsTransitioning(false), 650);
    },
    [isTransitioning],
  );

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-background">
      <div className="pointer-events-none fixed inset-0 z-40 flex items-center justify-center">
        <div className="flex h-44 w-44 items-center justify-center rounded-full border border-white/50 bg-white/30 shadow-[0_30px_90px_rgba(0,0,0,0.12)] backdrop-blur-xl md:h-52 md:w-52">
          <img src={mashLogo} alt="MASH logo" className="w-28 drop-shadow-lg md:w-32" />
        </div>
      </div>

      <div className="pointer-events-none fixed left-1/2 top-6 z-40 -translate-x-1/2 rounded-full border border-white/50 bg-white/35 px-4 py-2 text-xs uppercase tracking-[0.35em] text-foreground/60 backdrop-blur-xl">
        {SECTORS[currentIndex].shortLabel}
      </div>

      <div className="fixed bottom-7 left-1/2 z-40 flex -translate-x-1/2 gap-3">
        {SECTORS.map((section, index) => (
          <button
            key={section.id}
            onClick={() => moveTo(index)}
            className={`rounded-full transition-all duration-500 ${
              index === currentIndex ? "h-2 w-10 bg-foreground" : "h-2 w-2 bg-foreground/25 hover:bg-foreground/45"
            }`}
            aria-label={section.shortLabel}
          />
        ))}
      </div>

      <div
        className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ width: `${SECTORS.length * 100}vw`, transform: `translateX(-${currentIndex * 100}vw)` }}
      >
        {SECTORS.map((section, index) => (
          <SectorPanel
            key={section.id}
            sector={section.id}
            isCenter={index === 1}
            onPrev={index > 0 ? () => moveTo(index - 1) : undefined}
            onNext={index < SECTORS.length - 1 ? () => moveTo(index + 1) : undefined}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
