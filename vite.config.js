/** @type {import('vite').UserConfig} */
export default {
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
