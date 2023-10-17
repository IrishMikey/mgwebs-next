export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="flex flex-col gap-2 font-inter  lg:flex">
        <h1 className="text-[32px] text-green-400">Michael Geraghty</h1>
        <h2 className="text-[26px]">web dev.</h2>
      </div>
      <div className="border-slate-100">
        <a
          href="mailto:mikeygeraghty@gmail.com"
          className="hover:text-green-400 hover:underline"
        >
          Email
        </a>
      </div>
    </main>
  );
}
