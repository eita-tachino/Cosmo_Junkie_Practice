"use strict";

{
  const opens = document.querySelectorAll(".modal-open");
  const close = document.querySelector(".modal-close");
  const modal = document.querySelector(".modal");
  const mask = document.querySelector(".mask");

  opens.forEach((open) => {
    open.addEventListener("click", () => {
      //   alert("test");
      modal.classList.remove("hidden");
      mask.classList.remove("hidden");
    });
  });

  close.addEventListener("click", () => {
    modal.classList.add("hidden");
    mask.classList.add("hidden");
  });

  mask.addEventListener("click", () => {
    // modal.classList.add('hidden');
    // mask.classList.add('hidden');
    close.click();
  });
}
