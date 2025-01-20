function volume_sphere() {
    //Write your code here
	let input1 = document.getElementById("radius");
	let volume = document.getElementById("volume");

	let r = parseInt(input1);

	if(isNaN(r) || radius<0 ){
		volume.value = "NaN";
		return;
	}

	const v = (4/3) * Math.pi * Math.pow(r, 3);
	volume.value = v.toFixed(4);
} 

let button = document.getElementById("submit");

button.addEventListener('click', volume_sphere);

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
