const getBtn = document.querySelector("button");

getBtn.addEventListener("click", () => {
    document.body.removeEventListener("dbclick",func1);
});

document.body.addEventListener("click",function func1 () {
    document.body.style.backgroundColor = "crimson";
});
