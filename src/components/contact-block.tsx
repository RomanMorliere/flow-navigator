import { type FormEvent, useState } from "react";
import { CONTACT, getSectorConfig, type SectorId } from "@/data/mash";

type ContactBlockProps = {
  sector: SectorId;
};

export function ContactBlock({ sector }: ContactBlockProps) {
  const config = getSectorConfig(sector);
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
    <section className={`rounded-[2rem] border p-6 shadow-[0_18px_40px_rgba(0,0,0,0.10)] ${config.surfaceTint} ${config.borderTone}`}>
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className={`text-xs uppercase tracking-[0.35em] ${config.mutedTone}`}>Contact Us</p>
          <h3 className={`mt-2 text-2xl font-semibold ${config.textTone}`}>{sector}</h3>
        </div>
        <div className="flex flex-col items-start gap-2 text-sm">
          <a className={`transition hover:opacity-70 ${config.textTone}`} href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <a className={`transition hover:opacity-70 ${config.textTone}`} href={CONTACT.instagramUrl} target="_blank" rel="noreferrer">
            {CONTACT.instagramHandle}
          </a>
        </div>
      </div>

      <form className="grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
        <label className={`grid gap-2 text-sm ${config.textTone}`}>
          <span>Your Email</span>
          <input
            className={`h-12 rounded-full border bg-white/95 px-5 outline-none transition ${config.borderTone} focus:border-current ${config.textTone}`}
            name="email"
            type="email"
            required
          />
        </label>
        <div className="hidden md:block" />
        <label className={`grid gap-2 text-sm md:col-span-2 ${config.textTone}`}>
          <span>Message</span>
          <textarea
            className={`min-h-36 rounded-[1.5rem] border bg-white/95 px-5 py-4 outline-none transition ${config.borderTone} focus:border-current ${config.textTone}`}
            name="message"
            required
          />
        </label>
        <div className="flex flex-wrap items-center gap-4 md:col-span-2">
          <button
            className={`rounded-full px-6 py-3 text-sm font-medium transition hover:opacity-85 ${config.buttonTone}`}
            type="submit"
          >
            Send Message
          </button>
          <p className={`text-sm ${config.mutedTone}`} aria-live="polite">{status}</p>
        </div>
      </form>
    </section>
  );
}
