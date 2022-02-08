import React from "react";
function Contacts(){
    return(
        <div className="contacts" id="contact">
            <h2>Contact.</h2>
            <div className="hr"></div>
                <p>Do you want to style you home? Fill out the form and fill me in whith the decals :) We love meeting new people!</p>
                <form>
                    <p className="name_input">Name</p>
                    <input type="text" name="" className="input"/>
                    <p className="name_input">Email</p>
                    <input type="Email" name="" className="input"/>
                    <p className="name_input">Message</p>
                    <input type="text" name="" className="input"/>
                    <input className="button_2" type="submit" value="Send Message"/>
                </form>
        </div>
    )
}

export default Contacts;