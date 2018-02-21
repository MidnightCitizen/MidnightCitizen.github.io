


var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 1500);
}

function showPage() {
  // loader for the particle effect in the background
  particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";


}
