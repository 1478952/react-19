// import React, { useRef, forwardRef } from 'react';

// function TestRef() {
//   const buttonRef = useRef(null);

//   const onButtonClick = () => {
//     console.log(buttonRef.current);
//   };

//   return (
//     <Button ref={buttonRef} onClick={onButtonClick}>
//       Click
//     </Button>
//   );
// }

// const Button = forwardRef((props, ref) => {
//   return <button ref={ref} {...props} />;
// });

// export default TestRef;

import { useRef } from "react";

function Button({ ref, ...props }) {
  return <button ref={ref} {...props} />;
}

function TestRef() {
  const buttonRef = useRef(null);

  const onClick = () => {
    console.log(buttonRef.current);
  };

  return (
    <Button ref={buttonRef} onClick={onClick}>
      Click
    </Button>
  );
}

export default TestRef;
