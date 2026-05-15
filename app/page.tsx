import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-lg flex-col items-center justify-center gap-8 px-6 py-16">
      <div className="text-center">
        <h1 className="text-3xl font-semibold tracking-tight">Worlde Cheater</h1>
        <p className="mt-2 text-[var(--muted)]">
          Page views are tracked with Vercel Web Analytics when deployed to
          Vercel (enable Analytics in the project dashboard).
        </p>
      </div>
      <Link
        href="/play"
        className="rounded-lg bg-[var(--accent)] px-5 py-2.5 font-medium text-black transition-opacity hover:opacity-90"
      >
        Launch tool
      </Link>
    </main>
  );
}
