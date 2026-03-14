import { type FormEvent, useState } from "react";
import { CONTACT, type SectorId } from "@/data/mash";

type ContactBlockProps = {
  sector: SectorId;
};

export function ContactBlock({ sector }: ContactBlockProps) {
  const [status, setStatus] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("Sending...");

    try {
      const response = await fetch(CONTACT.formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: formData.get("email"),
          message: formData.get("message"),
          _subject: `MASH ${sector} inquiry`,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed submit");
      }

      form.reset();
      setStatus("Message sent. We'll get back to you soon.");
    } catch {
      setStatus("Unable to send now. Please use email or Instagram directly.");
    }
  }

  return (
    <section className="rounded-[2rem] border border-foreground/10 bg-white/70 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-foreground/45">Contact Us</p>
          <h3 className="mt-2 text-2xl font-semibold text-foreground">Book MASH for {sector}</h3>
          <p className="mt-2 max-w-xl text-sm leading-6 text-foreground/70">
            Curation, programming, hybrid events, and cross-city collaborations.
          </p>
        </div>
        <div className="flex flex-col items-start gap-2 text-sm">
          <a className="transition hover:opacity-70" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <a className="transition hover:opacity-70" href={CONTACT.instagramUrl} target="_blank" rel="noreferrer">
            {CONTACT.instagramHandle}
          </a>
        </div>
      </div>

      <form className="grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
        <label className="grid gap-2 text-sm">
          <span>Your Email</span>
          <input
            className="h-12 rounded-full border border-foreground/15 bg-background/90 px-5 outline-none transition focus:border-foreground/40"
            name="email"
            type="email"
            required
          />
        </label>
        <div className="hidden md:block" />
        <label className="grid gap-2 text-sm md:col-span-2">
          <span>Message</span>
          <textarea
            className="min-h-36 rounded-[1.5rem] border border-foreground/15 bg-background/90 px-5 py-4 outline-none transition focus:border-foreground/40"
            name="message"
            required
          />
        </label>
        <div className="flex flex-wrap items-center gap-4 md:col-span-2">
          <button
            className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:opacity-85"
            type="submit"
          >
            Send Message
          </button>
          <p className="text-sm text-foreground/65" aria-live="polite">{status}</p>
        </div>
      </form>
    </section>
  );
}
