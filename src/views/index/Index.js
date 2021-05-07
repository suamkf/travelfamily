import React, { useState } from 'react';

import './style.css';
import Search from '../../components/Search';
import IndexInfo from '../../components/IndexInfo';
import Footer from '../../components/Footer';

const Index = () => {
  return (
    /* Background Image */
    <>
      <Search />
      <IndexInfo />
      <Footer />
    </>
  );
};

export default Index;
