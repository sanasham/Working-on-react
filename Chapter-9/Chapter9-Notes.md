Chapter-9:
---------
optimization :  1) modularity   (we can export this, and import this wherever we want)
		2) readability
		3) reusable
		4) maintainability
		5) testable

Hooks are used to all above things

hooks are normal functions, we use hooks , export some logic into that function

generally , all helper functions and utilites and custom functions are named export

check are you online or not?

in dist folder we have one js file --that is bundle , it is created by parcel

chunking, code splittings, dynamic bundling, lazy loading, onDemandLoading --- all are same but developers are used these words

generally in large scale applications we can build different chunks or bundles based on the different services
example : make my trip, flight section we have , train section we have, cab sectioin we have like ....

Logical bundles of our app  ---- based on our services, we can split code 

never ever dynamicaly load your component inside another component

 const Instamart = lazy(() => import("./components/Instamart"));



