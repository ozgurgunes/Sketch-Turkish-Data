import DataSupplier from "sketch/data-supplier"

function fitData(data) {
  var i = 0
  var limit = context.data.items.count() - data.length
  while (i < limit) {
    data.push(data[i])
    i++
  }
  return data.slice(0, context.data.items.count())
}

export function supplyData(data) {
  DataSupplier.supplyData(context.data.key, fitData(data))
}

export function supplyOrderedData(data) {
  DataSupplier.supplyData(
    context.data.key,
    fitData(
      data.sort((a, b) => a.localeCompare(b, "tr-TR", { sensitivity: "base" }))
    )
  )
}

export function supplyRandomData(data) {
  DataSupplier.supplyData(
    context.data.key,
    fitData(data.sort(() => Math.random() - 0.5))
  )
}

export function supplyOrderedDateTime(data, options) {
  DataSupplier.supplyData(
    context.data.key,
    data
      .sort((a, b) => a < b)
      .map((date) => date.toLocaleDateString("tr-TR", options))
  )
}

export function supplyRandomDateTime(data, options) {
  DataSupplier.supplyData(
    context.data.key,
    data.map((date) => date.toLocaleDateString("tr-TR", options))
  )
}

export function supplyOrderedTime(data, options) {
  DataSupplier.supplyData(
    context.data.key,
    data
      .sort((a, b) => a < b)
      .map((date) => date.toLocaleTimeString("tr-TR", options))
  )
}

export function supplyRandomTime(data, options) {
  DataSupplier.supplyData(
    context.data.key,
    data.map((date) => date.toLocaleTimeString("tr-TR", options))
  )
}

export function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}
