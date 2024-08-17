//your JS code here. If required.
var res = [];
for(let i=1;i<=100;i++){
	if(i%5 === 0 && i%3 === 0){
		res.push("FizzBuzz")
	}
	else if(i%3 === 0 && i%5 !== 0){
		res.push("Fizz");
	}else if(i%5 === 0 && i%3 !== 0){
		res.push("Buzz");
	}else{
		res.push(i);
	}
}

for(let i=0;i<=res.length-1;i++){
	alert(res[i]+"\n");
}