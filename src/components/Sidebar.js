import React, { createRef } from "react";
import Icon from "./Icon";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./CSS/movements.module.css"
import CatSprite from "./CatSprite";
import myMove from "./CatSprite.js"
import App from "../App";
 const Sidebar = () => {
  //console.log(myMove)
  //console.log(document.getElementById(ref))
  // const carRef=createRef()
  // const catId=CatSprite().props.id
  // const cat=document.getElementById(catId)
  console.log(CatSprite())
  // console.log(catId)
  const dispatch=useDispatch()
  //FOR ROTATION of +15deg
  const[degreeMoved, setDegreeMoved]=useState(15)
  const onCssChangeHandler=()=>{
    setDegreeMoved(degreeMoved+15)
    setAntiDegreeMoved(degreeMoved+15)
    document.documentElement.style.setProperty('--rotateValue', degreeMoved+"deg");
  }

  //---------------

  //FOR ROTATION OF -15DEG
  const[antiDegreeMoved, setAntiDegreeMoved]=useState(-15)
  const onAntiDegreeMovedHandler=()=>{
    setAntiDegreeMoved(antiDegreeMoved-15)
    setDegreeMoved(antiDegreeMoved-15)
    document.documentElement.style.setProperty('--rotateValue', antiDegreeMoved+"deg");
 
  }

  //FOR MOVING FARWARD 10 STEPS
  const[stepsMoved, setStepsMoved]=useState(1)
  const[stepMovedY, setStepMovedY]=useState(0)
  
  const onMove10StepsHandler=()=>{
    setStepsMoved(stepsMoved+1)
    console.log("value of stepmoved in original", stepsMoved)
    document.documentElement.style.setProperty('--moveFarwardValue', (stepsMoved)*10+"px");
    document.documentElement.style.setProperty('--moveFarwardXValue', stepMovedY+"px");

  }




const[xv,setXv]=useState(" ")
const[yv,setYv]=useState(" ")
const onXValueHandler=(event)=>{
  event.preventDefault()
  const xValue1=event.target.value
  setXv(xValue1);
  console.log(event.target.value)
  console.log(xv)
}
const onYValueHandler=(event)=>{
  event.preventDefault()
  setYv(event.target.value);
  console.log(yv)
}

const onSendToCoordinateHandler=(event)=>{
  event.preventDefault()
  const x=document.getElementById("pinx").value
  const y=document.getElementById("piny").value
  setStepsMoved(x/10)
  setStepMovedY(y)
  document.documentElement.style.setProperty('--moveFarwardValue', x+"px");
  document.documentElement.style.setProperty('--moveFarwardXValue', y+"px");
}



const onHelloTimeSubmitHandler=(event)=>{
  event.preventDefault()
  const tme=document.getElementById("timeHello").value
  dispatch({type:"hello", value:true})
  dispatch({type:"hmm", value: false})
  document.documentElement.style.setProperty('--visibilityValue', "visible");
  setTimeout(function() {
  document.documentElement.style.setProperty('--visibilityValue', "hidden");
  }, tme*1000);
}
 const onHelloSubmitHandler=(event)=>{
  event.preventDefault()
  dispatch({type:"hello", value:true})
  dispatch({type:"hmm", value: false})
  document.documentElement.style.setProperty('--visibilityValue', "visible");
 }

 const onHmmTimeSubmitHandler=(event)=>{
  event.preventDefault()
  const tme=document.getElementById("timeHmm").value
  dispatch({type:"hello", value:false})
  dispatch({type:"hmm", value: true})
  document.documentElement.style.setProperty('--visibilityValue', "visible");
  setTimeout(function() {
  document.documentElement.style.setProperty('--visibilityValue', "hidden");
  }, tme*1000);
 }

const onHmmSubmitHandler=(event)=>{
  event.preventDefault()
  dispatch({type:"hello", value:false})
  dispatch({type:"hmm", value: true})
  document.documentElement.style.setProperty('--visibilityValue', "visible");
}

const onSizeChangeHandler=(event)=>{
  event.preventDefault()
  const oasize=document.getElementById("sizehw").value
  const toBeSendSize=parseFloat(oasize)+(95.17898101806641);
  console.log(toBeSendSize)
  document.documentElement.style.setProperty('--newIncreasedSize', toBeSendSize+"px");

}

const onSizePercentageChangeHandler=(event)=>{
  event.preventDefault();
  const sizeValue=document.getElementById("sizehwInPercent").value
  const changesSize=(95.17898101806641) + parseFloat(sizeValue)/100*(95.17898101806641);
  console.log(changesSize)
  document.documentElement.style.setProperty('--newIncreasedSize', changesSize+"px");
}

const onTailColorChangeHandler=(event)=>{
  event.preventDefault()
  const tailColor=document.getElementById("tailColor").value
  document.documentElement.style.setProperty('--tailColor', tailColor);
}


const onTailTipColorChangeHandler=(event)=>{
  event.preventDefault()
  const tailtipcolor=document.getElementById("tailTipColor").value
  document.documentElement.style.setProperty('--tailTipColor', tailtipcolor);

}

const [glideTime,setGlideTime] = useState(0)
const onGlideTime=(event)=>{
event.preventDefault()
var t=document.getElementById("glideTime").value
setGlideTime(t)
}
const onGlideSubmit=(event)=>{
  event.preventDefault()


  const max=10
  const min=1
  const slideToX=Math.floor(Math.random()*(max-min+1))+min
  const slideToY=Math.floor(Math.random()*(max-min+1))+min
 
  console.log(slideToX," ", slideToY)
  document.documentElement.style.setProperty('--glideVariableX', slideToX*25+"px");
  document.documentElement.style.setProperty('--glideVariableY', slideToY*25+"px");
 


}

  return (
  
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200" id="contentContainer">
     
      <div className="font-bold"> {"Events"} </div>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer" >
        {"When "}
        <Icon name="flag" size={15} className="text-green-600 mx-2" />
        {"clicked"}
      </div>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"When this sprite clicked"}
      </div>
      <div className="font-bold"> {"Motion"} </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer" onClick={onMove10StepsHandler}>
        {"Move 10 steps"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer" onClick={onAntiDegreeMovedHandler}>
        {"Turn "}
        <Icon name="undo" size={15} className="text-white mx-2" />
        {"15 degrees"}
      </div>

      
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer" onClick={onCssChangeHandler}>
        {"Turn "}
        <Icon name="redo" size={15} className="text-white mx-2" />
        {"15 degrees"}
      </div>

      <div className="flex flex-row flex-wrap bg-blue-500 text-black px-2 py-1 my-2 text-sm cursor-pointer" >
        {"Custom value for degree coordinate "}
        <form onSubmit={event=>{
          event.preventDefault()
          const degreeMoved=document.getElementById("degreeMoved").value
          document.documentElement.style.setProperty('--rotateValue', degreeMoved+"deg");

        }}>
        <label for="fname">Degree:</label>
          <input type="text" size="1" id="degreeMoved" onChange={onXValueHandler}></input>
          
          <button className={classes.button}>Click</button>
        </form>
     
      </div>
   
      <div className="flex flex-row flex-wrap bg-red-500 text-black px-2 py-1 my-2 text-sm cursor-pointer">
        {"Go to custom"}
        {/* <Icon name="redo" size={15} className="text-white mx-2" /> */}
        <form onSubmit={onSendToCoordinateHandler}>
        <label for="fname">X:</label>
          <input type="text" size="1" id="pinx" onChange={onXValueHandler}></input>
          <label for="fname">Y:</label>
          <input type="text" size="1" id="piny" onChange={onYValueHandler}></input>
          <button className={classes.button}>Click</button>
        </form>
      </div>
  
          



      <div className="flex flex-row flex-wrap bg-red-500 text-black px-2 py-1 my-2 text-sm cursor-pointer">
        {"Drop to Random place"}
        {/* <Icon name="redo" size={15} className="text-white mx-2" /> */}
        <form onSubmit={(event)=>{
           event.preventDefault();
           const max=10
           const min=1
           const glideToX=Math.floor(Math.random()*(max-min+1))+min
           const glideToY=Math.floor(Math.random()*(max-min+1))+min
           console.log(glideToX," ", glideToY)
           document.documentElement.style.setProperty('--moveFarwardValue', glideToX*25+"px");
           document.documentElement.style.setProperty('--moveFarwardXValue', glideToY*25+"px");
        }}>
        
          <button className={classes.button}>Click</button>
        </form>
      </div>


      <div className="flex flex-row flex-wrap bg-red-500 text-black px-2 py-1 my-2 text-sm cursor-pointer">
        {"Glide to Random place"}
        
        <form onSubmit={(event)=>{
           event.preventDefault();
           const max=10
           const min=1
           const slideToX=Math.floor(Math.random()*(max-min+1))+min
           const slideToY=Math.floor(Math.random()*(max-min+1))+min
          
           console.log(slideToX," ", slideToY)
           document.documentElement.style.setProperty('--glideVariableX', slideToX*25+"px");
           document.documentElement.style.setProperty('--glideVariableY', slideToY*25+"px"); 
        }}>
          
          <button className={classes.button} onClick={onGlideSubmit}>Click</button>
        </form>
      </div>

      <div className="flex flex-row flex-wrap bg-red-500 text-black px-2 py-1 my-2 text-sm cursor-pointer">
        {"Glide to"}
        <form onSubmit={(event)=>{
           event.preventDefault();
           
           const slideToX=document.getElementById("glideX").value
           const slideToY=document.getElementById("glideX").value
          
           console.log(slideToX," ", slideToY)
           document.documentElement.style.setProperty('--glideVariableX', slideToX+"px");
           document.documentElement.style.setProperty('--glideVariableY', slideToY+"px"); 
        }}>
          <label for="fname">X:</label>
          <input type="text" size="1" id="glideX" ></input>
          <label for="fname">Y:</label>
          <input type="text" size="1" id="glideY" ></input>
          <button className={classes.button}>Click</button>
          
        </form>
      </div>

{/* 
      function myMove() {
  let id = null;
  const elem = document.getElementById("animate");   
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
} */}


      


      <div className="font-bold"> {"Looks"} </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-black px-2 py-1 my-2 text-sm cursor-pointer">
        {"Say `Hello` for "}&nbsp; 
        <form onSubmit={onHelloTimeSubmitHandler}>
          <input type="text" size="1" id="timeHello"></input>
          <label for="fname">seconds</label>
          <button className={classes.button}>Click</button>
        </form>
      </div>


      <div className="flex flex-row flex-wrap bg-blue-500 text-black px-2 py-1 my-2 text-sm cursor-pointer" onClick={onHelloSubmitHandler}>
        {"Say Hello "}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-black px-2 py-1 my-2 text-sm cursor-pointer">
        {"Think Hmm for "}&nbsp; 
        <form onSubmit={onHmmTimeSubmitHandler}>
          <input type="text" size="1" id="timeHmm"></input>
          <label for="fname">seconds</label>
          <button className={classes.button}>Click</button>
        </form>
      </div>

      <div className="flex flex-row flex-wrap bg-blue-500 text-black px-2 py-1 my-2 text-sm cursor-pointer" onClick={onHmmSubmitHandler}>
        {"Think Hmm "}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-black px-2 py-1 my-2 text-sm cursor-pointer">
        {"Change size by "}
        <form onSubmit={onSizeChangeHandler}>
          <input type="text" size="1" id="sizehw"></input>
          <button className={classes.button}>Click</button>
        </form>
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-black px-2 py-1 my-2 text-sm cursor-pointer">
        {"Set size to "}
        <form onSubmit={onSizePercentageChangeHandler}>
          <input type="text" size="1" id="sizehwInPercent"></input>
          <label for="fname">%</label>
          <button className={classes.button}>Click</button>
        </form>
      </div>

      <div className="font-bold"> {"Color"} </div>

      <div className="flex flex-row flex-wrap bg-blue-500 text-black px-2 py-1 my-2 text-sm cursor-pointer">
        {"Change tail color to "}
        <form onSubmit={onTailColorChangeHandler}>
          <input type="text" size="1" id="tailColor"></input>
          <button className={classes.button}>Click</button>
        </form>
      </div>
 
      <div className="flex flex-row flex-wrap bg-blue-500 text-black px-2 py-1 my-2 text-sm cursor-pointer">
        {"Change tail tip color to "}
        <form onSubmit={onTailTipColorChangeHandler}>
          <input type="text" size="1" id="tailTipColor"></input>
          <button className={classes.button}>Click</button>
        </form>
      </div>

      <div className="flex flex-row flex-wrap bg-blue-500 text-black px-2 py-1 my-2 text-sm cursor-pointer">
        {"Change back leg color to "}
        <form onSubmit={(event)=>{
          event.preventDefault();
          const legcolor=document.getElementById("legColor").value;
          document.documentElement.style.setProperty('--legColor', legcolor);
        }}>
          <input type="text" size="1" id="legColor"></input>
          <button className={classes.button}>Click</button>
        </form>
      </div>

      <div className="flex flex-row flex-wrap bg-blue-500 text-black px-2 py-1 my-2 text-sm cursor-pointer">
        {"Change arm color to "}
        <form onSubmit={(event)=>{
          event.preventDefault();
          const armcolor=document.getElementById("armColor").value;
          document.documentElement.style.setProperty('--armColor', armcolor);
        }}>
          <input type="text" size="1" id="armColor"></input>
          <button className={classes.button}>Click</button>
        </form>
      </div>

      <div className="flex flex-row flex-wrap bg-blue-500 text-black px-2 py-1 my-2 text-sm cursor-pointer">
        {"Change body color to "}
        <form onSubmit={(event)=>{
          event.preventDefault();
          const bodycolor=document.getElementById("bodyColor").value;
          document.documentElement.style.setProperty('--bodyAndBackLegColor', bodycolor);
        }}>
          <input type="text" size="1" id="bodyColor"></input>
          <button className={classes.button}>Click</button>
        </form>
      </div>

      <div className="flex flex-row flex-wrap bg-blue-500 text-black px-2 py-1 my-2 text-sm cursor-pointer">
        {"Change stomach color to "}
        <form onSubmit={(event)=>{
          event.preventDefault();
          const stomachcolor=document.getElementById("stomachColor").value;
          document.documentElement.style.setProperty('--stomachColor', stomachcolor);
        }}>
          <input type="text" size="1" id="stomachColor"></input>
          <button className={classes.button}>Click</button>
        </form>
      </div>

      <div className="flex flex-row flex-wrap bg-blue-500 text-black px-2 py-1 my-2 text-sm cursor-pointer">
        {"Change mouth color to "}
        <form onSubmit={(event)=>{
          event.preventDefault();
          const mouthcolor=document.getElementById("mouthColor").value;
          document.documentElement.style.setProperty('--mouthColor', mouthcolor);
        }}>
          <input type="text" size="1" id="mouthColor"></input>
          <button className={classes.button}>Click</button>
        </form>
      </div>

      <div className="flex flex-row flex-wrap bg-blue-500 text-black px-2 py-1 my-2 text-sm cursor-pointer">
        {"Change teath color to "}
        <form onSubmit={(event)=>{
          event.preventDefault();
          const teathcolor=document.getElementById("teathColor").value;
          document.documentElement.style.setProperty('--teathColor', teathcolor);
        }}>
          <input type="text" size="1" id="teathColor"></input>
          <button className={classes.button}>Click</button>
        </form>
      </div>

      <div className="flex flex-row flex-wrap bg-blue-500 text-black px-2 py-1 my-2 text-sm cursor-pointer">
        {"Change pupil color to "}
        <form onSubmit={(event)=>{
          event.preventDefault();
          const pupilcolor=document.getElementById("pupilColor").value;
          document.documentElement.style.setProperty('--pupilColor', pupilcolor);
        }}>
          <input type="text" size="1" id="pupilColor"></input>
          <button className={classes.button}>Click</button>
        </form>
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-black px-2 py-1 my-2 text-sm cursor-pointer">
        {"Change nose color to "}
        <form onSubmit={(event)=>{
          event.preventDefault();
          const nosecolor=document.getElementById("noseColor").value;
          document.documentElement.style.setProperty('--noseColor', nosecolor);
        }}>
          <input type="text" size="1" id="noseColor"></input>
          <button className={classes.button}>Click</button>
        </form>
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-black px-2 py-1 my-2 text-sm cursor-pointer" onClick={()=>{
                  document.documentElement.style.setProperty('--catVisibility', "hidden");

      }}>
        {"Hide"}
      </div>

      <div className="flex flex-row flex-wrap bg-blue-500 text-black px-2 py-1 my-2 text-sm cursor-pointer" onClick={()=>{
                  document.documentElement.style.setProperty('--catVisibility', "visible");

      }}>
        {"Show"}
      </div>

    </div>
  );
}
export default Sidebar



