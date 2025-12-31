import { ButtonLink } from "./ui/ButtonLink";

type Item = {
  n: number;
  title: string;
  body: string;
};

const leftItems: Item[] = [
  {
    n: 1,
    title: "Konzultace a návrh",
    body:
      "Společně s vámi probere náš tým inženýrů všechny aspekty projektu – " +
      "funkční požadavky, cílové prostředí, cenovou optimalizaci i legislativní normy.",
  },
  {
    n: 2,
    title: "3D modelování a design",
    body:
      "Vytvoříme detailní CAD modely mechanických dílů a sestav, optimalizujeme " +
      "pevnost, hmotnost a estetiku. Můžete si je prohlédnout ve 3D ještě před výrobou.",
  },
  {
    n: 3,
    title: "Návrh a layout PCB",
    body:
      "Navrhujeme elektronické schéma i desky plošných spojů s důrazem na elektromagnetickou " +
      "kompatibilitu a termální správu. Součástí je i tvorba firmware, pokud vaše zařízení " +
      "vyžaduje inteligentní řízení.",
  },
];

const rightItems: Item[] = [
  {
    n: 4,
    title: "Prototypování",
    body:
      "Využíváme interního 3D tisku a malé série SMT osazení, abychom vám zajistili " +
      "rychlé ověření funkčnosti.",
  },
  {
    n: 5,
    title: "Příprava sériové výroby",
    body:
      "Po úspěšném testování nastavíme výrobní linky pro efektivní sériovou výrobu – " +
      "osazovací kapacity, gravírky, testovací stanice i finální montáž.",
  },
  {
    n: 6,
    title: "Zajištění kvality",
    body: "Každá součást prochází přísnými kontrolami (viz AOI).",
  },
];

function OfferItem({ item }: { item: Item }) {
  return (
    <li className="text-xs leading-6 mb-1">
      <div>
        {item.n}. {item.title}
      </div>
      <div className="pl-4 text-black -tracking-2 leading-5">{item.body}</div>
    </li>
  );
}

function OfferColumn({ items }: { items: Item[] }) {
  return (
    <ol className="space-y-4">
      {items.map((item) => (
        <OfferItem key={item.n} item={item} />
      ))}
    </ol>
  );
}

export function Offer() {
  return (
    <section className="bg-micro-paper py-14">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-xl font-semibold text-black/80">
          Co vám můžeme nabídnout
        </h2>

        <div className="mt-10 grid gap-30 md:grid-cols-2">
          {/* Levý sloupec */}
          <div>
            <p className="text-xs font-semibold">
              Kompletní řešení od A do Z
            </p>

            <div className="mt-1">
              <OfferColumn items={leftItems} />
            </div>

            <div className="mt-8">
              <ButtonLink to="/sjednat">Sjednat konzultaci</ButtonLink>
            </div>
          </div>

          {/* Pravý sloupec */}
          <div className="pt-1">
            <OfferColumn items={rightItems} />
          </div>
        </div>
      </div>
    </section>
  );
}