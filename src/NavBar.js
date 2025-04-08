import { forwardRef } from 'react';

const UserInput = forwardRef(({ value, onChange }, ref) => {
  return (
    <div className="bg-primary text-white text-center p-2 m-2">
     Blog  &nbsp; &nbsp; Mentorship  &nbsp; &nbsp; &nbsp;Contact me&nbsp;&nbsp;&nbsp;&nbsp;
      
    </div>
  );
});

export default UserInput;

