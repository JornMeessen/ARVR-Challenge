
var item = document.getElementsByClassName('item');

var growspeed = 0.3;

function grow(){
	item.object3D.scale.x *= growspeed;
	item.object3D.scale.y *= growspeed;
	item.object3D.scale.z *= growspeed;
	//console.log(myOtherBox.object3D.scale);
}

function growleave(){
	item.object3D.scale.x -= growspeed;
	item.object3D.scale.y -= growspeed;
	item.object3D.scale.z -= growspeed;
}

item.addEventListener('mouseover', function(){
	grow();
	console.log('grew');
});


item.addEventListener('leave', function(){
	growleave();
	console.log('grow leave');
});
