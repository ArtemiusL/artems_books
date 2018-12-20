import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import Form from './Form';
import BookPage from './BookPage';

const HomePage = () => (
  <Fragment>
    <Helmet title="Home" />
    <Form />
    <BookPage />
  </Fragment>
);

export default HomePage;
