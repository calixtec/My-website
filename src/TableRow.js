import React from "react";

export default function TableRow(props) {

  const id = props.id;
  const title = props.title;
  const grade = props.grade;  
  const took = props.took;
  const input = props.input;
 
  console.log("grade:", grade, "input:", input, "input:", title);

  return (
    
   <tr >

       <td className="text-center" >{id}</td>
      {!took || grade ==="" ? <td className="text-center  text-danger" >{title}</td> : <td className="text-center" >{title}</td>}
      
      <td className="text-center" >{grade}</td>
      
      {  took & grade !=="" ? <td className="text-center ">{"Yes"}</td>:  
      took & grade ==="" ?  <td className="text-danger text-center" >{"No"}</td>:
      <td className="text-danger text-center" >{"No"}</td>
      }
     
    
    </tr>
  );
  
}



 