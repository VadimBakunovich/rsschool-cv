const burgerIcon = document.querySelector('.burger__icon');
const burgerList = document.querySelector('.burger__list');
const main = document.querySelector('.main');

burgerIcon.onclick = () => {
  burgerIcon.classList.toggle('burger__icon--active');
  burgerList.classList.toggle('burger__list--active');
}

burgerList.onclick = () => {
  burgerIcon.classList.toggle('burger__icon--active');
  burgerList.classList.toggle('burger__list--active');
}

main.onclick = () => {
  if (burgerIcon.classList.contains('burger__icon--active')) {
    burgerIcon.classList.remove('burger__icon--active');
    burgerList.classList.remove('burger__list--active');
  }
}