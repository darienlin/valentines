function randomImage(src, width,height,alt){
var img = document.createElement("img");
  img.src = src;
  img.width = width;
  img.height = height;
  img.alt = alt;
  img.style.zIndex = 5;
  
  img.style.position = 'absolute';
  img.style.top = document.body.clientHeight * 3/4 + document.body.clientHeight/2  * Math.random() + 'px';
  img.style.left = document.body.clientWidth * Math.random() + 'px';
  document.body.appendChild(img);
}

document.getElementById('no').addEventListener('click', () =>
  randomImage(getRandomImageLink(), 150, 200, 'no')
);

function getRandomImageLink(){
    const pics = ["images/cutie.png", "images/erm.jpeg",'images/frat.jpeg','images/hello.jpeg','images/licky.jpeg','images/man.jpeg','images/scp.jpeg','images/scp2.jpeg']
    return pics[Math.floor(Math.random() * pics.length)]
}