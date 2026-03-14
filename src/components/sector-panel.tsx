import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import { ArtistRail } from "@/components/artist-rail";
import { ContactBlock } from "@/components/contact-block";
import { EventRail } from "@/components/event-rail";
import {
  getArtistsBySector,
  getEventsBySector,
  getSectorConfig,
  type SectorId,
} from "@/data/mash";

type SectorPanelProps = {
  sector: SectorId;
  isCenter: boolean;
  onPrev?: () => void;
  onNext?: () => void;
};

export function SectorPanel({ sector, isCenter, onPrev, onNext }: SectorPanelProps) {
  const config = getSectorConfig(sector);
  const artists = getArtistsBySector(sector);
  const events = getEventsBySector(sector);

  return (
    <section
      className={`h-screen w-screen shrink-0 overflow-y-auto bg-gradient-to-b ${config.sectionTint}`}
    >
      <div className="min-h-full px-5 pb-16 pt-6 md:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <header className="flex min-h-[92vh] flex-col justify-between pb-10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-foreground/45">{config.eyebrow}</p>
                <div className="mt-4 inline-flex rounded-full border border-foreground/10 bg-white/50 px-4 py-2 text-xs uppercase tracking-[0.3em] text-foreground/60 backdrop-blur">
                  {config.shortLabel}
                </div>
              </div>
              <div className="flex gap-2">
                {onPrev ? (
                  <button
                    onClick={onPrev}
                    className="rounded-full border border-foreground/10 bg-white/55 p-3 text-foreground/75 backdrop-blur transition hover:scale-105 hover:bg-white/80"
                    aria-label="Go to previous sector"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </button>
                ) : null}
                {onNext ? (
                  <button
                    onClick={onNext}
                    className="rounded-full border border-foreground/10 bg-white/55 p-3 text-foreground/75 backdrop-blur transition hover:scale-105 hover:bg-white/80"
                    aria-label="Go to next sector"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </button>
                ) : null}
              </div>
            </div>

            <div className="max-w-2xl pt-10">
              <h1 className={`text-4xl font-semibold leading-tight text-foreground md:text-6xl ${isCenter ? "md:max-w-xl" : ""}`}>
                {config.title}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-foreground/70 md:text-lg">
                {config.description}
              </p>
            </div>

            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-foreground/45">
              <ArrowDown className="h-4 w-4" />
              <span>Scroll down for artists, events, and contact</span>
            </div>
          </header>

          <div className="space-y-8">
            <section className={`rounded-[2rem] border bg-white/45 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.05)] backdrop-blur ${config.borderTone}`}>
              <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-foreground/45">Artists</p>
                  <h2 className="mt-2 text-2xl font-semibold text-foreground">Sector artist cards</h2>
                </div>
                <p className="text-sm text-foreground/60">Single-row horizontal flow, as requested.</p>
              </div>
              <ArtistRail artists={artists} />
            </section>

            <section className={`rounded-[2rem] border bg-white/45 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.05)] backdrop-blur ${config.borderTone}`}>
              <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-foreground/45">Events</p>
                  <h2 className="mt-2 text-2xl font-semibold text-foreground">Sector event cards</h2>
                </div>
                <p className="text-sm text-foreground/60">Mixed-concept events can appear in several pages.</p>
              </div>
              <EventRail events={events} />
            </section>

            <ContactBlock sector={sector} />
          </div>
        </div>
      </div>
    </section>
  );
}
