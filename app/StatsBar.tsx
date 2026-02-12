export function StatsBar() {
  return (
    <div className="grid w-full max-w-full grid-cols-2 border-y border-zinc-300 md:grid-cols-4">
      <div className="border-b border-r border-zinc-300 p-4 text-center last:border-r-0 md:border-b-0 md:p-8">
        <p className="mb-2 text-xs uppercase tracking-widest text-zinc-600">
          Surface Area
        </p>
        <p className="text-3xl font-medium text-zinc-900 md:text-5xl">180m²</p>
      </div>
      <div className="border-b border-r border-zinc-300 p-4 text-center last:border-r-0 md:border-b-0 md:p-8">
        <p className="mb-2 text-xs uppercase tracking-widest text-zinc-600">
          Energy Use
        </p>
        <p className="text-3xl font-medium text-zinc-900 md:text-5xl">15 kWh/m²</p>
      </div>
      <div className="border-b border-r border-zinc-300 p-4 text-center last:border-r-0 md:border-b-0 md:p-8">
        <p className="mb-2 text-xs uppercase tracking-widest text-zinc-600">
          Solar Panels
        </p>
        <p className="text-3xl font-medium text-zinc-900 md:text-5xl">40 m²</p>
      </div>
      <div className="border-b border-zinc-300 p-4 text-center last:border-r-0 md:border-b-0 md:p-8">
        <p className="mb-2 text-xs uppercase tracking-widest text-zinc-600">
          Carbon Balance
        </p>
        <p className="text-3xl font-medium text-zinc-900 md:text-5xl">-20%</p>
      </div>
    </div>
  );
}
