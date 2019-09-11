
// YOUR CODE HERE!

// Set up variables
var button = d3.select("#filter-btn");
var inputElement = d3.select("#datetime");
var tbody = d3.select("tbody");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

var populate = (dataInput) => {

  dataInput.forEach(ufo_sightings => {
    var row = tbody.append("tr");
    columns.forEach(column => row.append("td").text(ufo_sightings[column])
    )
  });
}

//Populate table from data.js
populate(data);
   
// Filter by attribute
button.on("click", () => {
  d3.event.preventDefault();
  var inputDate = inputElement.property("value").trim();
  // Filter by date matching input value
  var filterDate = data.filter(data => data.datetime === inputDate);
  console.log(filterDate)
  

  // Show added sighting date to table
  tbody.html("");

  let response = {
     filterDate
  }

  if (response.filterDate.length !== 0) {
        populate(filterDate);
  }
    else if (response.filterDate.length !== 0){
        populate(filterDate);
  
    }
    else {
      tbody.append("tr").append("td").text("No results!"); 
    }

})  



