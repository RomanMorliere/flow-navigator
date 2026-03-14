export type SectorId = "art" | "music" | "fashion";

export type Artist = {
  slug: string;
  name: string;
  role: string;
  tagline: string;
  description: string;
  sectors: SectorId[];
  eventSlugs: string[];
  image: string;
  soundcloud?: string;
  gallery?: string[];
  accent?: string;
};

export type EventItem = {
  slug: string;
  title: string;
  titleLong: string;
  status: "past" | "coming";
  dateShort: string;
  dateTime: string;
  venue: string;
  subtitle: string;
  description: string;
  flyer: string;
  sectors: SectorId[];
  soundsBy?: string[];
  clothesFrom?: string[];
  concepts?: string[];
};

export const CONTACT = {
  email: "info@mashcollective.eu",
  instagramHandle: "@mash.intl",
  instagramUrl: "https://www.instagram.com/mash.intl/",
  formEndpoint: "https://formsubmit.co/ajax/info@mashcollective.eu",
};

export const SECTORS: Array<{
  id: SectorId;
  shortLabel: string;
  pageName: string;
  sectionTint: string;
  surfaceTint: string;
  borderTone: string;
  textTone: string;
  buttonTone: string;
}> = [
  {
    id: "art",
    shortLabel: "Art",
    pageName: "Art",
    sectionTint: "from-[#A2C5D8] via-[#d5e5ee] to-[#eef5f8]",
    surfaceTint: "bg-[#edf5f9]/80",
    borderTone: "border-[#25799B]/20",
    textTone: "text-[#25799B]",
    buttonTone: "bg-[#25799B] text-white",
  },
  {
    id: "music",
    shortLabel: "DJ",
    pageName: "DJ",
    sectionTint: "from-[#F7E6CB] via-[#fbf1df] to-[#fff9ef]",
    surfaceTint: "bg-[#fffaf1]/82",
    borderTone: "border-[#CB1B03]/14",
    textTone: "text-[#CB1B03]",
    buttonTone: "bg-[#CB1B03] text-white",
  },
  {
    id: "fashion",
    shortLabel: "Fashion",
    pageName: "Fashion",
    sectionTint: "from-[#CB1B03] via-[#df4a36] to-[#f3b9b1]",
    surfaceTint: "bg-[#fff3f1]/84",
    borderTone: "border-[#CB1B03]/20",
    textTone: "text-[#CB1B03]",
    buttonTone: "bg-[#25799B] text-white",
  },
];

export const EVENTS: EventItem[] = [
  {
    slug: "mash-launch-party",
    title: "MASH Launch Party",
    titleLong: "MASH Launch Party (Pop-Up Event)",
    status: "past",
    dateShort: "January 11, 2026",
    dateTime: "January 11th, 2026, 12:00 - 17:00",
    venue: "Mono Coffee Bar, Vijverhofstraat 15, 3032SB Rotterdam",
    subtitle: "Pop-up launch format combining underground sound and independent fashion labels.",
    description:
      "A hybrid MASH activation bringing sound, fashion labels, and visual atmosphere into one pop-up format in Rotterdam.",
    flyer: "/assets/launch_party.JPG",
    sectors: ["art", "music", "fashion"],
    soundsBy: ["Anto", "Nalee", "Dayz", "Lolo", "Zena-Rae"],
    clothesFrom: ["Akyna", "Starworld Studios", "Wolvetang"],
    concepts: ["Pop-up format", "Cross-city launch", "Independent visual direction"],
  },
  {
    slug: "mash-at-160k",
    title: "MASH at 160K",
    titleLong: "MASH at 160K",
    status: "past",
    dateShort: "January 22, 2026",
    dateTime: "Thursday, January 22nd, 2026, 22:00 - 02:00",
    venue: "160K, Schiekade 201, Rotterdam",
    subtitle: "A late-night curation bridging local selectors and invited guests.",
    description:
      "A club-focused night centered on curation, invited guests, and a local-plus-international lineup format.",
    flyer: "/assets/arcade_party.PNG",
    sectors: ["music"],
    soundsBy: ["MM9", "Merrie", "Jaya Latina", "Taju", "Isthisanna", "Defne"],
    concepts: ["Late-night curation", "b3b set", "Guest artist bridge"],
  },
  {
    slug: "mash-boss-ladies",
    title: "MASH Boss Ladies",
    titleLong: "MASH Boss Ladies",
    status: "coming",
    dateShort: "March 19, 2026",
    dateTime: "March 19th, 2026, 22:00 - 02:00",
    venue: "160K, Schiekade 201, Rotterdam",
    subtitle: "A dedicated lineup celebrating femme-forward energy in Rotterdam nightlife.",
    description:
      "An upcoming MASH lineup built around femme-forward energy and a focused club program in Rotterdam.",
    flyer: "/assets/MASH BOSS LADIES20.JPG",
    sectors: ["music"],
    soundsBy: ["Zena-Rae", "Emssoleil", "Kirakira", "Defne"],
    concepts: ["Focused lineup", "Nightlife curation", "Upcoming program"],
  },
];

const DEFAULT_PROFILE_IMAGE = "/assets/viggo_test_file.jpeg";

export const ARTISTS: Artist[] = [
  {
    slug: "mash-vernissage",
    name: "MASH Vernissage",
    role: "Art concept",
    tagline: "Vernissages with multiple concepts under one roof.",
    description:
      "Drawn directly from the existing MASH presentation, this concept frames art-side activations as layered formats where installation, audience, and music can share the same room.",
    sectors: ["art"],
    eventSlugs: ["mash-launch-party"],
    image: "/assets/defne_setgellery.jpeg",
    gallery: ["/assets/defne_setgellery.jpeg"],
    accent: "Spatial format",
  },
  {
    slug: "city-storytelling",
    name: "City Storytelling",
    role: "Art direction",
    tagline: "Installations, vernissage concepts, and city storytelling.",
    description:
      "This profile translates the current MASH copy into an art-facing card: narrative environments and visual storytelling that connect Paris and Rotterdam through place-based atmospheres.",
    sectors: ["art"],
    eventSlugs: ["mash-launch-party"],
    image: "/assets/launch_party.JPG",
    accent: "Narrative environments",
  },
  {
    slug: "installation-direction",
    name: "Installation Direction",
    role: "Art practice",
    tagline: "Spatial interventions built for hybrid cultural events.",
    description:
      "A compact art practice card based on the site's existing installation language, meant to anchor the art page without inventing a separate roster absent from the source material.",
    sectors: ["art"],
    eventSlugs: ["mash-launch-party"],
    image: "/assets/viggo_test_file.jpeg",
    accent: "Hybrid installations",
  },
  {
    slug: "akyna",
    name: "Akyna",
    role: "Fashion label",
    tagline: "Independent fashion label featured during the MASH Launch Party.",
    description:
      "Fashion partner listed in the original Launch Party event details and carried here into the flow-based site as a dedicated sector profile.",
    sectors: ["fashion"],
    eventSlugs: ["mash-launch-party"],
    image: "/assets/launch_party.JPG",
    accent: "Launch Party feature",
  },
  {
    slug: "starworld-studios",
    name: "Starworld Studios",
    role: "Fashion label",
    tagline: "Part of the Launch Party fashion selection.",
    description:
      "Independent fashion label sourced from the original MASH event data and now surfaced as its own card in the fashion page.",
    sectors: ["fashion"],
    eventSlugs: ["mash-launch-party"],
    image: "/assets/MASH BOSS LADIES20.JPG",
    accent: "Independent label",
  },
  {
    slug: "wolvetang",
    name: "Wolvetang",
    role: "Fashion label",
    tagline: "Visual identity and fashion presence inside the MASH launch format.",
    description:
      "Another Launch Party label from the existing site data, included here so the fashion sector has its own artist-style cards and details.",
    sectors: ["fashion"],
    eventSlugs: ["mash-launch-party"],
    image: "/assets/arcade_party.PNG",
    accent: "Visual collaborator",
  },
  {
    slug: "anto",
    name: "Anto",
    role: "DJ",
    tagline: "MASH Launch Party artist.",
    description: "Part of the Launch Party roster in the original MASH website.",
    sectors: ["music"],
    eventSlugs: ["mash-launch-party"],
    image: DEFAULT_PROFILE_IMAGE,
  },
  {
    slug: "dayz",
    name: "Dayz",
    role: "DJ",
    tagline: "MASH Launch Party artist.",
    description: "Part of the Launch Party roster in the original MASH website.",
    sectors: ["music"],
    eventSlugs: ["mash-launch-party"],
    image: DEFAULT_PROFILE_IMAGE,
    soundcloud: "https://on.soundcloud.com/ajfRo4s3qVzWHSgWvd",
  },
  {
    slug: "defne",
    name: "Defne",
    role: "DJ",
    tagline: "Played at 160K and Boss Ladies.",
    description: "Featured across multiple MASH music events, including 160K and Boss Ladies.",
    sectors: ["music"],
    eventSlugs: ["mash-at-160k", "mash-boss-ladies"],
    image: "/assets/defne_profilepic.jpeg",
    gallery: ["/assets/defne_setgellery.jpeg"],
    soundcloud: "https://on.soundcloud.com/sqRDUoGm0ElTEGxKo0",
  },
  {
    slug: "emssoleil",
    name: "Emssoleil",
    role: "DJ",
    tagline: "MASH Boss Ladies artist.",
    description: "Part of the Boss Ladies lineup in the original MASH roster.",
    sectors: ["music"],
    eventSlugs: ["mash-boss-ladies"],
    image: "/assets/emssoleil_profilepic.JPG",
    soundcloud: "https://on.soundcloud.com/NNJtzrSet2GbpuvZTT",
  },
  {
    slug: "isthisanna",
    name: "Isthisanna",
    role: "DJ",
    tagline: "Guest artist from France at 160K.",
    description: "French guest artist featured in the 160K lineup.",
    sectors: ["music"],
    eventSlugs: ["mash-at-160k"],
    image: "/assets/thisisanna_profilepic.jpeg",
    soundcloud: "https://on.soundcloud.com/ekWgbtz463F55VBdu9",
  },
  {
    slug: "jaya-latina",
    name: "Jaya Latina",
    role: "DJ",
    tagline: "Part of the 160K b3b set.",
    description: "Included in the b3b set configuration at MASH at 160K.",
    sectors: ["music"],
    eventSlugs: ["mash-at-160k"],
    image: "/assets/Jaya-Latina_profilepic.JPG",
    soundcloud: "https://on.soundcloud.com/yAHoD8dczSwce0tj1C",
  },
  {
    slug: "kirakira",
    name: "Kirakira",
    role: "DJ",
    tagline: "MASH Boss Ladies artist.",
    description: "Part of the Boss Ladies lineup in the original MASH roster.",
    sectors: ["music"],
    eventSlugs: ["mash-boss-ladies"],
    image: DEFAULT_PROFILE_IMAGE,
    soundcloud: "https://on.soundcloud.com/SkP6Gb2NUs4pQxV2Qa",
  },
  {
    slug: "lolo",
    name: "Lolo",
    role: "DJ",
    tagline: "MASH Launch Party artist.",
    description: "Part of the Launch Party roster in the original MASH website.",
    sectors: ["music"],
    eventSlugs: ["mash-launch-party"],
    image: DEFAULT_PROFILE_IMAGE,
    soundcloud: "https://on.soundcloud.com/NvPxj0sYjgUXlJEXh9",
  },
  {
    slug: "merrie",
    name: "Merrie",
    role: "DJ",
    tagline: "Part of the 160K b3b set.",
    description: "Included in the b3b set configuration at MASH at 160K.",
    sectors: ["music"],
    eventSlugs: ["mash-at-160k"],
    image: "/assets/MERRIE_profilepic.jpg",
    soundcloud: "https://on.soundcloud.com/W5navffwl2F4MzVjx5",
  },
  {
    slug: "mm9",
    name: "MM9",
    role: "DJ",
    tagline: "Part of the 160K b3b set.",
    description: "Included in the b3b set configuration at MASH at 160K.",
    sectors: ["music"],
    eventSlugs: ["mash-at-160k"],
    image: "/assets/MM9_profilepic.jpg",
    soundcloud: "https://on.soundcloud.com/ORjp1M2NBEw2i5f4f9",
  },
  {
    slug: "nalee",
    name: "Nalee",
    role: "DJ",
    tagline: "MASH Launch Party artist.",
    description: "Part of the Launch Party roster in the original MASH website.",
    sectors: ["music"],
    eventSlugs: ["mash-launch-party"],
    image: DEFAULT_PROFILE_IMAGE,
    soundcloud: "https://on.soundcloud.com/uLdwABR6chp4rfGCsb",
  },
  {
    slug: "taju",
    name: "Taju",
    role: "DJ",
    tagline: "MASH at 160K artist.",
    description: "Part of the 160K music program in Rotterdam.",
    sectors: ["music"],
    eventSlugs: ["mash-at-160k"],
    image: "/assets/tomtaju_profilepic.JPG",
    soundcloud: "https://on.soundcloud.com/cltnENsznVIlCtpbXA",
  },
  {
    slug: "zena-rae",
    name: "Zena-Rae",
    role: "DJ",
    tagline: "Played at Launch Party and Boss Ladies.",
    description: "Appears across multiple MASH lineups, linking launch and club formats.",
    sectors: ["music"],
    eventSlugs: ["mash-launch-party", "mash-boss-ladies"],
    image: DEFAULT_PROFILE_IMAGE,
    soundcloud: "https://on.soundcloud.com/KQUIJXWv5cZpNUBqqB",
  },
].sort((a, b) => a.name.localeCompare(b.name));

export function getSectorConfig(sector: SectorId) {
  return SECTORS.find((item) => item.id === sector)!;
}

export function getArtistsBySector(sector: SectorId) {
  return ARTISTS.filter((artist) => artist.sectors.includes(sector));
}

export function getEventsBySector(sector: SectorId) {
  return EVENTS.filter((event) => event.sectors.includes(sector));
}

export function getArtistBySlug(slug?: string) {
  return ARTISTS.find((artist) => artist.slug === slug);
}

export function getEventBySlug(slug?: string) {
  return EVENTS.find((event) => event.slug === slug);
}

export function getEventsForArtist(artist: Artist) {
  return artist.eventSlugs
    .map((slug) => getEventBySlug(slug))
    .filter((event): event is EventItem => Boolean(event));
}
