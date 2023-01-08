something adding into Browser DOM  ---render

**if want to add react element into DOM using render method we have to use like below**

const heading1 = <h1>This is Heading1</h1>;
root.render(heading1);


**if want to add react element into DOM using render method we have to use like below**

const Container = () => {
  return (
    <div>
      {heading1}     ---------> this is adding jsx element inside component
      <Heading2 />   ---------> this is adding component inside component
      {Heading2()}   ----------> as component is function so we can call like this
    </div>
  );
};

root.render(<Container />);

================================================

JSX uses React.createElement behind the scene

JSX => React.createElement => object => HTML(DOM)

babel converts JSX to React.createElement


**Babel is a JavaScript compiler**
https://babeljs.io/  check here

**composing Component**

this is procedure like --> passing components inside of component


is functional component hoisted?
yes

