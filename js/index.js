const photoRef = document.querySelector(".sidebar__photo img");
const contactsRef = document.querySelector(".contacts__list");

contactsRef.addEventListener("mouseenter", () => {
  photoRef.src = "img/my_photo_phone.jpg";
});

contactsRef.addEventListener("mouseleave", () => {
  photoRef.src = "img/my_photo.jpg";
});
