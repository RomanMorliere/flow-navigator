import { Link } from "react-router-dom";
import { getSectorConfig, type Artist, type SectorId } from "@/data/mash";

type ArtistRailProps = {
  artists: Artist[];
  sector: SectorId;
};

export function ArtistRail({ artists, sector }: ArtistRailProps) {
  const config = getSectorConfig(sector);

  return (
    <div className="flex gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {artists.map((artist) => (
        <article
          key={artist.slug}
          className={`group w-[260px] shrink-0 rounded-[1.9rem] border p-4 shadow-[0_18px_40px_rgba(0,0,0,0.10)] transition hover:-translate-y-1 ${config.cardTint} ${config.borderTone}`}
        >
          <div className={`rounded-[1.45rem] p-2 ${config.mediaTint}`}>
            <img
              src={artist.image}
              alt={artist.name}
              className="h-52 w-full rounded-[1.1rem] object-cover"
            />
          </div>
          <div className="mt-4">
            <p className={`text-[11px] uppercase tracking-[0.3em] ${config.mutedTone}`}>{artist.role}</p>
            <h3 className={`mt-2 text-2xl font-semibold ${config.textTone}`}>{artist.name}</h3>
            {artist.accent ? (
              <p className={`mt-3 inline-flex rounded-full border px-3 py-1 text-xs uppercase tracking-[0.24em] ${config.borderTone} ${config.mutedTone}`}>{artist.accent}</p>
            ) : null}
            <Link
              to={`/artists/${artist.slug}`}
              className={`mt-5 inline-flex rounded-full px-4 py-2 text-sm transition hover:opacity-85 ${config.buttonTone}`}
            >
              View Details
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
