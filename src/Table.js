import React, { Component } from "react";
import TableRow from "./TableRow";
export default class StudentTable extends Component {
  render() {
    const classes = [
      { id: 1, title: 'CSC141', grade: 'A', took: true },
      { id: 2, title: 'CSC240', grade: 'A', took: true },
      { id: 3, title: 'CSC142', grade: 'B', took: true },
      { id: 4, title: 'CSC241', grade: 'A', took: false },
      { id: 5, title: 'ESS101', grade: '', took: false },
      { id: 6, title: 'ENG368', grade: 'C', took: true },
      { id: 7, title: 'BIO110', grade: '', took: true }
    ]
    
    const rows = [];
    classes.forEach((c) => {
   
      if ("all" === this.props.input) {
        rows.push(
          <TableRow
            id={c.id}
            title={c.title}
            grade={c.grade}
            took={c.took}
            input={this.props.input} 
          />
        );
      }
      else if (c.grade === "") {
        rows.push(
         
        );
      }
     else if (c.grade === this.props.input) {
        rows.push(
          <TableRow
            id={c.id}
            title={c.title}
            grade={c.grade}
            took={c.took}
            input={this.props.input} 
          />
        );
      }
      
  

    });
    return (
      <div className="d-flex justify-content-center align-items-center mt-5 ">
        <table className="table table-sm w-50  table-bordered border-opacity-50 border-top-0 table-striped" style={{ maxWidth: "600px",borderTop: 'none' }} >
        <thead className="bg-info text-white text-center m-2 p-2 border-bottom border-dark  border-top-0 " style={{ borderTop: 'none' }}>

            <tr tr style={{ borderTop: 'none' , borderLeft: "none", borderRight: "none"  }}>
              <th>ID</th>
              <th>Title</th>
              <th>Grades</th>
              <th>Took?</th>
              
            </tr>
          </thead>
          <tbody >
            {/* <td className="text-center rotate-text border-danger border text" rowSpan='6' style={{ transform: 'rotate(270deg)' }}> */}
            

            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}