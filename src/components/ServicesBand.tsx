import { useMemo, useState } from "react";
import { ButtonLink } from "./ui/ButtonLink";
const services = [
    "Vývoj elektroniky na klíč",
    "SMT montáž a kontrola kvality",
    "Reflow a mikropájení",
    "3D modelování a tisk",
    "Laserové gravírování a řezání",
    "Robotické automatizace",
    "Laboratorní a mechanické zázemí",
    "Komplexní a vlastní projekty",
];
export function ServicesBand() {
    const [expanded, setExpanded] = useState(false);

    const visible = useMemo(() => {
        return expanded ? services : services.slice(0, 4);
    }, [expanded]);

    return (
        <section id="sluzby">
            <div className="bg-micro-olive py-14 text-white">
                <div className="mx-auto max-w-3xl px-4 ">
                    <div className="grid gap-6 md:grid-cols-[auto_minmax(0,1fr)]">
                        <p className="pt-2 text-lg font-semibold opacity-80">Naše Služby</p>
                        <div className="max-w-3xl text-2xl font-light sm:text-4xl leading-10">
                            {visible.map((s) => (
                                <div key={s}>{s}</div>
                            ))}

                            {!expanded && (
                                <button
                                    type="button"
                                    onClick={() => setExpanded(true)}
                                    className="block text-left text-micro-lime hover:brightness-95 focus:outline-none"
                                >
                                    +Další
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="mt-10">
                        <ButtonLink
                            to="/sluzby"
                            variant="secondary"
                        >
                            Zjistit víc
                        </ButtonLink>
                    </div>

                </div>
            </div>
        </section>
    );
}