function initMap(myLatLng){
	
	// Create a map object and specify the DOM element for display.
	var map = new google.maps.Map(document.getElementById('map'), {
		center: myLatLng,
		scrollwheel: false,
		zoom: 8
	});
}

function setMarker(myLatLng){
	// Create a marker and set its position.
	var marker = new google.maps.Marker({
		map: map,
		position: myLatLng,
		title: 'Hello World!'
	});
}




 
document.getElementById("myForm").addEventListener("submit", function(event){
	event.preventDefault()
	saveContact();

});

function saveContact(){
	var Objcontact = {};
	Objcontact.username = document.getElementById("username").value;



if(localStorage.addressbook === undefined){
		var arrContacts = [Objcontact]
		localStorage.addressbook = JSON.stringify(arrContacts);
	} else {
		var arrContacts = JSON.parse(localStorage.addressbook)
		arrContacts.push(Objcontact);
		localStorage.addressbook = JSON.stringify(arrContacts);
	}

	drawCard(Objcontact);
}

function drawCard(person){
	newCard += person.username;
	document.getElementById("contacts").innerHTML += newCard;  
}

function loadContacts(){
	var arrContacts = JSON.parse(localStorage.addressbook)


	for (i=0; i < arrContacts.length; i++){
		drawCard(arrContacts[i])	
	}


}

loadContacts();






