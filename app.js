
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

    allCookieStands.push(this);
}

new CookieStand("Seattle", 23, 65, 6.3)
new CookieStand("Tokyo", 3, 24, 1.2)
new CookieStand("dubai", 11, 38, 3.7)
new CookieStand("Paris", 20, 38, 2.3)
new CookieStand("Lima", 2, 16, 4.6)
console.log(allCookieStands)


// Method to simulate cookies purchased
CookieStand.prototype.simulateCookiesPurchased = function () {

    for (let i = 0; i < hours.length; i++) {
        let customer = getRandomNumberBetween(this.minCustomers, this.maxCustomers);
        let cookiesSold = Math.round(customer * this.avgSale);
        this.CookiesSoldEachHour.push(cookiesSold);
        this.dailyStoreTotal += cookiesSold;
        totalSales += cookiesSold;
        console.log(totalSales);
    };
}

function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

for (let i = 0; i < allCookieStands.length; i++) {
    allCookieStands[i].simulateCookiesPurchased();
}

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

}

CookieStand.prototype.renderStoreRow = function () {
    let row = document.createElement("tr");
    let cell = document.createElement("td");
    cell.textContent = this.name;
    row.appendChild(cell);

    for (let i = 0; i < hours.length; i++) {
        cell = document.createElement("td");
        cell.textContent = this.CookiesSoldEachHour[i];
        row.appendChild(cell);
        totalsPerHour[i] += this.CookiesSoldEachHour[i]
    }

    cell = document.createElement("td");
    cell.textContent = this.dailyStoreTotal;
    row.appendChild(cell);

    salesData.appendChild(row);
}

// Call the render function to display the table
render()
for (let i = 0; i < allCookieStands.length; i++) {
    allCookieStands[i].renderStoreRow();
}


function createTableFooter() {
    let existingFooter = document.getElementById("footerRow");
    if (existingFooter) {
        existingFooter.remove();
    }
    let footer = document.getElementById("sales-data");
    let row = document.createElement("tr");
    row.id = "footerRow";
    footer.appendChild(row);

    let totalLabel = document.createElement("td");
    totalLabel.textContent = "Hours Total";
    row.appendChild(totalLabel);

    let newTotalSales = 0

    for (let i = 0; i < totalsPerHour.length; i++) {
        console.log(totalsPerHour)
        let td = document.createElement("td");
        td.textContent = totalsPerHour[i];
        row.appendChild(td);
        totalSales += totalsPerHour[i]
        newTotalSales += totalsPerHour[i];
    }
    let mainTotal = document.createElement("td");
    mainTotal.textContent = `${newTotalSales}`;
    row.appendChild(mainTotal);

    totalSales = newTotalSales;

}

createTableFooter()


function addNewStore() {
    // Get form values
    const newName = document.getElementById('newStoreName').value;
    const newMinCustomers = parseInt(document.getElementById('newMinCustomers').value);
    const newMaxCustomers = parseInt(document.getElementById('newMaxCustomers').value);
    const newAvgCookies = parseFloat(document.getElementById('newAvgCookies').value);

    // Create a new instance of a cookie stand
    const newStore = new CookieStand(newName, newMinCustomers, newMaxCustomers, newAvgCookies);

    // Simulate cookies purchased for the new store
    newStore.simulateCookiesPurchased();

    // Append the new store to the table
    newStore.renderStoreRow();

    // Update the table footer
    updateTableFooter();
    createTableFooter();
}

function updateTableFooter() {


    // Clear existing totals
    totalSales = 0;
    for (let i = 0; i < totalsPerHour.length; i++) {
        totalsPerHour[i] = 0;
    }

    // Recalculate totals
    for (let store of allCookieStands) {
        for (let i = 0; i < hours.length; i++) {
            totalsPerHour[i] += store.CookiesSoldEachHour[i];
        }
        totalSales += store.dailyStoreTotal;
    }

    // Update the table footer with the new totals
    // ...
}

