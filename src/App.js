
import React from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import ContactMe from './Components/ContactMe';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
import MyProject from './Components/MyProject';
import { AppContext } from './Components/AppContextProvider';

function App() {
  const { colorMode} = React.useContext(AppContext);
  return (
    <div style={colorMode} className='bg-black' >

      <Header/>
      <Hero/>
     <MyProject/>
      <Skills/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}
export default App;
