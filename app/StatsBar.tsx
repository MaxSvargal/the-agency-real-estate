export function StatsBar() {
  return (
    <div className="grid grid-cols-2 border-y border-zinc-300 md:grid-cols-4">
      <div className="border-b border-r border-zinc-300 p-8 text-center last:border-r-0 md:border-b-0">
        <p className="mb-2 text-xs uppercase tracking-widest text-zinc-600">
          Surface Area
        </p>
        <p className="font-medium text-zinc-900 text-5xl">180m²</p>
      </div>
      <div className="border-b border-r border-zinc-300 p-8 text-center last:border-r-0 md:border-b-0">
        <p className="mb-2 text-xs uppercase tracking-widest text-zinc-600">
          Energy Use
        </p>
        <p className="font-medium text-zinc-900 text-5xl">15 kWh/m²</p>
      </div>
      <div className="border-b border-r border-zinc-300 p-8 text-center last:border-r-0 md:border-b-0">
        <p className="mb-2 text-xs uppercase tracking-widest text-zinc-600">
          Solar Panels
        </p>
        <p className="font-medium text-zinc-900 text-5xl">40 m²</p>
      </div>
      <div className="border-b border-zinc-300 p-8 text-center last:border-r-0 md:border-b-0">
        <p className="mb-2 text-xs uppercase tracking-widest text-zinc-600">
          Carbon Balance
        </p>
        <p className="font-medium text-zinc-900 text-5xl">-20%</p>
      </div>
    </div>
  );
}
