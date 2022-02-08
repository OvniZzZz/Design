import React from "react";
import kitchenconcrete from "./images/kitchenconcrete.jpg"
import atrium from "./images/atrium.jpg"
import livingroom from "./images/livingroom.jpg"
import bedroom from "./images/bedroom.jpg"
import diningroom from "./images/diningroom.jpg"
import livingroom2 from "./images/livingroom2.jpg"

function Showcase(){
    return(
        <div className="showcase" id="showcase">
                <h1>Interior Design</h1>
                <div>
                    <h2>Showcase.</h2>
                    <div className="hr"></div>
                    <div className="images">
                        <img src={kitchenconcrete} className="row_1" alt="картинка не грузиться"/>
                        <img src={atrium} className="row_1"  alt="картинка не грузиться"/>
                        <img src={livingroom} className="row_2"  alt="картинка не грузиться"/>
                        <img src={bedroom} className="row_2"  alt="картинка не грузиться"/> 
                        <img src={diningroom} className="row_3"  alt="картинка не грузиться"/>
                        <img src={livingroom2} className="row_3"  alt="картинка не грузиться"/>
                    </div>
                </div>
        </div>
        
    )
}


export default Showcase;