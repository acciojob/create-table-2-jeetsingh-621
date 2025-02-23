function createTable() {
    // Get user input for rows and columns (Remove extra colon `:`)
    let rn = prompt("Input number of rows");
    let cn = prompt("Input number of columns");

    // Convert input to numbers
    rn = parseInt(rn);
    cn = parseInt(cn);

    // Validate input (must be positive numbers)
    if (isNaN(rn) || isNaN(cn) || rn <= 0 || cn <= 0) {
        alert("Please enter valid positive numbers for rows and columns.");
        return;
    }

    // Get the table element
    let table = document.getElementById("myTable");

    // Clear any existing table content
    table.innerHTML = "";

    // Create the table rows and columns
    for (let i = 0; i < rn; i++) {
        let row = table.insertRow(); // Create a new row
        for (let j = 0; j < cn; j++) {
            let cell = row.insertCell(); // Create a new cell
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}
