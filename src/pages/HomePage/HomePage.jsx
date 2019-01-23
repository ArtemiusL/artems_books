import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import SearchContainer from './SearchContainer';
import FormContainer from './FormContainer';
import BooksContainer from './BooksContainer';

const HomePage = () => (
  <Fragment>
    <Helmet title="Home" />
    <FormContainer />
    <SearchContainer />
    <BooksContainer />
  </Fragment>
);

export default HomePage;
