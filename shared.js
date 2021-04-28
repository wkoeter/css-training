var modal = document.querySelector(".modal");
var backdrop = document.querySelector(".backdrop");
var toggleButton = document.querySelector(".toggle-button");
var selectPlanButton = document.querySelectorAll(".plan button");
var mobileNav = document.querySelector(".mobile-nav");
var modalButtons = document.querySelectorAll(".modal button");

var displayBlock = "block";
var displayNone = "none";

toggleButton.addEventListener("click", function() {
  open(backdrop);
  open(mobileNav);
});

selectPlanButton.forEach(b => {
  b.addEventListener("click", function() {
    showModal();
  });
});

modalButtons.forEach(modalButton => {
  modalButton.addEventListener("click", closeModal);
});

backdrop.addEventListener("click", function() {
  close(mobileNav);
  closeModal();
});

function closeModal() {
  if (modal) {
    close(modal);
  }
  close(backdrop);
}

function showModal() {
  open(modal);
  open(backdrop);
}

function open(item) {
  item.classList.add("open");
}

function close(item) {
  item.classList.remove("open");
}
