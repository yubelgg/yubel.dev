export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between mx-auto max-w-2xl">
      <nav className="h-9 flex items-center justify-between mt-5 px-4 w-full text-slate-400">
        <p>Yubel</p>
        <a
          href="/blog"
          className="group px-5 py-4 "
          rel="noopener noreferrer"
        >
          Blog
        </a>
      </nav>

      <main className="flex flex-col items-center justify-between px-4 pt-5 ">
        <p>Hello there, I'm <strong>Yu Long</strong> aka <strong>yubel</strong>.
          I'm a 21 y/o CS undergraduate student. I enjoy various things like <strong>coding </strong>
          and <strong>neovim</strong>.
        </p>

        <div className="mt-12"></div>
        <h2 className="self-start text-xl font-bold">Projects</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 text-start w-full">
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
        </div>

        <div className="mt-12"></div>
        <h2 className="self-start text-xl font-bold">Blog</h2>
      </main>
    </div>
  )
}
