import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import ContactMe from "./Components/ContactMe";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import MyProject from "./Components/MyProject";
import { AppContext } from "./Components/AppContextProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GetGreeting } from "./Utils/GetGreeting";
function App() {
 React.useEffect(()=>{  

 toast.info(GetGreeting,{position: "bottom-right",});
  
 },[])
  const { colorMode } = React.useContext(AppContext);
  return (
    <div style={colorMode} className={`bg-black`}>
      <Header />
      <Hero />
      <MyProject />
      <Skills />
      <ContactMe />
      <Footer />
    </div>
  );
}
export default App;
