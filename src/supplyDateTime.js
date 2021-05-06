import analytics from '@ozgurgunes/sketch-plugin-analytics'
import {
  supplyOrderedDateTime,
  supplyRandomDateTime,
  supplyOrderedTime,
  supplyRandomTime,
} from './utils'

function getDateTimeArray(arrayLength) {
  /*
    let options = {
      weekday: 'long', // long, short, narrow
      year: 'numeric', // numeric, 2-digit
      month: 'long', // numeric, 2-digit, long, short, narrow
      day: 'numeric', // numeric, 2-digit
      hour: 'numeric', // numeric, 2-digit
      minute: 'numeric', // numeric, 2-digit
      second: 'numeric', // numeric, 2-digit
      hour12: false
    }
  */
  let start = new Date()
  let end = new Date(new Date().setFullYear(start.getFullYear() - 2))
  let range = end.getTime() - start.getTime()
  let dates = []
  let i = 0
  while (i < arrayLength) {
    dates.push(new Date(Math.random() * range + start.getTime()))
    i++
  }
  return dates
}

function getTimeArray(arrayLength) {
  let start = new Date()
  let end = new Date(start - 24 * 60 * 60 * 1000)
  let range = end.getTime() - start.getTime()
  let times = []
  let i = 0
  while (i < arrayLength) {
    times.push(new Date(Math.random() * range + start.getTime()))
    i++
  }
  return times
}

// DATE & TIME

export function supplyDateTimeHhMm(context) {
  let options = {
    hour: '2-digit',
    minute: '2-digit',
  }
  supplyOrderedTime(getTimeArray(context.data.items.count()), options)
  analytics('HH:mm', 'Ordered', context.data.items.count())
}

export function supplyRandomDateTimeHhMm(context) {
  let options = {
    hour: '2-digit',
    minute: '2-digit',
  }
  supplyRandomTime(getTimeArray(context.data.items.count()), options)
  analytics('HH:mm', 'Random', context.data.items.count())
}

export function supplyDateTimeHhMmSs(context) {
  let options = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }
  supplyOrderedTime(getTimeArray(context.data.items.count()), options)
  analytics('HH:mm', 'Ordered', context.data.items.count())
}

export function supplyRandomDateTimeHhMmSs(context) {
  let options = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }
  supplyRandomTime(getTimeArray(context.data.items.count()), options)
  analytics('HH:mm', 'Random', context.data.items.count())
}

export function supplyDateTimeDdMmYY(context) {
  let options = {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  }
  supplyOrderedDateTime(getDateTimeArray(context.data.items.count()), options)
  analytics('dd.MM.yy', 'Ordered', context.data.items.count())
}

export function supplyRandomDateTimeDdMmYY(context) {
  let options = {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  }
  supplyRandomDateTime(getDateTimeArray(context.data.items.count()), options)
  analytics('dd.MM.yy', 'Random', context.data.items.count())
}

export function supplyDateTimeDdMmYyyy(context) {
  let options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }
  supplyOrderedDateTime(getDateTimeArray(context.data.items.count()), options)
  analytics('dd.MM.yyyy', 'Ordered', context.data.items.count())
}

export function supplyRandomDateTimeDdMmYyyy(context) {
  let options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }
  supplyRandomDateTime(getDateTimeArray(context.data.items.count()), options)
  analytics('dd.MM.yyyy', 'Random', context.data.items.count())
}

export function supplyDateTimeDdMmmYyyy(context) {
  let options = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }
  supplyOrderedDateTime(getDateTimeArray(context.data.items.count()), options)
  analytics('dd.MMM.yyyy', 'Ordered', context.data.items.count())
}

export function supplyRandomDateTimeDdMmmYyyy(context) {
  let options = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }
  supplyRandomDateTime(getDateTimeArray(context.data.items.count()), options)
  analytics('dd.MMM.yyyy', 'Random', context.data.items.count())
}

export function supplyDateTimeDdMmmmYyyy(context) {
  let options = {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }
  supplyOrderedDateTime(getDateTimeArray(context.data.items.count()), options)
  analytics('dd.MMMM.yyyy', 'Ordered', context.data.items.count())
}

export function supplyRandomDateTimeDdMmmmYyyy(context) {
  let options = {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }
  supplyRandomDateTime(getDateTimeArray(context.data.items.count()), options)
  analytics('dd.MMMM.yyyy', 'Random', context.data.items.count())
}

export function supplyDateTimeDdMmmmYyyyDddd(context) {
  let options = {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    weekday: 'long',
  }
  supplyOrderedDateTime(getDateTimeArray(context.data.items.count()), options)
  analytics('dd.MMMM.yyyy dddd', 'Ordered', context.data.items.count())
}

export function supplyRandomDateTimeDdMmmmYyyyDddd(context) {
  let options = {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    weekday: 'long',
  }
  supplyRandomDateTime(getDateTimeArray(context.data.items.count()), options)
  analytics('dd.MMMM.yyyy dddd', 'Random', context.data.items.count())
}

export function supplyDateTimeDdMmYyHhMm(context) {
  let options = {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }
  supplyOrderedDateTime(getDateTimeArray(context.data.items.count()), options)
  analytics('dd.MM.yy HH:mm', 'Ordered', context.data.items.count())
}

export function supplyRandomDateTimeDdMmYyHhMm(context) {
  let options = {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }
  supplyRandomDateTime(getDateTimeArray(context.data.items.count()), options)
  analytics('dd.MM.yy HH:mm', 'Random', context.data.items.count())
}

export function supplyDateTimeDdMmYyyyHhMm(context) {
  let options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }
  supplyOrderedDateTime(getDateTimeArray(context.data.items.count()), options)
  analytics('dd.MM.yyyy HH:mm', 'Ordered', context.data.items.count())
}

export function supplyRandomDateTimeDdMmYyyyHhMm(context) {
  let options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }
  supplyRandomDateTime(getDateTimeArray(context.data.items.count()), options)
  analytics('dd.MM.yyyy HH:mm', 'Random', context.data.items.count())
}

export function supplyDateTimeDdMmmmYyyyDdddHhMm(context) {
  let options = {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    weekday: 'long',
  }
  supplyOrderedDateTime(getDateTimeArray(context.data.items.count()), options)
  analytics('dd.MM.yyyy dddd HH:mm', 'Ordered', context.data.items.count())
}

export function supplyRandomDateTimeDdMmmmYyyyDdddHhMm(context) {
  let options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    weekday: 'long',
  }
  supplyRandomDateTime(getDateTimeArray(context.data.items.count()), options)
  analytics('dd.MM.yyyy dddd HH:mm', 'Random', context.data.items.count())
}
