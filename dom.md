## Read/Browser DOM

DOM stands for "Document Object Model". It represents the entire UI of the web application as a tree data structure.

In simpler terms, it is a structural representation of the HTML elements of the web application.

![DOM](/img/dom.jpeg "DOM")

Real/Browser DOM image

Whenever there is a change in the state of application UI, the DOM gets updated and represents that change. With every change, the DOM gets manipulated and re-rendered to update the application UI, which affects the performance and makes it slower.

Hence, with more UI components and complex structure of the DOM, the DOM updates will be more costly as with every change it needs to be re-rendered.

## React's Virtual DOM

To make the performance of the Real DOM better and faster, the concept of Virtual DOM arrives. The Virtual DOM is nothing but the virtual representation of the DOM.

But the key difference is, every time with every change , the virtual DOM gets updated instead of the real DOM.

Like, real DOM , virtual DOM is also represented as a tree structure. Each element is a node in this tree. When a new item is added to the application UI, a node is added to the tree as well. If the state of any of these elements changes, a new virtual DOM tree is created. The virtual DOM computes the best possible way or we can say the minimal operations on the real DOM to make changes to the real DOM. Thus, it makes efficient and better performance by reducing the cost and operations of re-rendering the whole real DOM.

Virtual DOM Image

Now that we have the basic understanding of Real and Virtual DOM, let's focus on how React works using the Virtual DOM.

🔸 In React, each UI is an individual component and each component has it's own state.
🔸 React follows the observable pattern and observes the changes of the states.
🔸 Whenever a change is made in the state of any component, React updates the virtual DOM tree but does not change the real DOM tree
🔸 After updating, React then compares the current version of the virtual DOM with the previous version.
🔸 React knows which objects are changed in the virtual DOM, based on that it only changes those objects in the Real DOM, making minimum manipulating operations.
🔸 This process is noted as "diffing". A picture below will clear the concept more.