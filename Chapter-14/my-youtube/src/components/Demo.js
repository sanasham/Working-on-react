import React, { useState, useMemo } from 'react';
import { findPrime } from './Helper/helper';

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDark, setIsDark] = useState(false);

  console.log('Rendering Demo...');
  const value = useMemo(findPrime(text), [text]);
  return (
    <>
      <div className="col-span-11 h-96 m-4 p-2 border border-black">
        <input
          className="border border-black-100 w-96 m-2 p-2 rounded-lg"
          type="number"
          name=""
          id=""
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        />
        <h1 className="font-bold p-4 ">nth Prime:{value}</h1>
      </div>
    </>
  );
};

export default Demo;
