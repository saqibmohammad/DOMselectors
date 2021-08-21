

//getelementbyid
let heading2 = document.getElementById("id1");
console.log(heading2);

//getelementsbytagname
let tagname = document.getElementsByTagName("p");
for ( i=0; i<tagname.length; i++){
    console.log(tagname[i]);
}

//getelementsbyclassname
let classname = document.getElementsByClassName("para");
for ( i=0; i<classname.length; i++){
    console.log(classname[i]);
}

//getelementbyqueryselector

let queryselector = document.querySelector("h2");
console.log(queryselector);

//getelementsbyqueryselectorall

let queryselectorall = document.querySelectorAll("h2");
for(i=0; i<queryselectorall.length; i++){
    console.log(queryselectorall[i]);
}


//ADDING 21AUG


//1. children (array of elements)

let parentdiv = document.getElementById("parent1");
console.log(parentdiv.children);

// 2. childNodes (array of all the nodes - text + elements)

let parentdiv = document.getElementById("parent1");
console.log(parentdiv.childNodes);

//  3. firstChild (first text node of that element)

let parentdiv = document.getElementById("parent1");
console.log(parentdiv.firstChild);

//  4. lastChild (last text node of that element)

let parentdiv = document.getElementById("parent1");
console.log(parentdiv.lastChild);

//  5. firstElementChild (first element )

let parentdiv = document.getElementById("parent1");
console.log(parentdiv.firstElementChild);

// 6. lastElementChild (last element)

let parentdiv = document.getElementById("parent1");
console.log(parentdiv.lastElementChild);

// 7. previousSibling - (previous sibling text node)

let headingnav = document.getElementById("heading4");
console.log(headingnav.previousSibling);

//  8. nextSibling - (next sibling text node)

let headingnav = document.getElementById("heading4");
console.log(headingnav.nextSibling);

//  9. previousElementSibling (previous sibling element)

let headingnav = document.getElementById("heading4");
console.log(headingnav.previousElementSibling);

//  10. nextElementSibling (next sibling element)

let headingnav = document.getElementById("heading4");
console.log(headingnav.nextElementSibling);

//  11. parentElemen

let headingnav = document.getElementById("heading4");
console.log(headingnav.parentElement);

