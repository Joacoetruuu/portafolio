import { Box, Text } from "@chakra-ui/react";
import "./App.css";
import { SiRedux, SiChakraui, SiExpress, SiReact, SiJavascript } from "react-icons/si";
import {
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiNodejsSmall,
  DiPython,
} from "react-icons/di";
import {IoEyeSharp} from "react-icons/io5";
import Proyectos from "./Proyectos";

function App() {
  return (
    <>
    <div class="container">
      <div class="gradient">
        <div className="title">
          <div>
            <Text
              bgClip="text"
              fontSize="6xl"
              fontWeight="extrabold"
              color="white"
            >
              Hola👋! Soy Joaquín
            </Text>
            <Text
              bgGradient="linear(to-l, #0da2e5, #036ca4)"
              bgClip="text"
              fontSize="6xl"
              fontWeight="extrabold"
            >
              Front End Developer
            </Text>

            <div className="tecnology">
              <p>
                <DiHtml5 style={{paddingLeft:"1px"}}/>  <p className="textP" style={{paddingRight:"5px"}}>HTML</p> <DiCss3 style={{paddingLeft:"1px"}}/> <p className="textP" style={{paddingRight:"5px"}}>CSS</p> <SiJavascript style={{paddingLeft:"1px"}}/> <p className="textP" style={{paddingRight:"5px", paddingLeft:"2px"}}>Javascript</p> <SiReact style={{paddingLeft:"1px"}}/> <p className="textP" style={{paddingRight:"5px"}}>React</p>  <SiRedux style={{paddingLeft:"1px"}}/> <p className="textP" style={{paddingRight:"5px"}}>Redux</p> <DiPython style={{paddingLeft:"1px"}}/> <p className="textP" style={{paddingRight:"5px"}}>Python</p> <DiNodejsSmall style={{paddingLeft:"1px"}}/> <p style={{paddingRight:"5px"}} className="textP">Node</p> 
              </p>
            </div>

            <div className="buttonContact">
              <a href="#contacto">
              <button class="button-63" role="button">Contacto</button>
              </a>
              
              <a href="https://drive.google.com/file/d/19esPFbVs7KoORYLhnAKHCrpQLE0QxGAz/view?usp=drivesdk" target="_blank">
                <button class="button-64" role="button"><span class="text">Ver CV</span></button>
              </a>

            </div>

          </div>

          
        </div>


        
      </div>  

      
      
    </div>
    <Proyectos/>
    </>
  );
}

export default App;
