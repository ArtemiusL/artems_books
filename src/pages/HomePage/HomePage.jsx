import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import FormContaiter from './FormContainer';
import BookPage from './BookPage';

const HomePage = () => (
  <Fragment>
    <Helmet title="Home" />
    <FormContaiter />
    <BookPage />
  </Fragment>
);

export default HomePage;
