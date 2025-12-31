import hero2 from "../assets/PCB-assembly.jpg";
import boards2Url from "../assets/multiple-boards.jpg";
import { ServiceRow } from "../components/ServiceRow";

const services = [
    {
        title: "Vývoj elektroniky na klíč",
        bullets: [
            "Návrh schématu a PCB layout: optimalizace pro EMC, termiku a výrobní efektivitu.",
            "Vývoj firmware: od jednoduchých mikrokontrolérů až po pokročilá řešení s komunikací (I2C, SPI, CAN, Ethernet).",
            "Prototypování a testování: rychlá výroba pilotních sérií pomocí Fibre laser prototypového PCB, SMT montáže a AOI.",
        ],
    },
    {
        title: "SMT montáž a kontrola kvality",
        bullets: [
            "High-mix, low-volume i high-volume: osazujeme od 01005 po BGA.",
            "Automatic Optical Inspection (AOI): 100% vizuální kontrola osazených desek.",
            "Funkční testy: možný návrh testovacích stanic pro ověření provozuschopnosti.",
        ],
    },
    {
        title: "Reflow a mikropájení",
        bullets: [
            "Reflow pec: přesné řízení teplotních profilů pro spolehlivé zapékání pájecích past a správné teplotní zatěžování integrovaných obvodů.",
            "Mikropájení pod mikroskopem: JBC pájecí stanice a stereomikroskopy zaručí přesnost i u nejmenších součástek.",
        ],
    },
    {
        title: "3D modelování a tisk",
        bullets: [
            "CAD design: detailní návrhy mechanických dílů a sestav.",
            "3D tisk: prototypy i série dílů z plastů a pryskyřic.",
            "Úpravy a iterace: rychlé změny a ověření funkčnosti přímo na pracovišti.",
        ],
    },
    {
        title: "Laserové gravírování a řezání",
        bullets: [
            "Fibre Laser: značení kovů, micro značky, výrobní štítky.",
            "CO₂ Laser: řezání a rytí plastů, dřeva, plexi.",
            "Precizní linie a detaily: včetně složitých tvarů a logotypů.",
        ],
    },
    {
        title: "Robotické automatizace",
        bullets: [
            "Integrovaná robotická ramena: nakládání, montáž, třídění komponent.",
            "Automatizační linky: zvýšení produktivity a jednotnost opakovaných operací.",
            "Programovatelné sekvence: přizpůsobené specifickým procesům.",
        ],
    },
    {
        title: "Laboratorní a mechanické zázemí",
        bullets: [
            "Vývojová laboratoř: zdroje, multimetry, osciloskopy.",
            "Stereomikroskopy: kontrola malých spojů a dokumentace kvality.",
            "Mechanické nástroje: stolní vrtačka, frézky a další pro opracování dílů.",
        ],
    },
    {
        title: "Komplexní a vlastní projekty",
        bullets: [
            "Od konceptu k realizaci: kompletní správa projektu včetně dokumentace.",
            "Vývoj vlastních zařízení: modulární řešení pro automatizaci dílen.",
            "Příprava na sériovou výrobu: procesní dokumentace a logistika.",
        ],
    },
];

export function ServicesPage() {
    return (
        <main>
            {/* Hero (foto + text) */}
            <section className="relative">
                <div className="relative h-[250px] sm:h-[300px]">
                    <img
                        src={hero2}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover"
                    />

                    {/* Jemné globální ztmavení */}
                    <div className="absolute inset-0 bg-black/30" />

                    {/* Čitelnost textu: tmavé dole, světlejší nahoře */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

                    <div className="relative mx-auto flex h-full max-w-6xl items-end px-4 pb-10">
                        <p className="max-w-3xl text-lg font-medium text-white sm:text-xl">
                            Nabízíme komplexní služby pro vývoj, prototypování, výrobu i
                            kontrolu kvality elektroniky. Umíme převzít celý proces od návrhu až po sériovou výrobu a testování.
                        </p>
                    </div>
                </div>
            </section>
            {/* Olivová sekce se službami */}
            <section className="bg-micro-olive text-white">
                <div className="mx-auto max-w-6xl px-4 py-12">
                    <div className="mt-2">
                        {services.map((s) => (
                            <ServiceRow key={s.title} title={s.title} bullets={s.bullets} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Spodní image */}
            <section className="h-56 sm:h-72">
                <img src={boards2Url} alt="" className="h-full w-full object-cover" />
            </section>

            {/* Footer (jednoduchý, můžeš nahradit dle návrhu) */}
            <footer className="bg-micro-paper">
                <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3">
                    <div>
                        <div className="h-10 w-40 rounded bg-white" />
                        <p className="mt-6 text-sm text-black/60">
                            Precizní zpracování Vaší zakázky
                        </p>
                    </div>

                    <div className="text-sm text-black/60">
                        <div>hello@figma.com</div>
                        <div>(555) 123-4567</div>
                        <div className="mt-4">
                            123 Candyland Lane
                            <br />
                            Suite 123
                            <br />
                            Los Angeles, CA 94117
                        </div>
                    </div>

                    <div className="text-sm text-black/60">
                        <div>Instagram</div>
                        <div>Facebook</div>
                        <div>LinkedIn</div>
                        <div>Bluesky</div>

                        <div className="mt-8 text-xs text-black/50">
                            MicroVolt <br />© {new Date().getFullYear()} All Rights Reserved
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}