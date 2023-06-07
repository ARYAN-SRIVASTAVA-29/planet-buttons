const planets = [
    {
     name: "Mercury",
      details: "Mercury is the closest planet to the Sun and is also the smallest planet in our solar system.",
      pageURL: "mercury.html",
      backgroundImage: "img/solar-flare-sun-eruption-energy-39561.jpeg"
    },
    {
      name: "Venus",
      details: "Venus is the second planet from the Sun and is known for its thick atmosphere and greenhouse effect.",
      pageURL: "venus.html",
      backgroundImage: "img/venus.jpg"
    },
    {
      name: "Earth",
      details: "Earth is the third planet from the Sun and is the only known planet to support life.",
      pageURL: "earth.html",
      backgroundImage: "img/earth.jpg"
    },
    {
      name: "Mars",
      details: "Earth is the third planet from the Sun and is the only known planet to support life.",
      pageURL: "earth.html",
      backgroundImage: "img/mars.jpg"
    },
    {
      name: "Jupiter",
      details: "Earth is the third planet from the Sun and is the only known planet to support life.",
      pageURL: "earth.html",
      backgroundImage: "img/jupiter.jpg"
    },
    {
      name: "Saturn",
      details: "Earth is the third planet from the Sun and is the only known planet to support life.",
      pageURL: "earth.html",
      backgroundImage: "img/saturn.jpg"
    },
    {
      name: "Uranus",
      details: "Earth is the third planet from the Sun and is the only known planet to support life.",
      pageURL: "earth.html",
      backgroundImage: "img/uranus.jpg"
    }
  ];

  const planetButton = document.getElementById('planetButton');
  const planetContainer = document.getElementById('planetContainer');
  const planetDetailsContainer = document.getElementById('planetDetailsContainer');
  const planetTitle = document.getElementById('planetTitle');
  const planetDescription = document.getElementById('planetDescription');

// Hide planet button and show planet name buttons
function showPlanetButtons() {
planetButton.style.display = 'none';

planets.forEach(function(planet) {
  const planetNameButton = document.createElement('button');
  planetNameButton.classList.add('planet-button');
  planetNameButton.textContent = planet.name;
  planetNameButton.style.backgroundImage = `url(${planet.backgroundImage})`;
  planetNameButton.addEventListener('click', function() {
    openPlanetDetails(planet);
  });
  planetContainer.appendChild(planetNameButton);
});
}

// Open planet details
// Open planet details
function openPlanetDetails(planet) {
planetTitle.textContent = planet.name;
planetDetailsContainer.classList.add('show-details');
document.body.style.overflow = 'hidden';

// Load content from HTML file
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    planetDescription.innerHTML = xhr.responseText;
  }
};
xhr.open('GET', planet.pageURL, true);
xhr.send();
}


// Close planet details
function closePlanetDetails() {
planetDetailsContainer.classList.remove('show-details');
document.body.style.overflow = 'auto';
}