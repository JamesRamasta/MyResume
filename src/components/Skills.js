import React from "react";
class Skills extends React.Component{
    render(){
        return(
            <div>
                <h3><u>SKILLS:</u></h3>
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
                <span class="iconify" data-icon="cib:mysql" data-width="35" data-height="35" style={{
                paddingLeft: "20px" 
                }}></span>
                <span class="iconify" data-icon="fa-brands:php" data-width="35" data-height="35" style={{
                paddingLeft: "20px" 
                }}></span>
                <span class="iconify" data-icon="la:js-square" data-width="35" data-height="35" style={{
                paddingLeft: "20px" 
                }}></span>
                <span class="iconify" data-icon="ri:reactjs-fill" data-width="35" data-height="35" style={{
                paddingLeft: "20px" 
                }}></span>



                <hr></hr>
            </div>
        )
    }
}
export default Skills;