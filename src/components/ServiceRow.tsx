type Props = {
  title: string;
  bullets: string[];
};

export function ServiceRow({ title, bullets }: Props) {
  return (
    <div className="grid gap-4 border-t border-white/20 py-8 md:grid-cols-2 md:gap-10">
      <div className="text-sm font-semibold text-white/85">{title}</div>

      <div className="text-sm leading-6 text-white/75">
        <ul className="list-disc space-y-1 pl-5">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}