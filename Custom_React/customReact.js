function customRender(reactElement, container){
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)

/*
Explanation:
1. We define a function `customRender` that takes a `reactElement` and a `container` as arguments.
2. Inside the function, we create a DOM element using `document.createElement` based on the `type` of the `reactElement`.
3. We set the inner HTML of the DOM element to the `children` of the `reactElement`.
4. We loop through the properties of the `reactElement.props` and set them as attributes on the DOM element, skipping the `children` property.
5. Finally, we append the created DOM element to the specified container.

We then create a sample `reactElement` representing an anchor tag with some properties and call our `customRender` function to render it into the DOM.



This code takes a React-like element object and manually converts it into a real DOM element.

In short:
React element (JS object)
        ↓
customRender
        ↓
Real HTML element in the browser

🔹 PART 1: reactElement (FAKE REACT ELEMENT)

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

What this represents:
This is how React internally represents JSX.

Example JSX:
<a href="https://google.com" target="_blank">
  Click me to visit google
</a>
React converts JSX into an object very similar to this.

🔹 PART 2: customRender() FUNCTION

function customRender(reactElement, container) {

Purpose:
Convert a React-style object into a real DOM element and insert it into the page.

🔹 STEP 1: Create DOM element
const domElement = document.createElement(reactElement.type);
If:
reactElement.type === 'a'
Then:
domElement = document.createElement('a')

🔹 STEP 2: Add children (text)

domElement.innerHTML = reactElement.children;
This adds:
<a>Click me to visit google</a>
⚠️ Note:
	•	This works only for text children
	•	Real React supports nested elements too

🔹 STEP 3: Loop over props

for (const prop in reactElement.props) {
This loops through:
- href: 'https://google.com'
- target: '_blank'

Inside the loop:
if (prop === 'children') continue;
This skips the 'children' property since we already handled it.

Then we set attributes:
domElement.setAttribute(prop, reactElement.props[prop]);
This results in:
<a href="https://google.com" target="_blank">Click me to visit google</a>
✔️ Dynamic
✔️ Scalable
✔️ Cleaner than hardcoding

🔹 STEP 4: Insert into container
container.appendChild(domElement);
If:
container === #root


Final DOM:
<div id="root">
  <a href="https://google.com" target="_blank">
    Click me to visit google
  </a>
</div>



🔹 WHY THE COMMENTED CODE WAS IMPROVED
The commented code was a hardcoded version that only worked for a specific element (an anchor tag with specific props). It lacked flexibility and scalability.
The improved version uses a loop to handle any number of props dynamically, making it more versatile and closer to how React actually works under the hood.

*/