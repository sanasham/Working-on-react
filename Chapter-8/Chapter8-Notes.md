Class Components:
=================

when we want to write any javascript class, we have to start with class keyword

--> functional componet is aultimatly it is an javascript function
---> similarly class component also one of the javascript class function

writing class component in react is 

class Profile extends React.componet {

}

Note: Mandatory method in class based components is Render method, that returns JSX

Note: we can pass props to functional componets, we can use them in Props.name
      we can pass props to Class componets, we can use them in this.props.name
      Renring terminalogy comes from class based components as functional component don't have render method.
      here whatever props we pass to component it attach to this keyword inside class components
class has a constror method
constructor takes props, and it is the place to initialise the variables 
whenever load a class, constructor called.

first constructor called then render method would called in the class based components

functional components -- first render the component with initial values then update the component.
bast place to call API calls in useEffect as it render first with initial values then update the component with API response

class based components: contructor -> render -> componentDidMount()
                      : best place to make API calls is  componentDidMount()
		      : 

Sequence of execution: parent constructor -> parent render -> child constructor -> child render -> child componentDidMount -> parent componentDidMount
if we have multiple components have inside parenet  -> parent constructor -> parent render -> child1 constructor -> child1 render -> child2 constructor -> child2 render ->child1 componentDidMount ->->child2 componentDidMount -> parent componentDidMount

url : https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

render phase --> 1) constructor
		2) render method

commit phase -- > react actually update the DOM

render phase is fast then commit phase as it update the DOM

render pahse like  parent constructor -> parent render -> child1 constructor -> child1 render -> child2 constructor -> child2 render

commit phase like child1 componentDidMount ->->child2 componentDidMount -> parent componentDidMount

Note: we can make componentDidMount method as async   ----> async componentDidMount(){ }
	but we can not make useEffect as async 

Note: if we make child componentDidMount method as async to make API call
it execute like below
parent constructor -> parent render -> child1 constructor -> child1 render -> parent componentDidMount ---> child componentDidMount( as it is async method it wait in call back que) --> child render (as it is updates state with data)

updating Phase:
--------------
if componentDidMount completes updating phase will start
i.e parent componentDidUpdate()   --- after this render method calls again

when componentWillUnmount will call?
when we redirecting on one page from another page componentWillUnmount calls

what is the use of componentWillUnmount ?
cleanup.   what is cleanup?

we need to clear when we move one page to another page

if we have setInterval in componentDidMount , we can clear this using clearInterval()


we can unmount in functional component using useEffect return function






