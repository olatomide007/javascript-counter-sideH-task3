let decreaseBtn = document.getElementById("subt-butt");
let increaseBtn = document.getElementById("add-butt");
let counter = document.getElementById("count-number");
let count = 0;

decreaseBtn.addEventListener('click', ()=>{
    if(count > 0) {count--;
    counter.innerHTML = count;
    counterStyle();
    }
});

increaseBtn.addEventListener('click', ()=>{
    if(count < 50) {count++;
    counter.innerHTML = count;
    counterStyle();
    }
});

function counterStyle(){
     if(count > 0){
        counter.classList.add("positive");
    }

    else{
        counter.classList.remove("positive");

    }
}
