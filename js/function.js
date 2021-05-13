const valor = [
  document.getElementById('btn1'),
  document.getElementById('resp'),
  parseFloat(document.getElementById('val1').value),
  parseFloat(document.getElementById('val2').value),
  parseFloat(document.getElementById('val3').value),
  parseFloat(document.getElementById('val4').value)
];

const sumTotal = (va1, va2, va3, va4) => {
    let ret;

    if (isNaN(va3) && isNaN(va4)){
      ret = va1 + va2;
    } else if (isNaN(va4)){
      ret = va1 + va2 + va3;
    } else {
      ret = va1 + va2 + va3 + va4;
    }
    console.log(ret + " é soma total das notas.");
    return  ret;
}

const Media = (va1,va2) => {
  return va1 / va2;
}

valor[0].addEventListener('click', function(e){
  e.preventDefault()
  const v1 = parseFloat(document.getElementById('val1').value);
  const v2 = parseFloat(document.getElementById('val2').value);
  const v3 = parseFloat(document.getElementById('val3').value);
  const v4 = parseFloat(document.getElementById('val4').value);

  const resul = Media(sumTotal(v1,v2,v3,v4),quanNotas())
  console.log(resul  + " é a media das notas.");
  return valor[1].innerHTML = resul;
});

const quanNotas = () => {

  const v3 = valor[4];
  const v4 = valor[5];

  let ret;

  if (isNaN(v3) && isNaN(v4)){
    ret = 2;
  } else if (isNaN(v4)){
    ret = 3;
  } else {
    ret = 4;
  }
  console.log(ret + " por prova aplicada.");
  return  ret;

} 






















// for (let index = 0; index < 10; index++) {
//   console.log(index);
  
// }

// var po = 0
// while (po < 10) {
//   po++;
//   console.log(po)
// }

// var obj = {a:1, b:2, c:3};

// //Para prop (propriedade) in obj (objeto) faça
// for (var prop in obj) {
//   // ctrl+shift+k (para abrir o console no mozilla firefox)
//   console.log("obj." + prop + " = " + obj[prop]);
// }