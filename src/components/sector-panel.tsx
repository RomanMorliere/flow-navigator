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
};

export function SectorPanel({ sector }: SectorPanelProps) {
  const config = getSectorConfig(sector);
  const artists = getArtistsBySector(sector);
  const events = getEventsBySector(sector);

  return (
    <section
      className={`h-screen w-screen shrink-0 overflow-y-auto bg-gradient-to-b ${config.sectionTint}`}
    >
      <div className="min-h-full px-5 pb-16 pt-6 md:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="h-screen" />

          <div className="space-y-8">
            <section className={`rounded-[2rem] border bg-white/35 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.04)] ${config.borderTone}`}>
              <div className="mb-5">
                <p className="text-xs uppercase tracking-[0.35em] text-foreground/45">{config.shortLabel} Artists</p>
              </div>
              <ArtistRail artists={artists} />
            </section>

            <section className={`rounded-[2rem] border bg-white/35 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.04)] ${config.borderTone}`}>
              <div className="mb-5">
                <p className="text-xs uppercase tracking-[0.35em] text-foreground/45">{config.shortLabel} Events</p>
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
