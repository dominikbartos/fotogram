let popUpRef = document.getElementById('info_popUp');
let dialogImg = document.getElementById('dialog_img');
let images = ['./assets/images/img1.jpg',
    './assets/images/img2.jpg',
    './assets/images/img3.jpg',
    './assets/images/img4.jpg',
    './assets/images/img5.jpg',
    './assets/images/img6.jpg',
    './assets/images/img7.jpg',
    './assets/images/img8.jpg',
    './assets/images/img9.jpg',
    './assets/images/img10.jpg',
    './assets/images/img11.jpg',
    './assets/images/img12.jpg'];

function openDialog(x) {
    popUpRef.showModal();
    dialogImg.src = images[x];
}

function closeDialog() {
    popUpRef.close();
}