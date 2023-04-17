//positive convert

let x=[100,-4,6,-7,-9,15];
let y=[];
function pos(x,y){
for (i=0;i<x.length;i++){
	if (x[i]<0){
		y.push(Math.abs(x[i]));
	}
}
console.log(x);
console.log(y);
}
pos(x,y);