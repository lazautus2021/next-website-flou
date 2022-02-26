import Head from 'next/head';
import Script from 'next/script';
import NavBar from '@components/Navbar';
import Footer from '@components/Footer';
import React from 'react';

export default function Layout({ children }) {

  return (
    <>
        <div className="minHeight">
          <NavBar />
          {children}
        </div>
        <Footer />
    </>
  );
}