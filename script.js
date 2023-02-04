let container = document.getElementById('container');
let count = 75;

for(var i = 0; i<count; i++){
    let leftSnow = Math.floor(Math.random() * container.clientWidth + 5);
    let topSnow = Math.floor(Math.random() * container.clientHeight + 5);
    let widthSnow = Math.floor((Math.random() * 30) + 10);
    let timeSnow = Math.floor((Math.random() * 30) + 15);
    let blurSnow = Math.floor((Math.random() * 3) - 1);

    console.log(leftSnow);

    let div = document.createElement('div');
    div.classList.add('snow');
    div.style.left = leftSnow + 'px';
    div.style.top = topSnow + 'px';
    div.style.width = widthSnow + 'px';
    div.style.height = widthSnow + 'px';
    div.style.animationDuration = timeSnow + 's';
    div.style.filter = "blur(" + blurSnow + "px)";
    container.appendChild(div);
}