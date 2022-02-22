import React from "react";
class Social extends React.Component{
    render(){
        return(
            <div>
                <hr></hr>
                <h3><u>SOCIALS:</u></h3>
                <span class="iconify" data-icon="ant-design:facebook-outlined" data-width="35" data-height="35" style={{ 
                
                }}></span>                
                <kbd>James Ramasta</kbd>
                
                <span class="iconify" data-icon="akar-icons:instagram-fill" data-width="35" data-height="35" style={{ 
                paddingLeft: "50px"
                }}></span>
                <kbd>james_ramasta</kbd>
              
                <span class="iconify" data-icon="ant-design:linkedin-outlined" data-width="35" data-height="35" style={{ 
                paddingLeft: "50px"
                }}></span>
                <kbd>James Ramasta</kbd>
                <hr></hr>
                

            </div>
        )
    }
}
export default Social;