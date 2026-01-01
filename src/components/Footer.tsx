import logo from "../assets/microvolt-1536x462.jpg";

export function Footer() {
    return (
        <footer className="bg-micro-white">
            <div className="mx-auto max-w-6xl px-4 pt-12 pb-4">
                <div className="grid gap-10 sm:grid-cols-4 place-items-center text-xs">
                    <div aria-hidden="true">
                        <img
                            className="h-12"
                            src={logo}
                            alt=""
                        />
                    </div>
                    <div className="mt-4">
                        <div>objednavky@uvolt.cz</div>
                        <div>+420 777 632 282</div>
                    </div>

                    <div className="mt-4">
                        <div>
                            Jaselská 102/45
                            <br />
                            Mladá Boleslav 293 01
                        </div>
                    </div>
                    <div className="mt-4">
                        <div>Facebook</div>
                        <div>LinkedIn</div>
                    </div>

                </div>

                <div className="mt-12 text-sm text-black/60">
                    <div className="text-xs text-black/50">
                        MicroVolt <br />© {new Date().getFullYear()} All Rights Reserved
                    </div>
                </div>
            </div>
        </footer>
    );
}