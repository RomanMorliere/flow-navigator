import { useCallback, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import mashLogo from "@/assets/mash_logo.svg";
import { SectorPanel } from "@/components/sector-panel";
import { SECTORS } from "@/data/mash";

const Index = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [edgeHover, setEdgeHover] = useState<"left" | "right" | null>(null);

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
    <div
      className="relative h-screen w-screen overflow-hidden bg-background"
      onMouseMove={(event) => {
        const width = window.innerWidth;
        if (event.clientX < 120) {
          setEdgeHover("left");
        } else if (event.clientX > width - 120) {
          setEdgeHover("right");
        } else {
          setEdgeHover(null);
        }
      }}
      onMouseLeave={() => setEdgeHover(null)}
    >
      <div className="pointer-events-none fixed left-1/2 top-5 z-40 -translate-x-1/2 md:top-7">
        <img
          src={mashLogo}
          alt="MASH logo"
          className="w-[17rem] md:w-[26rem] lg:w-[34rem]"
        />
      </div>

      {currentIndex > 0 ? (
        <button
          onClick={() => moveTo(currentIndex - 1)}
          className={`fixed left-4 top-1/2 z-40 -translate-y-1/2 rounded-full border border-foreground/10 bg-white/80 p-3 text-foreground shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-200 md:left-6 ${
            edgeHover === "left" ? "opacity-100 scale-100" : "pointer-events-none opacity-0 scale-90"
          }`}
          aria-label="Previous sector"
        >
          <ArrowLeft className="h-5 w-5 md:h-6 md:w-6" />
        </button>
      ) : null}

      {currentIndex < SECTORS.length - 1 ? (
        <button
          onClick={() => moveTo(currentIndex + 1)}
          className={`fixed right-4 top-1/2 z-40 -translate-y-1/2 rounded-full border border-foreground/10 bg-white/80 p-3 text-foreground shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-200 md:right-6 ${
            edgeHover === "right" ? "opacity-100 scale-100" : "pointer-events-none opacity-0 scale-90"
          }`}
          aria-label="Next sector"
        >
          <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
        </button>
      ) : null}

      <div
        className="flex h-full transition-transform duration-700"
        style={{ width: `${SECTORS.length * 100}vw`, transform: `translateX(-${currentIndex * 100}vw)` }}
      >
        {SECTORS.map((section, index) => (
          <SectorPanel
            key={section.id}
            sector={section.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
