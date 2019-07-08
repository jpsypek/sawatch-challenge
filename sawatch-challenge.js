// Get data from API endpoint and invokes sortVehicles with the array of vehicle objects as an argument
getData = () => {
  return fetch('https://api.sawatchlabs.com/models/13/2017')
    .then(response => response.json())
    .then(models => sortVehicles(models.data))
    .catch(error => console.error(error))
}

// Take array of vehicle objects and sorts them by model, then appends a new row for each vehicle to the table
sortVehicles = (vehicles) => {
  const sortedVehicles = vehicles.sort(compareModels)
  sortedVehicles.forEach((vehicle) => appendVehicleRowToTable(vehicle))
}

// Compares vehicles by their model to be sorted appropriately
compareModels = (vehicleA, vehicleB) => {
  if (vehicleA.vehicle_model < vehicleB.vehicle_model)
     return -1
  if (vehicleA.vehicle_model > vehicleB.vehicle_model)
    return 1
  return 0
}

// Append a new row to the table for an instance of a vehicle
appendVehicleRowToTable = (vehicle) => {
  const vehicleTable = document.querySelector('.swt-table')
  const vehicleRow = vehicleTable.insertRow(-1)
  vehicleRow.innerHTML = `<td>${vehicle.vehicle_year}</td>
    <td>${vehicle.make}</td>
    <td>${vehicle.vehicle_model}</td>
    <td>${vehicle.displacement}</td>
    <td>${vehicle.cylinders}</td>
    <td>${vehicle.class}</td>`
}

getData()
