const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

// Başlık satırı
const headerRow = document.createElement("tr");
const headerCell = document.createElement("th");
headerRow.appendChild(headerCell); // boş hücre
for (let i = 1; i <= 10; i++) {
  const headerCell = document.createElement("th");
  headerCell.textContent = i;
  headerRow.appendChild(headerCell);
}
thead.appendChild(headerRow);

// Tablo içeriği
for (let i = 1; i <= 10; i++) {
  const row = document.createElement("tr");
  const rowHeader = document.createElement("th");
  rowHeader.textContent = i;
  row.appendChild(rowHeader);
  for (let j = 1; j <= 10; j++) {
    const cell = document.createElement("td");
    cell.textContent = i * j;
    row.appendChild(cell);
  }
  tbody.appendChild(row);
}

table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table);
