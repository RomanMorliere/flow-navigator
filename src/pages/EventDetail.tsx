import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getEventBySlug } from "@/data/mash";

function DetailList({ label, items }: { label: string; items?: string[] }) {
  if (!items?.length) {
    return null;
  }

  return (
    <article className="rounded-[1.5rem] border border-foreground/10 bg-background/45 p-5">
      <p className="text-xs uppercase tracking-[0.35em] text-foreground/45">{label}</p>
      <ul className="mt-4 space-y-2 text-sm leading-6 text-foreground/75">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

export default function EventDetail() {
  const { slug } = useParams();
  const event = getEventBySlug(slug);

  if (!event) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background px-6">
        <div className="text-center">
          <h1 className="text-4xl font-semibold">Event not found</h1>
          <Link to="/" className="mt-6 inline-flex rounded-full border border-foreground/15 px-5 py-3 text-sm">
            Return Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f7f0e1_0%,#f4eee3_100%)] px-5 py-6 md:px-8">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-white/65 px-4 py-2 text-sm backdrop-blur"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Flow
        </Link>

        <section className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <article className="rounded-[2rem] border border-foreground/10 bg-white/70 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur">
            <img src={event.flyer} alt={event.title} className="h-[34rem] w-full rounded-[1.5rem] object-cover" />
          </article>

          <article className="rounded-[2rem] border border-foreground/10 bg-white/70 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur">
            <p className="text-xs uppercase tracking-[0.35em] text-foreground/45">MASH Event Detail</p>
            <h1 className="mt-3 text-4xl font-semibold text-foreground md:text-5xl">{event.titleLong}</h1>
            <p className="mt-4 text-lg leading-8 text-foreground/72">{event.subtitle}</p>
            <p className="mt-6 text-sm leading-7 text-foreground/75">{event.description}</p>

            <div className="mt-8 grid gap-4">
              <article className="rounded-[1.5rem] border border-foreground/10 bg-background/45 p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-foreground/45">Date & Time</p>
                <p className="mt-4 text-sm leading-6 text-foreground/75">{event.dateTime}</p>
              </article>
              <article className="rounded-[1.5rem] border border-foreground/10 bg-background/45 p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-foreground/45">Venue</p>
                <p className="mt-4 text-sm leading-6 text-foreground/75">{event.venue}</p>
              </article>
            </div>
          </article>
        </section>

        <section className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <DetailList label="Sounds By" items={event.soundsBy} />
          <DetailList label="Clothes From" items={event.clothesFrom} />
          <DetailList label="Concepts" items={event.concepts} />
          <article className="rounded-[1.5rem] border border-foreground/10 bg-white/70 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur">
            <p className="text-xs uppercase tracking-[0.35em] text-foreground/45">Sectors</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {event.sectors.map((sector) => (
                <span
                  key={sector}
                  className="rounded-full border border-foreground/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-foreground/55"
                >
                  {sector}
                </span>
              ))}
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
