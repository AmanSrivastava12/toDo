let enterButton = document.getElementById("enterbtn");
let userinput = document.getElementById("userInput");
let ul = document.querySelector("ul");
let item = document.getElementsByTagName("li");
let len = document.querySelector(".charlen");

function inputLength() {
  return userinput.value.length;
}

function listLength() {
  return item.length;
}

userinput.addEventListener("input", () => {
  len.innerHTML = `${inputLength()} / 150`;
});

function createListElement() {
  var li = document.createElement("li");
  ul.appendChild(li);
  var p = document.createElement("p");
  p.appendChild(document.createTextNode(userinput.value));
  li.appendChild(p);
  userinput.value = "";
  len.innerHTML = `0 / 150`;
  var dBtn = document.createElement("button");
  dBtn.appendChild(document.createTextNode("X"));
  li.appendChild(dBtn);
  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });
  dBtn.addEventListener("click", () => {
    li.classList.add("delete");
  });
}

enterButton.addEventListener("click", () => {
  if (inputLength() > 0) {
    createListElement();
  } else {
    alert("Please enter some text first.");
  }
});
