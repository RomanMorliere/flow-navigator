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
  onScrollChange?: (scrollTop: number) => void;
};

export function SectorPanel({ sector, onScrollChange }: SectorPanelProps) {
  const config = getSectorConfig(sector);
  const artists = getArtistsBySector(sector);
  const events = getEventsBySector(sector);

  return (
    <section
      className={`h-screen w-screen shrink-0 overflow-y-auto ${config.sectionTint}`}
      onScroll={(event) => onScrollChange?.(event.currentTarget.scrollTop)}
    >
      <div className="min-h-full px-5 pb-16 pt-6 md:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="h-screen" />

          <div className="space-y-8">
            <section className={`rounded-[2rem] border p-6 shadow-[0_18px_40px_rgba(0,0,0,0.10)] ${config.surfaceTint} ${config.borderTone}`}>
              <div className="mb-5">
                <p className={`text-xs uppercase tracking-[0.35em] ${config.textTone}`}>{config.shortLabel} Artists</p>
              </div>
              <ArtistRail artists={artists} sector={sector} />
            </section>

            <section className={`rounded-[2rem] border p-6 shadow-[0_18px_40px_rgba(0,0,0,0.10)] ${config.surfaceTint} ${config.borderTone}`}>
              <div className="mb-5">
                <p className={`text-xs uppercase tracking-[0.35em] ${config.textTone}`}>{config.shortLabel} Events</p>
              </div>
              <EventRail events={events} sector={sector} />
            </section>

            <ContactBlock sector={sector} />
          </div>
        </div>
      </div>
    </section>
  );
}
