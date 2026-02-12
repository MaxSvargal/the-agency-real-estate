import { StackedHeaderVideo } from "./StackedHeaderVideo";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center justify-center bg-white dark:bg-black">
        <StackedHeaderVideo />

        <h1>Hello</h1>
      </main>
    </div>
  );
}

