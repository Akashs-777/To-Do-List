const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const btn = document.querySelector("button");

btn.addEventListener("click", () =>{
    if(inputBox.value === ''){
        alert("U Must write Something");
    }else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        inputBox.value = "";
        SaveData();
        // checkDuplictae();
    }
})
// const checkDuplictae = ()=>{
// btn.addEventListener("click", ()=>{
//     if (inputBox.value === li){
//       alert("Duplicate Task Found")};
// })};

listContainer.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        SaveData();
    }else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        SaveData();
    }
},false);

const SaveData = () =>{
    localStorage.setItem("data",listContainer.innerHTML);
}

const getData = () =>{
    listContainer.innerHTML = localStorage.getItem("data");
}
getData();