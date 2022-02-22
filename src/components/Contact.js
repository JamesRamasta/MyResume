import React from "react";
import Img from './images/Me.jpg';

class Contact extends React.Component{
    render(){
        return (
            <div> 

                <img src = {Img} border-radius = "50%" alt="person" align="right" width="220" height="220" 
                style={{
                }}/>
                <br></br>
                <br></br>
                <br></br>
                <h2 style={{
                }}>JAMES ADRIAN NEPOMUCUENO RAMASTA</h2>
                <hr></hr>
                <span class="iconify" data-icon="bx:map" data-width="30" data-height="30"></span>
                <kbd> City of San Jose Del Monte, Bulacan</kbd>
                <br></br>
                <span class="iconify" data-icon="charm:mail" data-width="30" data-height="30"></span>
                <kbd> jamesadrianramasta@gmail.com</kbd>
                <br></br>
                <span class="iconify" data-icon="bi:telephone" data-width="30" data-height="30"></span>
                <kbd> +639756543221</kbd>
            

            

            </div>
        )
    }
}
export default Contact;