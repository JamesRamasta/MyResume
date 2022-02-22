import React from "react";
import Contact from "./Contact";
import Social from "./Social";
import OJT from "./OJT";
import Education from "./Education";
import Seminars from "./Seminars";
import Skills from "./Skills"; 
import Personal_info from "./Personal_info"; 
import Character_ref from "./Character_ref"; 




class App extends React.Component{
    render(){

        return(
            <div style={{
                backgroundColor:'White',
                padding: "180px",
                margin: "90px", 
                width: "60%",
                
              }}>
                <Contact />
                <Social />
                <OJT />
                <Education />
                <Seminars />
                <Skills />
                <Personal_info />
                <Character_ref />
                  
    
      </div>
        );
    }


}
export default App;