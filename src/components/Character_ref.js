import React from "react";
class Character_ref extends React.Component{
    render(){
        return(
            <div>
                <h3><u>CHARACTER REFERENCES:</u></h3>
                
             <table> 
                <tr>
                    <td>Asst. Prof. Rochelle Lynn L. Lopez, MSCS</td>
                    <td style={{
                    paddingLeft: "20px" 
                        }}>Chair<br></br>
                        <center>University of Santo Tomas</center></td>
                    <td style={{
                    paddingLeft: "20px" 
                        }}>+63979654121</td>
                </tr>
                <tr>
                    <td>Asst. Prof. Mylene J. Domingo, MS</td>
                    <td style={{
                     paddingLeft: "20px" 
                        }}>Professor<br></br>
                        <center>University of Santo Tomas</center></td>
                    <td style={{
                    paddingLeft: "20px" 
                        }}>+63969672329</td>
                </tr>
            </table>

                    <pre style={{
                        fontSize: "15px",
                    }}>     I hereby confirm that the above information is true and correct to the best of my knowledge<br></br>
                     and belief.</pre> 
                    
                
            </div>
        )
    }
}
export default Character_ref;