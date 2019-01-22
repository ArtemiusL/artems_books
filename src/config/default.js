module.exports = {
  port: process.env.PORT,
  defaultLocale: 'ru',
  app: {
    htmlAttributes: { lang: 'ru' },
    title: 'Книжная библиотека',
    titleTemplate: 'Книжная библиотека - %s',
    meta: [
      {
        name: 'Описание',
        content: 'Хранение твоих любимых книг в одном месте.',
      },
    ],
  },
};
