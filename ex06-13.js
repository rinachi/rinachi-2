function ChangeImageAndBack(){
  imgback();
  ThreeSecChange2();
}

function ThreeSecChange2(){
setTimeout("imgchange13()",3000);}

function imgchange13(){
  document.getElementById('logo3').src='./image/JU.jpg';
}

function imgback(){
  document.getElementById('logo3').src='./image/bulbon.jpg';
}