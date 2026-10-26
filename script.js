let popUpRef = document.getElementById('info_popUp');
let dialogImg = document.getElementById('dialog_img');
let photoTitle = document.getElementById('title');
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

let imageNames = ['Alaska',
    'Tokyo',
    'Clouds',
    'Blue Tit',
    'Hurricane',
    'Canada Lake',
    'Duck',
    'Night View',
    'Snow Bunting',
    'Snow Leopard',
    'Top of the Mountain',
    'A Snow Tree'];
let photos = document.getElementsByClassName('photos');
let counterArray = ['1/12', '2/12', '3/12', '4/12', '5/12', '6/12', '7/12', '8/12', '9/12', '10/12', '11/12', '12/12'];
let counter = document.getElementById('counter');
let dialogIndex = '';

function openDialog(num) {
    event.stopPropagation();
    popUpRef.showModal();
    dialogImg.src = images[num];
    photoTitle.innerHTML = imageNames[num];
    counter.innerHTML = counterArray[num];
    dialogIndex = num;
    console.log(dialogIndex);
}


function closeDialog() {
    popUpRef.close();;
}

function nextImg() {
    if (dialogIndex >= (images.length - 1)) {
        dialogIndex -= 11;
        popUpRef.showModal();
        dialogImg.src = images[dialogIndex];
        photoTitle.innerHTML = imageNames[dialogIndex];
        counter.innerHTML = counterArray[dialogIndex];
        console.log(dialogIndex);
    } else {
        dialogIndex += 1;
        popUpRef.showModal();
        dialogImg.src = images[dialogIndex];
        photoTitle.innerHTML = imageNames[dialogIndex];
        counter.innerHTML = counterArray[dialogIndex];
        
        console.log(dialogIndex);
    }
    event.stopPropagation();
    
}
function lastImg() {
    if (dialogIndex == (images.length - 12)) {
        dialogIndex = 11;
        popUpRef.showModal();
        dialogImg.src = images[dialogIndex];
        photoTitle.innerHTML = imageNames[dialogIndex];
        counter.innerHTML = counterArray[dialogIndex];
        console.log(dialogIndex);
    } else {
        dialogIndex -= 1;
        popUpRef.showModal();
        dialogImg.src = images[dialogIndex];
        photoTitle.innerHTML = imageNames[dialogIndex];
        counter.innerHTML = counterArray[dialogIndex];
        console.log(dialogIndex);
    }
    
    event.stopPropagation();
}

function dialogClick (){
    event.stopPropagation();
}