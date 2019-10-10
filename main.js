
// A function that takes in a node element and appends it to the `<ul>`.
function append(node){
    let node1 = document.querySelector("#ul");
    node1.appendChild(node);
}

// A function that takes in a node element and appends it to the `<div>` with the id "lorem".
function append1(node){
    let node1 = document.querySelector("#lorem");
    node1.appendChild(node);
}

// A function that takes in text and returns an `<li>` with that text as its `innerText`.
function append2(node){
    const node1 = document.querySelector("#ol");
    const li = document.createElement("li");
    node1.appendChild(li).innerText = node;
}

// A function that takes in an image element and a string and sets that image's source to be that string.
// function image(str){
//     const node = document.querySelector("#ol");
//     const imgElement = document.createElement('img');
//     return node.appendChild(imgElement).src = str;
// }

function image(str) {
    const imgElement = document.createElement('img');
    imgElement.src = str;
}

image('https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')

// A function that takes in two elements and sets the second element's class to the same class as the first.
function twoElements(element1, element2) {
    const el1 = document.querySelector(element1);
    const el2 = document.querySelector(element2);
    el2.className = el1.className;
}

// A function that takes in a tag name and an id, makes an element of that type with that id, and returns it.
function tagName(element, id) {
    let node = document.createElement(element);
    node.setAttribute(id, element);
}

// A function that takes in two strings, one representing a color and one representing an id, and sets the element from the dom that has that id to be the given color.
function color(str, id) {
    //str1 = color
    //str2 = id
    const color = document.style.color(str);
    const grabId = document.querySelector(id);
}

// Add three `<li>`s to the `<ul>` with whatever three pieces of text you want.
append2('whatever text I want');
append2('coding is fun');
append2('I just added another li to the ul');

// Add two images of your choice, with ids of your choice, to the div with the id "lorem".
append1(image('https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'))

// Set the second and third `<li>s` in the ordered list to the same class as the first.
//twoElements('numbered-item', )

// Change the color of the item with the id "heading" to light green.
color('light green', '#heading');