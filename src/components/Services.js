import React from "react";
import team1 from "./images/team1.jpg"
import team2 from "./images/team2.jpg"
import team3 from "./images/team3.jpg"
function Services(){
    return(
        <div>
            <div className="services" id="services">
                <div>
                    <h2>Services.</h2>
                    <div className="hr"></div>
                    <p>tut tipa text</p>
                </div>
            </div>
            <div className="services" id="designers"> 
             <div>
             	<h2>Designers.</h2>
             	<div className="hr"></div>
             	<p>tut tipa text</p>
              	<span className="important">Our designers are trougtfully chosen:</span>
                  <br/>
              	<div className="services_2">
             	    <div>
                    	<img src={team2}/>
                        <img src={team1}/>
                        <img src={team3}/>
                      </div>
                     <div className="description">
                      	<p className="name">John Doe</p>
                      	<p className="profession">CEO And Founder</p>
                      	<p>Phassellus egen enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                     </div>
                     <div className="description">
                     	<p className="name">Jane Doe</p>
                      	<p className="profession">Designer</p>
                      	<p>Phassellus egen enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                     </div>
                     <div className="description">
                      	<p className="name">John Doe</p>
                     	<p className="profession">Architect</p>
                     	<p>Phassellus egen enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                     </div>
                  </div>
               </div>		
	        </div>
        </div>
    )
}

export default Services;