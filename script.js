function volume_sphere(event) {
    //Write your code here
	event.preventDefault();
	let input1 = document.getElementById("radius");
	let volume = document.getElementById("volume");

	let r = parseInt(input1.value);

	if(isNaN(r) || r<0 ){
		volume.value =  "NaN";
		return;
	}

	let v = (4/3) * Math.PI * Math.pow(r, 3);
	volume.value = v.toFixed(4);
} 

document.getElementById('MyForm').addEventListener('submit', volume_sphere);

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
