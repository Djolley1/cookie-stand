// Call the function to display city information list
// displayCityInfoList();

// Constructor function for salmon cookie stand
function CityHours(city, minCustomers, maxCustomers, avgSale) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgSale = avgSale;
  this.CookiesSoldEachHour = [];
  this.dailyStoreTotal = 0;
}


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
