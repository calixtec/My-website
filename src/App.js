import TableRow from './Table';
import React from 'react'
import UserInput from './NavBar';
import { useRef, useState } from 'react';
import "./styles.css";

function App() {

  const inputRef = useRef(null);
  const [value, setValue] = useState('');

  var handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <>
      <UserInput ref={inputRef}
        onChange={handleChange}
        value={value} />
      <TableRow input={value} />
    </>

  );

}

export default App;