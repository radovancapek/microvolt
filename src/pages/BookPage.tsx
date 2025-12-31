import { useMemo, useState } from "react";
import hero3 from "../assets/pcb-detailed.png";
import { Button } from "../components/ui/Button";

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
  files: File[];
};

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

export function BookPage() {
  const [state, setState] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    message: "",
    files: []
  });


  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const errors = useMemo(() => {
    const e: Partial<Record<keyof FormState, string>> = {};

    if (!state.name.trim()) e.name = "Zadejte své jméno.";

    if (!state.email.trim()) e.email = "Zadejte e-mail.";
    else if (!isEmail(state.email)) e.email = "Zadej prosím platný e-mail.";

    if (!state.message.trim()) e.message = "Napište poptávku.";

    return e;
  }, [state]);

  const isValid = Object.keys(errors).length === 0;

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    setSubmitted(true);
    setApiError(null);
    setSent(false);

    if (!isValid) return;

    try {
      setSending(true);

      const fd = new FormData();
      fd.append("name", state.name);
      fd.append("email", state.email);
      fd.append("company", state.company);
      fd.append("message", state.message);
      for (const f of state.files) fd.append("files", f);

      const res = await fetch("http://localhost:5175/api/inquiry", {
        method: "POST",
        body: fd,
      });

      if (!res.ok) {
        setApiError("Nepodařilo se odeslat poptávku. Zkuste to prosím znovu.");
        return;
      }

      setSent(true);
      // volitelně reset:
      // setState({ name: "", email: "", company: "", message: "", files: [] });
      // setSubmitted(false);
    } finally {
      setSending(false);
    }
  }

  function FileField(props: {
    label: string;
    value: File[];
    onChange: (files: File[]) => void;
    accept?: string;
    multiple?: boolean;
    hint?: string;
  }) {
    return (
      <div>
        <label className="text-xs font-semibold opacity-90">{props.label}</label>

        <input
          type="file"
          multiple={props.multiple}
          accept={props.accept}
          onChange={(e) => {
            const next = Array.from(e.target.files ?? []);
            props.onChange(next);
          }}
          className="mt-2 block w-full text-xs text-white/80
          file:mr-4 file:rounded-full file:border-0
          file:bg-white/95 file:px-4 file:py-2
          file:text-xs file:font-semibold file:text-black
          hover:file:brightness-95"
        />

        {props.hint ? (
          <p className="mt-2 text-xs text-white/60">{props.hint}</p>
        ) : null}

        {props.value.length > 0 ? (
          <ul className="mt-3 space-y-1 text-xs text-white/80">
            {props.value.map((f) => (
              <li key={`${f.name}-${f.size}-${f.lastModified}`}>
                {f.name}{" "}
                <span className="text-white/50">
                  ({Math.round(f.size / 1024)} KB)
                </span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    );
  }

  return (
    <main className="bg-micro-lime">
      <div className="relative h-[250px] sm:h-[300px]">
        <img
          src={hero3}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Jemné globální ztmavení */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Čitelnost textu: tmavé dole, světlejší nahoře */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

        <div className="relative mx-auto flex h-full max-w-6xl items-end px-4 pb-8 sm:pb-10">
          <div className="max-w-xl text-white">
            <h1 className="text-2xl font-light tracking-tight sm:text-4xl">
              Sjednat zakázku
            </h1>
            <p className="mt-2 max-w-lg text-sm leading-6 opacity-85">
              Popište prosím, co potřebujete (PCB, prototyp, montáž, testování…). Ozveme
              se Vám s cenovou nabídkou a návrhem dalšího postupu.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12">

        <h1 className="text-3xl font-light tracking-tight text-black/90 sm:text-4xl">
        </h1>

        <div className=" grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <form
            onSubmit={onSubmit}
            className="rounded bg-micro-olive px-6 py-8 text-white"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Jméno"
                value={state.name}
                onChange={(v) => setState((s) => ({ ...s, name: v }))}
                error={submitted ? errors.name : undefined}
              />
              <Field
                label="E-mail"
                value={state.email}
                onChange={(v) => setState((s) => ({ ...s, email: v }))}
                error={submitted ? errors.email : undefined}
              />
            </div>

            <div className="mt-4">
              <Field
                label="Firma (volitelné)"
                value={state.company}
                onChange={(v) => setState((s) => ({ ...s, company: v }))}
              />
            </div>

            <div className="mt-4">
              <FileField
                label="Přílohy (volitelné)"
                value={state.files}
                onChange={(files) => setState((s) => ({ ...s, files }))}
                multiple
                accept=".pdf,.zip,.rar,.7z,.csv,.txt,.png,.jpg,.jpeg,.step,.stp,.stl"
                hint="Můžete přiložit např. Gerbery/BOM, PDF specifikaci nebo 3D podklady."
              />
            </div>

            <div className="mt-4">
              <label className="text-xs font-semibold opacity-90">
                Zpráva
              </label>
              <textarea
                value={state.message}
                onChange={(e) =>
                  setState((s) => ({ ...s, message: e.target.value }))
                }
                rows={6}
                className={[
                  "mt-2 w-full rounded-md bg-white/95 px-3 py-2 text-sm text-black outline-none",
                  "ring-1 ring-white/20 focus:ring-2 focus:ring-micro-lime",
                ].join(" ")}
              />
              {submitted && errors.message ? (
                <p className="mt-2 text-xs text-red-200">{errors.message}</p>
              ) : null}
            </div>

            <div className="mt-6">
              <Button type="submit" disabled={sending}>{sending ? "Odesílám…" : "Odeslat poptávku"}</Button>
              {apiError ? <p className="mt-3 text-xs text-red-200">{apiError}</p> : null}
              {sent ? <p className="mt-3 text-xs text-white/80">Poptávka odeslána.</p> : null}
            </div>
          </form>

          <aside className="rounded bg-white px-6 py-8">
            <h2 className="text-sm font-semibold text-black/80">
              Shrnutí
            </h2>

            <dl className="mt-4 space-y-3 text-sm text-black/70">
              <Row label="Jméno" value={state.name || "—"} />
              <Row label="E-mail" value={state.email || "—"} />
              <Row label="Firma" value={state.company || "—"} />
              <Row
                label="Přílohy"
                value={
                  state.files.length > 0 ? `${state.files.length} souborů` : "—"
                }
              />
            </dl>
          </aside>
        </div>
      </div>
    </main>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <dt className="text-black/50">{label}</dt>
      <dd className="font-medium text-black/80">{value}</dd>
    </div>
  );
}

function Field(props: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
}) {
  return (
    <div>
      <label className="text-xs font-semibold opacity-90">{props.label}</label>
      <input
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        className={[
          "mt-2 w-full rounded-md bg-white/95 px-3 py-2 text-sm text-black outline-none",
          "ring-1 ring-white/20 focus:ring-2 focus:ring-micro-lime",
        ].join(" ")}
      />
      {props.error ? (
        <p className="mt-2 text-xs text-red-200">{props.error}</p>
      ) : null}
    </div>
  );
}