function orbitalPeriod(arr) {
  const GM = 398600.4418
  const earthRadius = 6367.4447
  const resArr = []

  arr.forEach(obj => {
    const name = obj.name
    const distance = earthRadius + obj.avgAlt

    const orbitalPeriod = Math.round(Math.sqrt((distance ** 3) * ((4 * (Math.PI ** 2) / GM))))

    resArr.push({
      name,
      orbitalPeriod
    })
  })

  return resArr
}

function createObject()

console.log(orbitalPeriod([{
  name: "sputnik",
  avgAlt: 35873.5553
}]))
console.log(orbitalPeriod([{
  name: "iss",
  avgAlt: 413.6
}, {
  name: "hubble",
  avgAlt: 556.7
}, {
  name: "moon",
  avgAlt: 378632.553
}]))