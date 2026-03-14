import { Link } from "react-router-dom";
import { type Artist } from "@/data/mash";

type ArtistRailProps = {
  artists: Artist[];
};

export function ArtistRail({ artists }: ArtistRailProps) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {artists.map((artist) => (
        <article
          key={artist.slug}
          className="group w-[260px] shrink-0 rounded-[1.75rem] border border-foreground/10 bg-white/75 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur transition hover:-translate-y-1"
        >
          <img
            src={artist.image}
            alt={artist.name}
            className="h-52 w-full rounded-[1.25rem] object-cover"
          />
          <div className="mt-4">
            <p className="text-[11px] uppercase tracking-[0.3em] text-foreground/45">{artist.role}</p>
            <h3 className="mt-2 text-2xl font-semibold text-foreground">{artist.name}</h3>
            {artist.accent ? (
              <p className="mt-3 text-xs uppercase tracking-[0.3em] text-foreground/45">{artist.accent}</p>
            ) : null}
            <Link
              to={`/artists/${artist.slug}`}
              className="mt-5 inline-flex rounded-full border border-foreground/15 px-4 py-2 text-sm transition hover:bg-foreground hover:text-background"
            >
              View Details
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
