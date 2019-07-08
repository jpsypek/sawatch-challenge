const vehicleTable = document.querySelector('.swt-table')

getData = () => {
  return fetch('https://api.sawatchlabs.com/models/13/2017')
    .then(response => response.json())
    .then(data => sortVehicles(data.data))
    .catch(error => console.error(error))
}

getData()
