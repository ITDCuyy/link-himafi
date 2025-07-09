export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-900 text-white">
      <div className="mx-auto max-w-md px-6 text-center">
        <div className="mb-8">
          <h1 className="mb-4 text-6xl font-bold text-blue-400">404</h1>
          <h2 className="mb-4 text-2xl font-semibold">Link Not Found</h2>
          <p className="mb-8 text-lg text-slate-300">
            This link does not exist or has been moved.
          </p>
        </div>

        <a
          href="https://himafiitb.com"
          className="inline-block rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-blue-700 hover:shadow-xl"
        >
          Return to HIMAFI ITB
        </a>

        <div className="mt-8 text-sm text-slate-400">
          <p>Himpunan Mahasiswa Fisika ITB</p>
        </div>
      </div>
    </main>
  );
}
