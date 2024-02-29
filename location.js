
function CookieLocation(city, hours, contact, location) {
  this.city = city;
  this.hours = hours;
  this.contact = contact;
  this.location = location;
}

// Create instances for each city
var seattle = new CookieLocation('Seattle', '6am - 7pm', '2901 3rd Ave #300, Seattle,WA 98121', [123-456-7890]);
var tokyo = new CookieLocation('Tokyo', '6am - 7pm', '1Chrome 1-2 Oshiage, Sumida City, Tokyo 131-8634', [222-222-2222]);
var dubai = new CookieLocation('Dubai', '6am - 7pm', '1 Sheikh Mohammadbin Rashid Blvd-Dubai', [333-333-3333]);
var paris = new CookieLocation('Paris', '6am - 7pm', 'Champ de Mars, 5 Avenue Anatole France, 75007 Paris', [444-444-4444]);
var lima = new CookieLocation('Lima', '6am - 7pm', 'Ca. Gral Borgono cuandra 8, Miraflores 15074', [555-555-5555]);

// Print locations on the page
function printLocations(locations) {
  var output = document.getElementById('output');
  locations.forEach(function (location) {
    var div = document.createElement('div');
    div.innerHTML = `<h3>${location.city}</h3>
                     <p>Hours: ${location.hours}</p>
                     <p>Contact: ${location.contact}</p>
                     <p>Location: ${location.location.join(', ')}</p>`;
    output.appendChild(div);
  });
}

// Array of locations
var locations = [seattle, tokyo, dubai, paris, lima];

// Call the printLocations function with the array
printLocations(locations);





















function displayCityInfo(location) {
  let container = document.createElement('div');
  let title = document.createElement('h2');
  title.textContent = `${location.name}`;
  container.appendChild(title);

  let list = document.createElement('ul');
  let hoursItem = document.createElement('li');
  let contactInfoItem = document.createElement('li');
  let locationItem = document.createElement('li');
  let totalCookiesItem = document.createElement('li');

  hoursItem.textContent = `Hours open: ${location.hours}`;
  contactInfoItem.textContent = `Contact info: Phone - ${location.phone}`;
  locationItem.textContent = `Location: ${location.location}`;
  totalCookiesItem.textContent = `Total cookies: ${location.totalCookies}`;

  list.appendChild(hoursItem);
  list.appendChild(contactInfoItem);
  list.appendChild(locationItem);
  list.appendChild(totalCookiesItem)

  container.appendChild(list);
  document.body.appendChild(container);
}
