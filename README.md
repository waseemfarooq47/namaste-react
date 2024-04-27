## Salaaam ReactJS

## concepts we learn
React Notes


1. CDN What is CDN
2. What is crossorigin
3. 


L1.  	
	//here we call core react to create element
	const heading=React.createElement("h1",{},"Hello from React!") 

	// here we call react DOM to manipulate with created element
        const root = ReactDOM.createRoot(document.getElementById("root")) 

	// rendering the created element
        root.render(heading) 


	>> Main funda of react that come into place is Dom nodes manipulation which was very costly React give concept to manipulate elements with the help of Javascript



NPM

package.json file is a configuration for npm. It keeps a track what version of package is installed in the system. if ^ carat it means install upgrade version if there is minor change in version  and ~tidel means top version. [^ caret checks minor changes in verson].  [~ tilder checks major changes]	package.lock.json file keeps the track of exact version of all the dependencies.
we need package.json because it takes care of all registry their version and other aspects.	
bundlers: bundles your app properly for production because we need our whole code to be clean, neat before it cabe send for production. Some bundlers  like [ Webpack ,Parcel , VEET ] 
	
>>> gitIgnore ignores files that we mention we put node modules in it.
>>>>> Why we need to put both files on git because I can recreate node modules with these package.json and package.lock.json

There are 2 types types of packages
1. Dev dependency : it means it is generally req for development phase
2. Normal dependency: it is used in production also

Node Modules are collection of dependencies.

Transitive Dependency : means dependency is depend on another dependency . Another dependency is depend on other dependencies and go on dependency tree. 
E.g, parcel >> another dependency >> depends on another dependency >> and so on dependency tree.
