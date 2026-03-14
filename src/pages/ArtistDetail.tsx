import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getArtistBySlug, getEventsForArtist, getSectorConfig } from "@/data/mash";

async function resolveSoundCloudEmbedUrl(url: string) {
  try {
    const endpoint = `https://soundcloud.com/oembed?format=json&url=${encodeURIComponent(url)}`;
    const response = await fetch(endpoint);
    if (!response.ok) throw new Error("oEmbed failed");
    const data = await response.json();
    const match = String(data.html || "").match(/src=\"([^\"]+)\"/i);
    if (match?.[1]) {
      return match[1].replace(/&amp;/g, "&");
    }
  } catch {
    return "";
  }

  return "";
}

export default function ArtistDetail() {
  const { slug } = useParams();
  const artist = getArtistBySlug(slug);
  const [embedSrc, setEmbedSrc] = useState("");

  useEffect(() => {
    async function prepareEmbed() {
      if (!artist?.soundcloud) {
        setEmbedSrc("");
        return;
      }

      const resolved = await resolveSoundCloudEmbedUrl(artist.soundcloud);
      setEmbedSrc(
        resolved ||
          `https://w.soundcloud.com/player/?url=${encodeURIComponent(artist.soundcloud)}&color=%2327352a&auto_play=false&show_user=true`,
      );
    }

    prepareEmbed();
  }, [artist?.soundcloud]);

  if (!artist) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background px-6">
        <div className="text-center">
          <h1 className="text-4xl font-semibold">Artist not found</h1>
          <Link to="/" className="mt-6 inline-flex rounded-full border border-foreground/15 px-5 py-3 text-sm">
            Return Home
          </Link>
        </div>
      </main>
    );
  }

  const relatedEvents = getEventsForArtist(artist);
  const theme = getSectorConfig(artist.sectors[0]);

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

        <section className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className={`rounded-[2rem] border p-5 shadow-[0_20px_60px_rgba(0,0,0,0.10)] ${theme.cardTint} ${theme.borderTone}`}>
            <div className={`rounded-[1.7rem] p-3 ${theme.mediaTint}`}>
              <img src={artist.image} alt={artist.name} className="h-[28rem] w-full rounded-[1.35rem] object-cover" />
            </div>
          </article>

          <article className={`rounded-[2rem] border p-6 shadow-[0_20px_60px_rgba(0,0,0,0.10)] ${theme.surfaceTint} ${theme.borderTone}`}>
            <p className={`text-xs uppercase tracking-[0.35em] ${theme.mutedTone}`}>{artist.role}</p>
            <h1 className={`mt-3 text-4xl font-semibold md:text-5xl ${theme.textTone}`}>{artist.name}</h1>
            <p className={`mt-4 text-lg ${theme.mutedTone}`}>{artist.tagline}</p>
            <p className={`mt-6 max-w-2xl text-sm leading-7 ${theme.mutedTone}`}>{artist.description}</p>

            <div className="mt-8 flex flex-wrap gap-2">
              {artist.sectors.map((sector) => (
                <span
                  key={sector}
                  className={`rounded-full border px-3 py-1 text-xs uppercase tracking-[0.22em] ${theme.borderTone} ${theme.mutedTone}`}
                >
                  {sector}
                </span>
              ))}
            </div>

            {artist.soundcloud ? (
              <div className="mt-8 space-y-4">
                <a
                  href={artist.soundcloud}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex rounded-full px-5 py-3 text-sm ${theme.buttonTone}`}
                >
                  Open SoundCloud
                </a>
                {embedSrc ? (
                  <iframe
                    title={`${artist.name} SoundCloud`}
                    width="100%"
                    height="180"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src={embedSrc}
                    className="rounded-[1.5rem]"
                  />
                ) : null}
              </div>
            ) : null}
          </article>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article className={`rounded-[2rem] border p-6 shadow-[0_20px_60px_rgba(0,0,0,0.10)] ${theme.surfaceTint} ${theme.borderTone}`}>
            <p className={`text-xs uppercase tracking-[0.35em] ${theme.mutedTone}`}>Related Events</p>
            <div className="mt-5 grid gap-4">
              {relatedEvents.map((event) => (
                <Link
                  key={event.slug}
                  to={`/events/${event.slug}`}
                  className={`rounded-[1.5rem] border p-4 transition hover:-translate-y-1 ${theme.cardTint} ${theme.borderTone}`}
                >
                  <p className={`text-xs uppercase tracking-[0.25em] ${theme.mutedTone}`}>{event.dateShort}</p>
                  <h2 className={`mt-2 text-2xl font-semibold ${theme.textTone}`}>{event.title}</h2>
                  <p className={`mt-2 text-sm leading-6 ${theme.mutedTone}`}>{event.subtitle}</p>
                </Link>
              ))}
            </div>
          </article>

          <article className={`rounded-[2rem] border p-6 shadow-[0_20px_60px_rgba(0,0,0,0.10)] ${theme.cardTint} ${theme.borderTone}`}>
            <p className={`text-xs uppercase tracking-[0.35em] ${theme.mutedTone}`}>Gallery</p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {(artist.gallery?.length ? artist.gallery : [artist.image]).map((image) => (
                <div key={image} className={`rounded-[1.5rem] p-2 ${theme.mediaTint}`}>
                  <img
                    src={image}
                    alt={`${artist.name} visual`}
                    className="h-64 w-full rounded-[1.1rem] object-cover"
                  />
                </div>
              ))}
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
