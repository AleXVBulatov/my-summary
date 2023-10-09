const photoRef = document.querySelector(".sidebar__photo img");
const contactsRef = document.querySelector(".contacts__list");
const aboutMeSectionRef = document.querySelector(".info__about-me");
const sideBarPhotoRef = document.querySelector(".sidebar__photo");

contactsRef.addEventListener("mouseenter", () => {
  photoRef.src = "img/my_photo_phone.jpg";
});

contactsRef.addEventListener("mouseleave", () => {
  photoRef.src = "img/my_photo_thinking.jpg";
});

aboutMeSectionRef.addEventListener("mouseenter", () => {
  photoRef.src = "img/my_photo.jpg";
});

sideBarPhotoRef.addEventListener("mouseenter", () => {
  photoRef.src = "img/my_photo.jpg";
});
