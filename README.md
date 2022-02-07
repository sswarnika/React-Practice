React JS

Create an app with React

1. Open CMD from inside the folder.
2. Write command: 
    a. npx create-react-app my-app
    b. cd my-app
    c. npm start

Note: 
* The “my-app” is the folder name for your application.
* We use jsx (JavaScript Syntax Extension) in react js not html.
* To return anything, it should be wrapped into something. If you don’t want to wrap it with anything, you have to wrap it inside an    empty opening-closing tag. 
* Bootstrap scripts are included after body under index.html, and css are included inside the head of the index.html file.
* We should add a slash “/” at the end of those tags which don’t have a closing tag and we use className instead of class in jsx. For example: 
<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
* After you open your project in VS code, click on the javascript in the bottom-right of the screen, type react and enter, type javascript react and enter.

Make components

1. Create a folder inside src. For example: MyComponents
2. Create a js file inside MyComponents. For example: Header.js
3. Type rfc or rafc to enter reactFunctionalComponent or reactArrowFunctionalComponent respectively inside Header.js file.
4. Write code inside return().
5. Import the header codes inside App.js file like this: <Header/>
6. Add an Import Statement like this: import Header from "./MyComponents/Header";

Note:
* We need to install the “ES7+ React/Redux/React-Native snippets” extension from dsznajder to use “rfc” from step number 3.

To pass data from parent component to child component

1. Define an object inside the function name of the child component file. 
For example, “props” in Header.js, like this: export default function Header(props) {
2. Add data to pass on the parent component.
For example, “title="My Todos List" in App.js, like this: <Header title="My Todos List"/>
3. Now, wherever you want to show the data you just passed i.e. title, include “{props.title}”. 
For example, “<a className="navbar-brand" href="#">{props.title}</a>”

For booleans to pass

1. After defining the object, add data on the parent component like this: searchBar={true} OR, searchBar={false}
2. Wrap the code to be performed inside a curly bracket and add “props.searchBar?” before the code.
3. To add a code if the condition is false, add a column.

For Example:
{ props.searchBar?
<form className="d-flex">
<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
<button className="btn btn-outline-success" type="submit">Search</button>
</form>
:
“No search bar”
}

This will display a search bar if we put searchBar={true} and display the data “No search bar” if we put searchBar={false} in the parent component.

To declare data types to our props

1. Add an object inside a component.
For example, in Header Component, add:
Header.propTypes = {
    title: PropTypes.string
}
2. Import the object in the same component typing impt and enter.

Note:
* We need to install the “ES7+ React/Redux/React-Native snippets” extension from dsznajder to use “impt” from step number 2.

