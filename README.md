## Salaaam ReactJS 🚀

## concepts we learn

React Notes

1. CDN What is CDN
2. What is crossorigin
3.

## working of DOM

    // here we call core react to create element
    const heading=React.createElement("h1",{},"Hello from React!")

    // here we call react DOM to manipulate with created element
        const root = ReactDOM.createRoot(document.getElementById("root"))

    // rendering the created element
        root.render(heading)


    >> Main funda of react that come into place is Dom nodes manipulation which was very costly React give concept to manipulate elements with the help of Javascript

## NPM (Node package manager popularly known: actually it manages node pakages but not confined to its node only its nore than that)

package.json file is a configuration for npm. It keeps a track what version of package is installed in the system. if ^ carat it means install upgrade version if there is minor change in version and ~tidel means top version. [^ caret checks minor changes in verson]. [~ tilder checks major changes] package.lock.json file keeps the track of exact version of all the dependencies.
we need package.json because it takes care of all registry their version and other aspects.
bundlers: bundles your app properly for production because we need our whole code to be clean, neat before it cabe send for production. Some bundlers like [ Webpack ,Parcel , VEET ]

## git Ignore and why we need to push in git package.json

> > > gitIgnore ignores files that we mention we put node modules in it.
> > > Why we need to put both files [packae.json and package.lock.json] on git because it can recreate node modules with these package.json and package.lock.json

## types of packages

There are 2 types types of packages

1. Dev dependency : it means it is generally req for development phase
2. Normal dependency: it is used in production also

## node modules

Node Modules are collection of dependencies.

## Transitive Dependency

Transitive Dependency : means dependency is depend on another dependencies which is also dependent on another dependencies or dependency and go on dependency tree.
E.g, parcel is dependent on other dependencies and other dependencies are depend on other dependencies on dependency tree.

## npm and npx

NPM is a package management that is used to install, uninstall, and update Javascript packages on your workstation, whereas
NPX is a package executer that is used to directly execute Javascript packages without installing them.

## Parcel

-Dev build
-Local server
-HMR : Hot Module Replacement
-File Watching Algorithm - written in C++
-Caching- Parcel builds
-Image optimization
-Minification
-Bundling
-Compressing
-Consistent Hashing
-Differrntial Bundling - to support older browsers
-Diagnostics
-Error Handling
-Https
-TreeShaking - remove unused code for you
-Different dev and prod bundles

> > in build removeworking

## Core React

react.createElement => reactElement (JS Object) => HTMLElement(render)

## JSX

it is not a html in JS or javascript where we write HTML rather It is html like syntax.
JSX is (transpiled) before it reaches to JS engine >> parcel does that by giving job to Babel(package) >> it converts it as JS engine understands it.

## Babel

Babel is javascript Compiler

## working JSX

JSX => react.createElement =>reactElement(JS Object) => HTMLElement(render)

## Components in React

-Class based component {old way to code}
-Functional component {new way to code} React Functional component is normal JS function which "returns" some JSX elements or react elements
-prevents crosssite scripting attacks. It snaitizes data. (takes care of mallicious data)

## config Driven UI

A config-driven UI, short for configuration-driven user interface, refers to a design approach where the user interface (UI) elements and behavior are primarily determined by configuration files rather than hardcoded into the application's codebase.

## Optional Chaining

In JavaScript, the optional chaining operator ?. is used to safely access nested properties or methods of an object. If any intermediate property or method in the chain is null or undefined, the expression short-circuits and returns undefined instead of throwing an error.

## 2 types of export

### Default Export / Import

- Default export ==> export default filename for default single export

### Named Export / Import

-we can write "export" before it

- Name export ==> export const URL_LINK =[] for multiple exports we use {}

## React Hooks

- Normal JS Utility Functions

## Mostly Common hooks

- useState -- super powerful react variables
- useEffect -- will be called after the componenet has been rendered. It has 3 cases:
# use state hook cases
- 1.if no dependency array => use effect is called on every render.
- 2.if with empty dpendency array[] => useEffect is called on initial render(just once).
- 2.if dependency array[values] => useEffect is called everytime when the value array[values] is changed.

## Shimmer UI

- fake page till api loads

## change in state

- Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
