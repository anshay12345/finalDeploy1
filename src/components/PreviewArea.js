import React from "react";
import CatSprite from "./CatSprite";

const PreviewArea=React.forwardRef((props,ref) =>{
  //console.log(ref)
  return (
    <div className="flex-none h-full overflow-y p-8 ">
      <CatSprite ref={ref}/>
    </div>
  );
})
export default PreviewArea