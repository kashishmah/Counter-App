const numberEl = document.getElementById("number");
const decBtn = document.getElementById("decBtn");

function animate(className){
    numberEl.classList.remove("increase","decrease","animate");
    void numberEl.offsetWidth;
    numberEl.classList.add(className,"animate");
}

function updateDecrementButton(value){
    decBtn.disabled = value === 0;
}

function increment(){
    let value = Number(numberEl.innerHTML) + 1;
    numberEl.innerHTML = value;
    animate("increase");
    updateDecrementButton(value);
}

function decrement(){
    let value = Number(numberEl.innerHTML);
    if(value > 0){
        value--;
        numberEl.innerHTML = value;
        animate("decrease");
    }
    updateDecrementButton(value);
}

function reset(){
    numberEl.innerHTML = 0;
    numberEl.classList.remove("increase","decrease");
    updateDecrementButton(0);
}

/* Dark Mode */
function toggleDarkMode(){
    document.body.classList.toggle("dark-mode");
}

/* Keyboard Controls */
document.addEventListener("keydown", function(e){
    if(e.key === "ArrowUp") increment();
    if(e.key === "ArrowDown") decrement();
    if(e.key === "r" || e.key === "R") reset();
});

/* Initial state */
updateDecrementButton(0);
