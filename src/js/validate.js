function validate(event) {

  var lat = document.getElementById('latitude').value;
  var lng = document.getElementById('longitude').value;
  var valid = true;

  var errLat = document.getElementById('errorLat');
  var errLng = document.getElementById('errorLng');

  if(valid === true){

    if(lat < -90 || lat > 90 || isNaN(lat)){
      valid = false;
      errLat.innerText = " must be a valid Latitude (-90 to 90)";
    }
    else{
      errLat.innerText = "";
    }

    if(lng < -180 || lng > 180 || isNaN(lng)){
      valid = false;
      errLng.innerText = " must be a valid Longitude (-180 to 180)";
    }
    else{
      errLng.innerText = "";
    }
  }
  if(valid === false){
    event.preventDefault();
  }
};

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
