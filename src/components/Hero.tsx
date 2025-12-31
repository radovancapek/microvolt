import heroUrl from "../assets/hero.png";
import { ButtonLink } from "../components/ui/ButtonLink";

export function Hero() {
    return (
        <section className="relative">
            <div className="relative h-[360px] sm:h-[460px]">
                <img
                    src={heroUrl}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                />
                {/* Jemné globální ztmavení */}
                <div className="absolute inset-0 bg-black/30" />

                {/* Čitelnost textu: tmavé dole, světlejší nahoře */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

                <div className="relative mx-auto flex h-full max-w-6xl items-end px-4 pb-10 sm:pb-14">
                    <div className="max-w-xl text-white">
                        <h1 className="text-4xl font-light tracking-tight sm:text-6xl">
                            MicroVolt
                        </h1>
                        <p className="mt-3 text-lg font-medium sm:text-xl">
                            Precizní osazování a vývoj PCB pro firmy
                        </p>
                        <p className="mt-2 max-w-lg text-sm leading-6 opacity-85">
                            Od návrhu PCB, 3D modelování a zakázkové výroby až po finální
                            montáž a testování
                        </p>

                        <div className="mt-6">
                            <ButtonLink to="/sjednat">Sjednat konzultaci</ButtonLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}