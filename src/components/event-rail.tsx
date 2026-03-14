import { Link } from "react-router-dom";
import { type EventItem } from "@/data/mash";

type EventRailProps = {
  events: EventItem[];
};

export function EventRail({ events }: EventRailProps) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {events.map((event) => (
        <article
          key={event.slug}
          className="w-[320px] shrink-0 rounded-[1.75rem] border border-foreground/10 bg-white/75 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur"
        >
          <img
            src={event.flyer}
            alt={event.title}
            className="h-56 w-full rounded-[1.25rem] object-cover"
          />
          <div className="mt-4">
            <p className="text-[11px] uppercase tracking-[0.3em] text-foreground/45">
              {event.status === "coming" ? "Coming Soon" : "Past Event"}
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-foreground">{event.title}</h3>
            <p className="mt-2 text-sm leading-6 text-foreground/70">{event.subtitle}</p>
            <p className="mt-4 text-sm text-foreground/65">{event.dateShort}</p>
            <p className="text-sm text-foreground/65">{event.venue}</p>
            <Link
              to={`/events/${event.slug}`}
              className="mt-5 inline-flex rounded-full border border-foreground/15 px-4 py-2 text-sm transition hover:bg-foreground hover:text-background"
            >
              Event Details
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
