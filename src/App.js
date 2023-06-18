import React from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import './index.css';


import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Skills from './components/Skills';
import HuggingFaceProject from './components/HuggingFaceProject';
import Projects from './components/Projects';



const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#ff0000',
    },
     background: {
      default: '#354f52', // the color you want
    },
  },
});




function App() {
  return (
    <ThemeProvider theme={theme}>
    <div>
      <Header />
       <About />
       <Skills />
       <Projects/>
       <HuggingFaceProject/>
      <Footer />
    </div>
    </ThemeProvider>
  );
}


export default App;
