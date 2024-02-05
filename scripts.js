function randomImage(src, width,height,alt){
var img = document.createElement("img");
  img.src = src;
  img.width = width;
  img.height = height;
  img.alt = alt;
  img.style.zIndex = 5;
  
  img.style.position = 'absolute';
  img.style.top = document.body.clientHeight * Math.random() + 'px';
  img.style.left = document.body.clientWidth * Math.random() + 'px';
  document.body.appendChild(img);
}

document.getElementById('no').addEventListener('click', () =>
  randomImage("http://placekitten.com/200/300", 200, 300, 'no')
);