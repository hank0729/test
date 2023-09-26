var loadDataButton = document.getElementById("loadDataButton");
var dataTable = document.getElementById("data-table");

loadDataButton.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/data", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            dataTable.innerHTML = "";

            for (var i = 0; i < data.length; i++) {
                var row = document.createElement("tr");
                var timeCell = document.createElement("td");
                var locationCell = document.createElement("td");
                var dataCell = document.createElement("td");

                timeCell.textContent = data[i].time;
                locationCell.textContent = data[i].location;
                dataCell.textContent = data[i].data;

                row.appendChild(timeCell);
                row.appendChild(locationCell);
                row.appendChild(dataCell);

                dataTable.appendChild(row);
            }
        }
    };
    xhr.send();
});
