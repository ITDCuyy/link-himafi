export default async function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-900 text-white">
      <div className="mx-auto max-w-lg px-6 text-center">
        <div className="mb-8">
          <h1 className="mb-4 text-5xl font-bold text-blue-400">HIMAFI ITB</h1>
          <h2 className="mb-4 text-2xl font-semibold">Link Shortener</h2>
          <p className="mb-8 text-lg text-slate-300">
            Welcome to the official link shortening service for Himpunan
            Mahasiswa Fisika ITB.
          </p>
        </div>

        <div className="space-y-4">
          <a
            href="https://himafiitb.com"
            className="inline-block rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-blue-700 hover:shadow-xl"
          >
            Visit HIMAFI ITB
          </a>
        </div>

        <div className="mt-8 text-sm text-slate-400">
          <p>Himpunan Mahasiswa Fisika ITB</p>
          <p className="mt-2">Institut Teknologi Bandung</p>
        </div>
      </div>
    </main>
  );
}
