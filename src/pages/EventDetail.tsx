import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getEventBySlug, getSectorConfig } from "@/data/mash";

function DetailList({
  label,
  items,
  tone,
}: {
  label: string;
  items?: string[];
  tone: ReturnType<typeof getSectorConfig>;
}) {
  if (!items?.length) {
    return null;
  }

  return (
    <article className={`rounded-[1.5rem] border p-5 ${tone.cardTint} ${tone.borderTone}`}>
      <p className={`text-xs uppercase tracking-[0.35em] ${tone.mutedTone}`}>{label}</p>
      <ul className={`mt-4 space-y-2 text-sm leading-6 ${tone.mutedTone}`}>
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

  const theme = getSectorConfig(event.sectors[0]);

  return (
    <main className={`min-h-screen px-5 py-6 md:px-8 ${theme.sectionTint}`}>
      <div className="mx-auto max-w-6xl">
        <Link
          to="/"
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm shadow-[0_10px_30px_rgba(0,0,0,0.08)] ${theme.shellTint} ${theme.borderTone} ${theme.textTone}`}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Flow
        </Link>

        <section className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <article className={`rounded-[2rem] border p-5 shadow-[0_20px_60px_rgba(0,0,0,0.10)] ${theme.cardTint} ${theme.borderTone}`}>
            <div className={`rounded-[1.7rem] p-3 ${theme.mediaTint}`}>
              <img src={event.flyer} alt={event.title} className="h-[34rem] w-full rounded-[1.35rem] object-cover" />
            </div>
          </article>

          <article className={`rounded-[2rem] border p-6 shadow-[0_20px_60px_rgba(0,0,0,0.10)] ${theme.surfaceTint} ${theme.borderTone}`}>
            <p className={`text-xs uppercase tracking-[0.35em] ${theme.mutedTone}`}>MASH Event Detail</p>
            <h1 className={`mt-3 text-4xl font-semibold md:text-5xl ${theme.textTone}`}>{event.titleLong}</h1>
            <p className={`mt-4 text-lg leading-8 ${theme.mutedTone}`}>{event.subtitle}</p>
            <p className={`mt-6 text-sm leading-7 ${theme.mutedTone}`}>{event.description}</p>

            <div className="mt-8 grid gap-4">
              <article className={`rounded-[1.5rem] border p-5 ${theme.cardTint} ${theme.borderTone}`}>
                <p className={`text-xs uppercase tracking-[0.35em] ${theme.mutedTone}`}>Date & Time</p>
                <p className={`mt-4 text-sm leading-6 ${theme.mutedTone}`}>{event.dateTime}</p>
              </article>
              <article className={`rounded-[1.5rem] border p-5 ${theme.cardTint} ${theme.borderTone}`}>
                <p className={`text-xs uppercase tracking-[0.35em] ${theme.mutedTone}`}>Venue</p>
                <p className={`mt-4 text-sm leading-6 ${theme.mutedTone}`}>{event.venue}</p>
              </article>
            </div>
          </article>
        </section>

        <section className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <DetailList label="Sounds By" items={event.soundsBy} tone={theme} />
          <DetailList label="Clothes From" items={event.clothesFrom} tone={theme} />
          <DetailList label="Concepts" items={event.concepts} tone={theme} />
          <article className={`rounded-[1.5rem] border p-5 shadow-[0_20px_60px_rgba(0,0,0,0.10)] ${theme.surfaceTint} ${theme.borderTone}`}>
            <p className={`text-xs uppercase tracking-[0.35em] ${theme.mutedTone}`}>Sectors</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {event.sectors.map((sector) => (
                <span
                  key={sector}
                  className={`rounded-full border px-3 py-1 text-xs uppercase tracking-[0.22em] ${theme.borderTone} ${theme.mutedTone}`}
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
