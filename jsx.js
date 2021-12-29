// JSX stands for JavaScript XML, allows allows us to write HTML elements in JavaScript 
// and place them in the DOM without any createElement() and/or appendChild() methods
// JSX converts HTML tags into React elements

const myelement = <h1>I Love JSX!</h1>;

ReactDOM.render(myelement, document.getElementById('root'));

// Without JSX

const myelement = React.createElement('h1', {}, 'I do not use JSX!');

ReactDOM.render(myelement, document.getElementById('root'));