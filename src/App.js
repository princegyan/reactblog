import React from 'react';
import AppBar from './components/AppBar';
import FeatureArea from './components/FeatureArea';
import Album from './components/Album';
import Footer from './components/Footer';
import Head from './components/Head';
import ReadArea from './components/ReadArea';
function App() {
  return (
    <div className="App">
      <AppBar/>
      <Head/>
      <FeatureArea/>
      <Album/>
      <ReadArea/>
      <Footer/>
    </div>
  );
}

export default App;
