const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0,2)
  
}

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2)
}
const selectingDrivers = {returnFirstTwoDrivers,returnLastTwoDrivers}

function createFareMultiplier(fare) {
  return (function(n) {
    return n*fare
  })
}
let fareDoubler = createFareMultiplier(2)
let fareTriplier = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, lot) {
  return lot(arrayOfDrivers)
}
