import React from 'react';
import TopBar from '../TopBar';
import Header from '../Header';
import Footer from '../Footer';
import SubHeader from '../SubHeader';

const Default = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Header />
      <SubHeader />
      <div className="flex-grow bg-bg">{children}</div> <Footer />
    </div>
  );
};

export default Default;
