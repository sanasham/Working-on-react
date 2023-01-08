import React from 'react';
import ReactDOM from 'react-dom/client';
const heading1 = React.createElement('h1', { key: 'key' }, 'This is Heading1');

const heading2 = React.createElement('h2', { key: 'key1' }, 'This is Heading2');

const container = React.createElement('div', { id: 'div1', key: 'value1' }, [
  heading1,
  heading2,
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

//async defer
root.render(container);
