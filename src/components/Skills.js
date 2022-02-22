import React from "react";
import bal from './images/balsamiq.png';
class Skills extends React.Component{
    render(){
        return(
            <div>
                <h3><u>SKILLS:</u></h3>

                <h4><i>Programming Languages:</i></h4>
                <span class="iconify" data-icon="akar-icons:html-fill" data-width="35" data-height="35"></span>
                <span class="iconify" data-icon="akar-icons:css-fill" data-width="35" data-height="35" style={{
                paddingLeft: "20px" 
                }}></span>
                <span class="iconify" data-icon="cib:java" data-width="35" data-height="35" style={{
                paddingLeft: "20px" 
                }}></span>
                <span class="iconify" data-icon="teenyicons:python-outline" data-width="35" data-height="35" style={{
                paddingLeft: "20px" 
                }}></span>
                <span class="iconify" data-icon="la:js-square" data-width="35" data-height="35" style={{
                paddingLeft: "20px" 
                }}></span>
                <span class="iconify" data-icon="ri:reactjs-fill" data-width="35" data-height="35" style={{
                paddingLeft: "20px" 
                }}></span>
                <h4><i>Database:</i></h4>
                <span class="iconify" data-icon="cib:mysql" data-width="40" data-height="40" style={{
                paddingLeft: "20px" 
                }}></span>
                <span class="iconify" data-icon="fa-brands:php" data-width="40" data-height="40" style={{
                paddingLeft: "20px" 
                }}></span>
                <h4><i>IDE:</i></h4>
                <span class="iconify" data-icon="cib:visual-studio-code" data-width="35" data-height="35" style={{
                paddingLeft: "20px" 
                }}></span>
                <span class="iconify" data-icon="fontisto:visual-studio" data-width="35" data-height="35" style={{
                paddingLeft: "20px" 
                }}></span>
                <span class="iconify" data-icon="mdi:android-studio" data-width="35" data-height="35" style={{
                paddingLeft: "20px" 
                }}></span>
                <h4><i>UX/UI:</i></h4>
                <span class="iconify" data-icon="akar-icons:figma-fill" data-height="35" style={{
                paddingLeft: "20px" 
                }}></span>
                <img src = {bal} alt="balsamiq" align="" width="35" height="35"  style={{
                paddingLeft: "16px"}} />




                <hr></hr>
            </div>
        )
    }
}
export default Skills;