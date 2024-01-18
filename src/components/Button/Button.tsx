import React from "react";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <>
    <button onClick={() => {
      console.log("test");
    }}>a</button>
    <button onClick={() => console.log('Released semaphore')}>
      Release semaphore
    </button>
  </>;
};

export default Button;