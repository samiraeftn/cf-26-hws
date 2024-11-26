function renderlist(n){
    let result="";
    for(let i=1;i<=n;i++){
        result+=`<li class="list-disc text-2xl text-blue-600">${i}</li>`
    }
   const targetEl = document.querySelector("#list");
   targetEl.innerHTML = result;   

}
let number = document.querySelector("#number-li");



let btn = document.querySelector("#btn");
btn.addEventListener("click",renderlist(number));
