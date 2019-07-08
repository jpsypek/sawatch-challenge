const vehicleTable = document.querySelector('.swt-table')

getData = () => {
  return fetch('https://api.sawatchlabs.com/models/13/2017')
    .then(response => response.json())
    .then(data => sortVehicles(data.data))
    .catch(error => console.error(error))
}

sortVehicles = (vehicles) => {
  const sortedVehicles = vehicles.sort(compareModels)
  sortedVehicles.forEach((vehicle) => appendTable(vehicle))
}

compareModels = (vehicleA, vehicleB) => {
  if (vehicleA.vehicle_model < vehicleB.vehicle_model)
     return -1
  if (vehicleA.vehicle_model > vehicleB.vehicle_model)
    return 1
  return 0
}

appendTable = (vehicle) => {
  const vehicleRow = vehicleTable.insertRow(-1)
  vehicleRow.innerHTML = `<td>${vehicle.vehicle_year}</td>
  <td>${vehicle.make}</td>
  <td>${vehicle.vehicle_model}</td>
  <td>${vehicle.displacement}</td>
  <td>${vehicle.cylinders}</td>
  <td>${vehicle.class}</td>`
}

getData()
