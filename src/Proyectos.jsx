import React, { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import CardProyects from "./CardProyects";
import CardContact from "./CardContact";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";


function Proyectos() {
  const [showSecondDiv, setShowSecondDiv] = useState(false);

  const [variableProyecto, setVariableProyecto] = useState(0); 

  function handleScroll() {
    const scrollPosition =
      document.body.scrollTop || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    if (scrollPosition + windowHeight === document.body.scrollHeight) {
      setShowSecondDiv(true);
    } else {
      setShowSecondDiv(false);
    }
  }

  function agregarNumero(){
    if(variableProyecto < 3){
      setVariableProyecto(variableProyecto + 1)
      
    }
  }
  function restarNumero(){
    if(variableProyecto > 0){
      setVariableProyecto(variableProyecto -1)
      
    }
  }

  return (
    <>
      <div className="proyectos-div" style={{ height: "100vh", width: "99vw" }}>
        <div className="textProject">
          <Text
            bgClip="text"
            fontSize="5xl"
            fontWeight="extrabold"
            bgGradient="linear(to-l, #0da2e5, #036ca4)"
            style={{ display: "inline-block" }}
          >
            Proyectos
          </Text>
        </div>
        <div className="divAllProject">
          <CardProyects variable = {variableProyecto}/>
          <div className="btnProject">
            <button className="buttonProjectOption" id="buttonLow" onClick={e => {restarNumero()}}><AiOutlineArrowLeft/></button>
            
            <button className="buttonProjectOption" id="buttonHight" onClick={e => {agregarNumero()}}><AiOutlineArrowRight/></button>
          </div>
        </div>
      </div>

      <div
        className="contacto-div"
        id="contacto"
        style={{ height: "80vh", width: "99vw" }}
      >
        <div className="textProject">
          <Text
            bgClip="text"
            fontSize="5xl"
            fontWeight="extrabold"
            bgGradient="linear(to-l, #0da2e5, #036ca4)"
            style={{ display: "inline-block" }}
          >
            Contacto
          </Text>
        </div>
        <div className="divAllContacts">
          <CardContact />
        </div>
      </div>
    </>
  );
}

export default Proyectos;
