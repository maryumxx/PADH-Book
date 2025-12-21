import React from 'react';
import Layout from '@theme-original/Layout';
import Navbar from '@site/src/components/Navbar';

export default function LayoutWrapper(props) {
  return (
    <>
      <Navbar />
      <Layout {...props} />
    </>
  );
}
