import { ChakraProvider } from "@chakra-ui/react"; 
import Header from "./components/Header"; 
import Landing from "./components/Landing"; 
import Project from "./components/Project"; 
import Contact from "./components/Contact"; 
import Footer from "./components/Footer"; 
import Alert from "./components/Alert"; 
import { AlertProvider } from "./context/alertContext"; 

function App() { 
  return ( 
    <ChakraProvider> 
      <AlertProvider> 
        <main> 
          <Header /> 
          <Landing /> 
          <Project /> 
          <Contact /> 
          <Footer /> 
          <Alert /> 
        </main> 
      </AlertProvider> 
    </ChakraProvider> 
  ); 
} 

export default App;