1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
= ById selects one element by its unique ID. ByClassName returns all elements with a class as. querySelector gives the first element which matches a CSS selector, while querySelectorAll gives all of the matches in a static list.
2. How do you **create and insert a new element into the DOM**?
= At first, create an element using document.createElement(), add text, then insert it with methods.
3. What is **Event Bubbling** and how does it work?
= when an event happens on a child, it triggers on its parent elements unless stopped.
4. What is **Event Delegation** in JavaScript? Why is it useful?
= Event delegation attaches one listener on a parent instead of many children and uses bubbling to handle events. its useful because it saves memory and works for new elements added later.
5. What is the difference between **preventDefault() and stopPropagation()** methods?
= preventDefault() stops the browsers default action like- form submit. stopPropagation() stops the event from moving up to parent elements.

