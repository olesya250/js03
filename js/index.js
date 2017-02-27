
function fib(n){
	if (n==1||n==2) return 1;
	else return fib(n-1)+fib(n-2);		
	}
	var userNum=+prompt('Введіть порядковий номер числа Фібоначчі');
alert(fib(userNum));
   
   function fib1(n) {
  var a = 1,
    b = 1;
  for (var i = 3; i <= n; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
  return b;
}
 var userNum1=+prompt('Введіть порядковий номер числа  Фібоначчі');
alert(fib1(userNum1));