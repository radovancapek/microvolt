import { useMemo, useState } from "react";
import { ButtonLink } from "./ui/ButtonLink";

type Testimonial = {
    quote: string;
    author: string;
    role: string;
};

export function Testimonials() {
    const items = useMemo<Testimonial[]>(
        () => [
            {
                quote:
                    "Jones & Brown Legal handled my estate planning with such care and professionalism. They listened to my concerns and made the process clear and straightforward. I now have complete peace of mind knowing my family's future is secure.",
                author: "David L.",
                role: "Business Owner",
            },
            {
                quote:
                    "Skvělá komunikace, rychlé prototypování a precizní montáž. Doporučuji pro firmy, které potřebují kvalitu a spolehlivost.",
                author: "Jan K.",
                role: "CTO",
            },
            {
                quote:
                    "Pomohli nám od návrhu až po sériovou výrobu. AOI kontrola a testování nám výrazně snížily reklamace.",
                author: "Petra M.",
                role: "Project Manager",
            },
        ],
        []
    );

    const [i, setI] = useState(0);
    const active = items[i];

    function prev() {
        setI((x) => (x - 1 + items.length) % items.length);
    }

    function next() {
        setI((x) => (x + 1) % items.length);
    }

    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-3xl px-4 text-center">
                <h3 className="text-sm font-semibold text-black/80">
                    Reference od zákazníků
                </h3>

                <div className="mx-auto mt-8 max-w-xl bg-micro-white px-8 py-10">
                    <p className="text-sm leading-6 text-black/70">
                        “{active.quote}”
                    </p>
                    <p className="mt-6 text-xs font-semibold text-black/70">
                        — {active.author}, {active.role}
                    </p>

                    <div className="mt-8 flex items-center justify-center gap-3 text-black/50">
                        <button className="px-2" onClick={prev} aria-label="Previous">
                            ←
                        </button>

                        <div className="flex gap-2">
                            {items.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setI(idx)}
                                    aria-label={`Go to ${idx + 1}`}
                                    className={[
                                        "h-2 w-2 rounded-full",
                                        idx === i ? "bg-black/60" : "bg-black/25",
                                    ].join(" ")}
                                />
                            ))}
                        </div>

                        <button className="px-2" onClick={next} aria-label="Next">
                            →
                        </button>
                    </div>
                </div>

                <div className="mt-8">
                    <ButtonLink to="/sjednat" className="mt-6">
                        Sjednat zakázku
                    </ButtonLink>
                </div>
            </div>
        </section>
    );
}