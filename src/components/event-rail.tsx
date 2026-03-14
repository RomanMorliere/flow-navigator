import { Link } from "react-router-dom";
import { getSectorConfig, type EventItem, type SectorId } from "@/data/mash";

type EventRailProps = {
  events: EventItem[];
  sector: SectorId;
};

export function EventRail({ events, sector }: EventRailProps) {
  const config = getSectorConfig(sector);

  return (
    <div className="flex gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {events.map((event) => (
        <article
          key={event.slug}
          className={`w-[320px] shrink-0 rounded-[1.9rem] border p-4 shadow-[0_18px_40px_rgba(0,0,0,0.10)] ${config.cardTint} ${config.borderTone}`}
        >
          <div className={`rounded-[1.45rem] p-2 ${config.mediaTint}`}>
            <img
              src={event.flyer}
              alt={event.title}
              className="h-56 w-full rounded-[1.1rem] object-cover"
            />
          </div>
          <div className="mt-4">
            <p className={`inline-flex rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.24em] ${config.borderTone} ${config.mutedTone}`}>
              {event.status === "coming" ? "Coming Soon" : "Past Event"}
            </p>
            <h3 className={`mt-2 text-2xl font-semibold ${config.textTone}`}>{event.title}</h3>
            <p className={`mt-4 text-sm ${config.mutedTone}`}>{event.dateShort}</p>
            <Link
              to={`/events/${event.slug}`}
              className={`mt-5 inline-flex rounded-full px-4 py-2 text-sm transition hover:opacity-85 ${config.buttonTone}`}
            >
              Event Details
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
