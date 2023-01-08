import React from 'react';
import ReactDOM from 'react-dom/client';
// const heading1 = React.createElement('h1', { key: 'key' }, 'This is Heading1');

// console.log(heading1);

// const heading2 = React.createElement('h2', { key: 'key1' }, 'This is Heading2');

// const heading3 = (
//   <h3 id="test" key="sample1">
//     this H3 tag
//   </h3>
// );

// const container = React.createElement('div', { id: 'div1', key: 'value1' }, [
//   heading1,
//   heading2,
//   heading3,
// ]);

const heading1 = <h1>This is Heading1</h1>;
const Heading2 = () => <h2>This is heading2</h2>;
const Container = () => {
  return (
    <div>
      {heading1}
      <Heading2 />
      {Heading2()}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

//async defer
root.render(<Container />);
