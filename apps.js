"use strict";
// const btn = document.querySelector(".btn");

// btn.addEventListener("mouseover", () => {
//   console.log("Button Hovered!");
// });

// btn.addEventListener("mouseout", () => {
//   console.log("Button Unhovered");
// });

// const callbackFn = () => {
//   console.log("Triggered!");
// };

// btn.addEventListener("mouseover", callbackFn);
// btn.addEventListener("mousedown", callbackFn);
// document.addEventListener("keydown", () => {
//   console.log("Pressed");
// });
// document.addEventListener("keydown", (event) => {
//   console.log(event);
// // });

// const btnOpenModal = document.querySelector(".btn_open_modal");
// const btnCloseModal = document.querySelector(".btn_close_modal");
// const modal = document.querySelector(".modal");

// const openModal = () => {
//   modal.classList.remove("hidden");
// };

// const closeModal = () => {
//   modal.classList.add("hidden");
// };

// btnOpenModal.addEventListener("click", openModal);
// btnCloseModal.addEventListener("click", closeModal);
// document.addEventListener("keydown", (Event) => {
//   if (Event.key === "Escape") {
//     closeModal();
//   }
// });

// //outer/inner

// const outer = document.querySelector(".outer");
// const inner = document.querySelector(".inner");

// document.body.addEventListener("click", () => {
//   console.log(body);
// });

// outer.addEventListener("click", () => {
//   console.log("Outer div");
// });

// inner.addEventListener("click", () => {
//   console.log("Inner div");
// });

// // event bubbling\

// const outer = document.querySelector(".outer");

// outer.addEventListener("click", (event) => {
//   if (event.target.classList.contains("inner_one")) {
//     document.body.style.backgroundColor = "pink";
//   }
//   if (event.target.classList.contains("inner_two")) {
//     document.body.style.backgroundColor = "red";
//   }
//   if (event.target.classList.contains("inner_three")) {
//     document.body.style.backgroundColor = "purple";
//   }
// });

// const btnLight = document.querySelector(".light_theme");
// const btnDark = document.querySelector(".dark_theme");

// btnLight.addEventListener("click", () => {
//   document.body.style.backgroundColor = "white";
// });

// btnDark.addEventListener("click", () => {
//   document.body.style.backgroundColor = "black";
// });

// const theme = document.querySelector(".theme");

// theme.addEventListener("click", (event) => {
//   if (event.target.classList.contains("light_theme"))
//     document.body.style.backgroundColor = "white";
//   if (event.target.classList.contains("dark_theme"))
//     document.body.style.backgroundColor = "black";
// });

const todoInput = document.querySelector(".todo_input");
const addBtn = document.querySelector(".add_btn");
const todoList = document.querySelector(".todo_list");

const createNewTodo = (task) => {
  const li = document.createElement("li");
  li.textContent = task;

  li.addEventListener("click", function () {
    this.remove();
  });
  return li;
};

const addTodo = () => {
  const task = todoInput.value;

  if (task !== "") {
    const newTodo = createNewTodo(task);
    todoInput.value = "";
    todoList.appendChild(newTodo);
  } else {
    alert("Please enter a valid task!");
  }
};

addBtn.addEventListener("click", addTodo);
todoInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTodo();
  }
});
