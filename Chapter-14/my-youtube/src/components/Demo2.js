import React from 'react';

const Demo2 = () => {
  let x = 10;
  console.log('Rendering Demo 2...');

  return (
    <>
      <div className="col-span-11 h-96 m-4 p-2 border border-black">
        <button
          className="mx-2 border border-black-500 h-10 px-4 bg-green-300 font-bold rounded-lg"
          onClick={() => (x = x + 1)}
        >
          increase x 😄
        </button>
        <h1 className="font-bold p-4 ">Let value:{x}</h1>
      </div>
    </>
  );
};

export default Demo2;
