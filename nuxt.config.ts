// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/styles/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Md. Faysal Mahmud Abid",
      meta: [
        {
          name: "description",
          content:
            "Portfolio of Md. Faysal Mahmud Abid. Software Engineer, Web Developer.",
        },
      ],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap",
        },
      ],
    },
  },
  modules: ["nuxt-gtag"],
  gtag: {
    id: "G-ECWBMBB7CT",
  },
});
