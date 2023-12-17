const btn = document.querySelector(".btn");

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
// });

const btnOpenModal = document.querySelector(".btn_open_modal");
const btnCloseModal = document.querySelector(".btn_close_modal");
const modal = document.querySelector(".modal");

const openModal = () => {
  modal.classList.remove("hidden");
};

const closeModal = () => {
  modal.classList.add("hidden");
};

btnOpenModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);
document.addEventListener("keydown", (Event) => {
  if (Event.key === "Escape") {
    closeModal();
  }
});
