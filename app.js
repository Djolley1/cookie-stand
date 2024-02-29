 
let salesData = document.getElementById("sales-data")
let hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"]
let totalsPerHour = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let totalSales = 0;
const allCookieStands = []
// Constructor function for salmon cookie stand
function CookieStand(name, minCustomers, maxCustomers, avgSale) {
    this.name = name;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgSale = avgSale;
    this.CookiesSoldEachHour = [];
    this.dailyStoreTotal = 0;
}

let seattleStore = new CookieStand("Seattle", 23, 65, 6.3)
let tokyoStore = new CookieStand("Tokyo", 3, 24, 1.2)
let dubaiStore = new CookieStand("dubai", 11, 38, 3.7)
let parisStore = new CookieStand("Paris", 20, 38, 2.3)
let limaStore = new CookieStand("Lima", 2, 16, 4.6)
allCookieStands.push(seattleStore, tokyoStore, dubaiStore, parisStore, limaStore);
console.log(allCookieStands)


// Method to simulate cookies purchased
CookieStand.prototype.simulateCookiesPurchased =function()
{
   
    for (let i = 0; i < hours.length; i++) {
        let customer = getRandomNumberBetween(this.minCustomers, this.maxCustomers);
        let cookiesSold = Math.round(customer * this.avgSale);
        this.CookiesSoldEachHour.push(cookiesSold);
        this.dailyStoreTotal += cookiesSold;
        totalSales += cookiesSold;
    };
} 

function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

seattleStore.simulateCookiesPurchased()
tokyoStore.simulateCookiesPurchased()
dubaiStore.simulateCookiesPurchased()
parisStore.simulateCookiesPurchased()
limaStore.simulateCookiesPurchased()


    

function render() {
    // Create the header row
    let headerRow = document.createElement("tr");
    let headerCell = document.createElement("th");
    headerCell.textContent = "City";
    headerRow.appendChild(headerCell);
    for (let i = 0; i < hours.length; i++) {
        headerCell = document.createElement("th");
        headerCell.textContent = hours[i];
        headerRow.appendChild(headerCell);
    }

    headerCell = document.createElement("th");
    headerCell.textContent = "Daily Total";
    headerRow.appendChild(headerCell);

    salesData.appendChild(headerRow);

    // Create rows for each store
    // renderStoreRow(seattleStore, salesData);
    // renderStoreRow(tokyoStore, salesData);
    // renderStoreRow(dubaiStore, salesData);
    // renderStoreRow(parisStore, salesData);
    // renderStoreRow(limaStore, salesData);

    // Append the table to the salesData element
}

CookieStand.prototype.renderStoreRow = function() {
    let row = document.createElement("tr");
    let cell = document.createElement("td");
    cell.textContent = this.name;
    row.appendChild(cell);
    for (let i = 0; i < hours.length; i++) {
        //console.log(hours)
        cell = document.createElement("td");
        cell.textContent = this.CookiesSoldEachHour[i];
        row.appendChild(cell);
        totalsPerHour[i] += this.CookiesSoldEachHour[i]
        console.log(totalsPerHour[i])
        console.log(this.CookiesSoldEachHour[i])
    }

    cell = document.createElement("td");
    cell.textContent = this.dailyStoreTotal;
    row.appendChild(cell);

    salesData.appendChild(row);
}

// Call the render function to display the table
render()
seattleStore.renderStoreRow();
tokyoStore.renderStoreRow();
dubaiStore.renderStoreRow();
parisStore.renderStoreRow();
limaStore.renderStoreRow();


function createTableFooter() {
    let footer = document.getElementById("sales-data");
    let row = document.createElement("tr");
    footer.appendChild(row);

    let totalLabel = document.createElement("td");
    totalLabel.textContent = "Hours Total";
    row.appendChild(totalLabel);

    for(let i=0; i<totalsPerHour.length; i++) {
        console.log(totalsPerHour)
        let td = document.createElement("td");
        td.textContent = totalsPerHour[i];
        row.appendChild(td);
        totalSales += totalsPerHour[i]
    }
    let mainTotal = document.createElement("td");
    mainTotal.textContent = `${totalSales}`;
    row.appendChild(mainTotal);
    
}

function start() {
    console.log("Starting Footer");
}

createTableFooter()





// Display results for each location
// displayCookiesPerHour(seattle);
// displayCookiesPerHour(tokyo);
// displayCookiesPerHour(dubai);
// displayCookiesPerHour(paris);
// displayCookiesPerHour(lima);


// Call the function to display city information list
// displayCityInfoList();

// function displayCityInfo(location) {
//     let container = document.createElement('div');
//     let title = document.createElement('h2');
//     title.textContent = `${location.name}`;
//     container.appendChild(title);

//     let list = document.createElement('ul');
//     let hoursItem = document.createElement('li');
//     let contactInfoItem = document.createElement('li');
//     let locationItem = document.createElement('li');
//     let totalCookiesItem = document.createElement('li');

//     hoursItem.textContent = `Hours open: ${location.hours}`;
//     contactInfoItem.textContent = `Contact info: Phone - ${location.phone}`;
//     locationItem.textContent = `Location: ${location.location}`;
//     totalCookiesItem.textContent = `Total cookies: ${location.totalCookies}`;

//     list.appendChild(hoursItem);
//     list.appendChild(contactInfoItem);
//     list.appendChild(locationItem);
//     list.appendChild(totalCookiesItem)

//     container.appendChild(list);
//     document.body.appendChild(container);
// }
