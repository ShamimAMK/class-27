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

const outer = document.querySelector(".outer");

outer.addEventListener("click", (Event) => {
  if (Event.target.classList.contains("inner_one")) {
    document.body.style.backgroundColor = "pink";
  }
  if (Event.target.classList.contains("inner_two")) {
    document.body.style.backgroundColor = "red";
  }
});
