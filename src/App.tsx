import * as React from "react";
import { useState } from "react";
import styled from "styled-components"
import Fade from "./styles/Fade";

const Button = styled.button`
  display: block;
  margin: 10px auto;
`

const App = () => {
    const [show,setShow] = useState(true)
    
    const click = () => setShow(show ? false : true)
    return(
      <div>
        <Button onClick={click}>
          Click to {show ? "Hide" : "Show"}
        </Button>
        <Fade unmountOnExit in={show} timeout={1000}>
          Hello World
        </Fade>
      </div>
    )
  }


export default App
