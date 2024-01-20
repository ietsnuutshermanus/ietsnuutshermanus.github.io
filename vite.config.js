/** @type {import('vite').UserConfig} */
export default {
  base: "/ietsnuuts/",
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        book: "./book.html",
        rooms: "./rooms.html",
      },
    },
  },
};
