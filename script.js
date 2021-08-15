

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
