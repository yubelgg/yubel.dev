import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between mx-auto max-w-2xl">
      <nav className="h-9 flex items-center justify-between mt-5 px-4 w-full text-slate-400">
        <p>Yubel</p>
        <a href="/blog" className="group px-5 py-4 " rel="noopener noreferrer">
          Blog
        </a>
      </nav>

      <main className="flex flex-col items-center justify-between px-4 pt-5 ">
        <p>
          Hello there, I&apos;m <strong>Yu Long</strong> or you may call me{" "}
          <strong>yubel</strong>. I&apos;m a 21 y/o CS undergraduate student. I
          enjoy various things like <strong>coding </strong>
          and <strong>cycling</strong>. I use <strong>neovim</strong>.
        </p>

        <h2 className="mt-12 self-start text-xl font-bold">Projects</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 text-start w-full text">
          <a
            href="https://github.com/yubelgg/weather-app-v2"
            className="group py-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className={`mb-3 text-base underline underline-offset-3`}>
              weather app w/ gpt
            </p>
            <p className={`m-0 max-w-[20ch] text-sm opacity-70`}>
              weather app with personal measure based on weather powered by gpt
            </p>
          </a>

          <a
            href="https://github.com/yubelgg/docsfile"
            className="group py-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className={`mb-3 text-base underline underline-offset-3`}>
              dotfiles
            </p>
            <p className={`m-0 max-w-[20ch] text-sm opacity-70`}>
              dotfiles for my nvim settings
            </p>
          </a>

          <a
            href="https://github.com/yubelgg/yubel.dev"
            className="group py-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className={`mb-3 text-base underline underline-offset-3`}>
              yubel.dev
            </p>
            <p className={`m-0 max-w-[20ch] text-sm opacity-70`}>
              minimal portfolio website
            </p>
          </a>

          <a
            href="https://yubelgg.github.io/PathFinding/"
            className="group py-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className={`mb-3 text-base underline underline-offset-3`}>
              pathfinding
            </p>
            <p className={`m-0 max-w-[20ch] text-sm opacity-70`}>
              visualizing short path possible (Dikstra&apos;s)
            </p>
          </a>

          <a
            href="https://yubelgg.github.io/TodoList/"
            className="group py-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className={`mb-3 text-base underline underline-offset-3`}>
              todo list
            </p>
            <p className={`m-0 max-w-[20ch] text-sm opacity-70`}>
              simple todo list (temp)
            </p>
          </a>

          <a
            href="https://github.com/yubelgg/dotfiles-public"
            className="group py-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className={`mb-3 text-base underline underline-offset-3`}>
              dotfiles /w arch
            </p>
            <p className={`m-0 max-w-[20ch] text-sm opacity-70`}>
              includes arch install settings and old neovim setting
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
