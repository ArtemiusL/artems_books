import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import FormContaiter from './FormContainer';
import BooksContainer from './BooksContainer';

const HomePage = () => (
  <Fragment>
    <Helmet title="Home" />
    <FormContaiter />
    <BooksContainer />
  </Fragment>
);

export default HomePage;
