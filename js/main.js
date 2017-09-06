var firstNumber = document.getElementById('firstNumber');
var secondNumber = document.getElementById('secondNumber');
var operation = document.getElementById('operation');

var isBudiHandsome = true;
var isYantiBeautiful = false;

// true && true = true
// true && false = false
// false && false = false
// true || false = true
// false || true = true
// true || true = true
// false || false = false


function checkOperationAndExecute(){
  if(isBudiHandsome && isYantiBeautiful){
    console.log('yes both of them');
  }else if(isYantiBeautiful == false){
    console.log('gpp walaupun ga beautiful')
  }else{
    console.log('terserah');
  }
}

checkOperationAndExecute();
