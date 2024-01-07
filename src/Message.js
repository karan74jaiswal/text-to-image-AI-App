export function Message() {
  return (
    <section className="message show">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          fill="currentColor"
          d="M11.8 11.5L8.4 3h-2L2 14h2.15l1.2-3h4.1l.62 1.56.71-.04 1.02-1.02zm.4 1l-.98 1-.76.04.18.46h2.16l-.6-1.5zM6.15 9L7.4 5.88 8.64 9H6.15zM17.83 4.17A4 4 0 0 0 15 3h-3v2h3a2 2 0 0 1 2 2v1.5h2V7a4 4 0 0 0-1.17-2.83z"
        ></path>
        <path
          fill="currentColor"
          d="M9.9 17.24l3.42 3.42a4.5 4.5 0 0 1-3.42 0 4.5 4.5 0 0 1 0-3.42zm7.18 2.1l-.13 2.09-.95.94-7.8-7.8.94-.95 2.08-.13 2.83-2.83c1.7-1.7 4.37-1.93 6.61-.76 1.17 2.25.95 4.91-.75 6.61l-2.83 2.84zM16 14.57a1.38 1.38 0 1 0 1.96-1.95A1.38 1.38 0 0 0 16 14.56z"
        ></path>
      </svg>
      <h1 className="text-4xl sm:text-[52px] font-bold font-secondary text-gray-800 dark:text-gray-100 uppercase relative">
        SDXL Turbo
      </h1>
      <h2 className="text-xl font-semibold text-gray-600 dark:text-gray-400">
        Real-Time Text-to-Image Generation
      </h2>
    </section>
  );
}
