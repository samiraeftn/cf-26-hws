let count=2;
function handleSubmit() {
  let userfirstname = document.querySelector("#user-firstname");
  let userlastname = document.querySelector("#user-lastname");
  let userdate = document.querySelector("#user-date");

  let tr = document.createElement("tr");
  //todo find better way to add multiple classes: 
  tr.classList.add(
    "border-b",
    "border-gray-600",
    "odd:bg-gray-800",
    "even:bg-gray-700"
  );
  //tr.classList.add("border-gray-600");
  //tr.classList.add("odd:bg-gray-800");
  //tr.classList.add("even:bg-gray-700");

  let td1 = document.createElement("td");
  td1.textContent = count++;
  td1.classList.add("px-6", "py-4","font-medium","text-white");
  let tdFirstName = document.createElement("td");
  tdFirstName.textContent = userfirstname.value;
  tdFirstName.classList.add("px-6", "py-4");
  let tdLastName = document.createElement("td");
  tdLastName.textContent = userlastname.value;
  tdLastName.classList.add("px-6", "py-4");
  let tdDate = document.createElement("td");
  ln=userdate.value
  if (ln.length!==8){
    alert("Enter date in 8 digit!")
  } else{
    ln=ln.slice(0,4)+"-"+ln.slice(4,6)+"-"+ln.slice(6,8)
    tdDate.textContent = ln;
  }
   tdDate.classList.add("px-6", "py-4");

  let td2 = document.createElement("td");
 

  tr.appendChild(td1);
  tr.appendChild(tdFirstName);
  tr.appendChild(tdLastName);
  tr.appendChild(tdDate);
  tr.appendChild(td2);

  document.querySelector("#users").appendChild(tr);
  //clear input data
  userfirstname.value="";
  userlastname.value="";
  userdate.value="";

  

}

let btn = document.querySelector("#submit-btn");
btn.addEventListener("click",handleSubmit);
btn.addEventListener()