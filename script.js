const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".intput-box");

function shownotes(){
notesContainer.innerHTML = localStorage.getItem("notes");
}
shownotes();

function updateStorage(params){
localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", ()=>{
let inputBox = document.createElement("P");
let img= document.createElement("img");
inputBox.className = "input-box";
inputBox.setAttribute("contenteditable", "true");
img.src = "img/delete.png";
notesContainer.appendChild(inputBox).appendChild(img);
}) 

notesContainer.addEventListener ("click",function(e){
if (e.target.tagName === "IMG"){
e.target.parentElement.remove();
updateStorage();
}
else if (e.target.tagName === "P"){
notes.document.querySelectorAll ===(".input-box");
notes.forEach(nt => {
 nt.onkeyup = function(){
updateStorage();
}
})
}
})
document.addEventListener("keydown",Event=>{
if(Event.key ==="Enter"){
document.execCommand("insertlineBreak");
Event.preventDefault();
}
})