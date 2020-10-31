function myFunction(){
	document.getElementById('h2').style.color="red";
}

document.getElementById('summ').innerHTML=5+6;

function hello(){
	document.write(5+9);
}

function printIt(){
	print();
}

var x;
x=4;
x+=5;
document.getElementById('vari_content').innerHTML=x;

var txt1='Imran';
txt1 +='Hossain';
document.getElementById('vari_content').innerHTML= txt1;
// new
var x=5;
var z=Math.pow(x,2);
document.getElementById('incre').innerHTML= z;
//new
var x=5;
var y=7;
var z=5;
document.getElementById('incre').innerHTML=(x==y)+""+(x==z);
//new
function myFunction(p1,p2){
	return p1*p2;
}
document.getElementById('ex1').innerHTML=myFunction(5,3)
//new
var x=hey(5,6);
function hey(a,b){
	return a*b;
}

document.getElementById('ex2').innerHTML=x;

function toCelcius(toFarenhite){
	return (5/9)*(toFarenhite-32)
}

document.getElementById('ex3').innerHTML=toCelcius(77);
//new
var car={type:"volvo", 
	model:"400", 
	color:"white",
	weight:"3000kg", 
    fullName: function(){
     	return this.type+""+this.model;
    }
 };

document.getElementById('ex4').innerHTML=car.fullName();
//new
var str="There is a big fish that 'require' some help";
var fsb=str.indexOf("require");
document.getElementById('ex5').innerHTML=fsb;
// new
var x=3.638;
document.getElementById('ex6').innerHTML=
x.toExponential(2);
