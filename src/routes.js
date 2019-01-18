import HomePage from '_pages/HomePage';
import NotFoundPage from '_pages/NotFoundPage';
import LocalizationPage from '_pages/LocalizationPage';
import BookCard from '_pages/BookCard';
import App from './app';


export default [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: HomePage,
      },
      {
        path: '/localization',
        component: LocalizationPage,
      },
      {
        path: '/Bookcard/:id',
        component: BookCard,
      },
      {
        component: NotFoundPage,
      },
    ],
  },
];
