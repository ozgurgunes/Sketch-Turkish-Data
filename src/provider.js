import DataSupplier from 'sketch/data-supplier'
import send from 'sketch-module-google-analytics'

import maleNames from '../assets/names-male'
import femaleNames from '../assets/names-female'
import lastNames from '../assets/names-last'
import companyNames from '../assets/companies-name'
import industries from '../assets/companies-industry'
import businesses from '../assets/companies-business'
import cities from '../assets/cities'
import istanbulDistricts from '../assets/districtsIstanbul'
import ankaraDistricts from '../assets/districtsAnkara'

export const onStartup = () => {
  let rds = DataSupplier.registerDataSupplier
  let txt = 'public.text'

  rds(txt, '1 - Names _ Ordered:  First Name - All', 'AllFirstNames')
  rds(txt, '1 - Names _ Ordered:  First Name - Male', 'MaleFirstNames')
  rds(txt, '1 - Names _ Ordered:  First Name - Female', 'FemaleFirstNames')
  rds(txt, '1 - Names _ Random:  First Name - All', 'RandomAllFirstNames')
  rds(txt, '1 - Names _ Random:  First Name - Male', 'RandomMaleFirstNames')
  rds(txt, '1 - Names _ Random:  First Name - Female', 'RandomFemaleFirstNames')

  rds(txt, '1 - Names _ Ordered:  Full Name - All', 'AllFullNames')
  rds(txt, '1 - Names _ Ordered:  Full Name - Male', 'MaleFullNames')
  rds(txt, '1 - Names _ Ordered:  Full Name - Female', 'FemaleFullNames')
  rds(txt, '1 - Names _ Random:  Full Name - All', 'RandomAllFullNames')
  rds(txt, '1 - Names _ Random:  Full Name - Male', 'RandomMaleFullNames')
  rds(txt, '1 - Names _ Random:  Full Name - Female', 'RandomFemaleFullNames')

  rds(txt, '1 - Names _ Ordered:  Last, First - All', 'AllLastFirst')
  rds(txt, '1 - Names _ Ordered:  Last, First - Male', 'MaleLastFirst')
  rds(txt, '1 - Names _ Ordered:  Last, First - Female', 'FemaleLastFirst')
  rds(txt, '1 - Names _ Random:  Last, First - All', 'RandomAllLastFirst')
  rds(txt, '1 - Names _ Random:  Last, First - Male', 'RandomMaleLastFirst')
  rds(txt, '1 - Names _ Random:  Last, First - Female', 'RandomFemaleLastFirst')

  rds(txt, '2 - Geography _ Ordered:  Cities', 'Cities')
  rds(txt, '2 - Geography _ Ordered:  Districts of Ankara', 'DistrictsOfAnkara')
  rds(txt, '2 - Geography _ Ordered:  Districts of Istanbul', 'DistrictsOfIstanbul')
  rds(txt, '2 - Geography _ Random:  Cities', 'RandomCities')
  rds(txt, '2 - Geography _ Random:  Districts of Ankara', 'RandomDistrictsOfAnkara')
  rds(txt, '2 - Geography _ Random:  Districts of Istanbul', 'RandomDistrictsOfIstanbul')

  rds(txt, '3 - Commerce _ Ordered:  Business Title', 'BusinessTitle')
  rds(txt, '3 - Commerce _ Ordered:  Company Name', 'CompanyName')
  rds(txt, '3 - Commerce _ Ordered:  Industry Title', 'IndustryTitle')
  rds(txt, '3 - Commerce _ Ordered:  Shop Name', 'ShopName')
  rds(txt, '3 - Commerce _ Random:  Business Title', 'RandomBusinessTitle')
  rds(txt, '3 - Commerce _ Random:  Company Name', 'RandomCompanyName')
  rds(txt, '3 - Commerce _ Random:  Industry Title', 'RandomIndustryTitle')
  rds(txt, '3 - Commerce _ Random:  Shop Name', 'RandomShopName')

  rds(txt, '4 - Date & Time _ Ordered 1:  dd.MM.yy', 'DateDdMmYY')
  rds(txt, '4 - Date & Time _ Ordered 2:  dd.MM.yyyy', 'DateDdMmYyyy')
  rds(txt, '4 - Date & Time _ Ordered 3:  dd MMM yyyy', 'DateDdMmmYyyy')
  rds(txt, '4 - Date & Time _ Ordered 4:  dd MMMM yyyy', 'DateDdMmmmYyyy')
  rds(txt, '4 - Date & Time _ Ordered 5:  dd MMMM yyyy dddd', 'DateDdMmmmYyyyDddd')
  rds(txt, '4 - Date & Time _ Ordered 6:  dd.MM.yy HH:mm', 'DateDdMmYyHhMm')
  rds(txt, '4 - Date & Time _ Ordered 7:  dd.MM.yyyy HH:mm', 'DateDdMmYyyyHhMm')
  rds(txt, '4 - Date & Time _ Ordered 8:  dd MMMM yyyy dddd HH:mm ', 'DateDdMmmmYyyyDdddHhMm')
  rds(txt, '4 - Date & Time _ Random 1:  dd.MM.yy', 'RandomDateDdMmYY')
  rds(txt, '4 - Date & Time _ Random 2:  dd.MM.yyyy', 'RandomDateDdMmYyyy')
  rds(txt, '4 - Date & Time _ Random 3:  dd MMM yyyy', 'RandomDateDdMmmYyyy')
  rds(txt, '4 - Date & Time _ Random 4:  dd MMMM yyyy', 'RandomDateDdMmmmYyyy')
  rds(txt, '4 - Date & Time _ Random 5:  dd MMMM yyyy dddd', 'RandomDateDdMmmmYyyyDddd')
  rds(txt, '4 - Date & Time _ Random 6:  dd.MM.yy HH:mm', 'RandomDateDdMmYyHhMm')
  rds(txt, '4 - Date & Time _ Random 7:  dd.MM.yyyy HH:mm', 'RandomDateDdMmYyyyHhMm')
  rds(txt, '4 - Date & Time _ Random 8:  dd MMMM yyyy dddd HH:mm ', 'RandomDateDdMmmmYyyyDdddHhMm')
}

export const onShutdown = () => {
  DataSupplier.deregisterDataSuppliers()
}

// FIRST NAME

export const supplyAllFirstNames = context => {
  supplyOrderedData(femaleNames.concat(maleNames))
  analytics('All First Names', 'Ordered', context.data.items.count())
}

export const supplyRandomAllFirstNames = context => {
  supplyRandomData(femaleNames.concat(maleNames))
  analytics('All First Names', 'Random', context.data.items.count())
}

export const supplyMaleFirstNames = context => {
  supplyOrderedData(maleNames)
  analytics('Male First Names', 'Ordered', context.data.items.count())
}

export const supplyRandomMaleFirstNames = context => {
  supplyRandomData(maleNames)
  analytics('Male First Names', 'Random', context.data.items.count())
}

export const supplyFemaleFirstNames = context => {
  supplyOrderedData(femaleNames)
  analytics('Female First Names', 'Ordered', context.data.items.count())
}

export const supplyRandomFemaleFirstNames = context => {
  supplyRandomData(femaleNames)
  analytics('Female First Names', 'Random', context.data.items.count())
}

// FULL NAME

export const supplyAllFullNames = context => {
  supplyOrderedData(getFullNames())
  analytics('All Full Names', 'Ordered', context.data.items.count())
}

export const supplyRandomAllFullNames = context => {
  supplyRandomData(getFullNames())
  analytics('All Full Names', 'Random', context.data.items.count())
}

export const supplyMaleFullNames = context => {
  supplyOrderedData(getFullNames('male'))
  analytics('Male Full Names', 'Ordered', context.data.items.count())
}

export const supplyRandomMaleFullNames = context => {
  supplyRandomData(getFullNames('male'))
  analytics('Male Full Names', 'Random', context.data.items.count())
}

export const supplyFemaleFullNames = context => {
  supplyOrderedData(getFullNames('female'))
  analytics('Female Full Names', 'Ordered', context.data.items.count())
}

export const supplyRandomFemaleFullNames = context => {
  supplyRandomData(getFullNames('female'))
  analytics('Female Full Names', 'Random', context.data.items.count())
}

// LAST, FIRST

export const supplyAllLastFirst = context => {
  supplyOrderedData(getLastFirst())
  analytics('All Last, First', 'Ordered', context.data.items.count())
}

export const supplyRandomAllLastFirst = context => {
  supplyRandomData(getLastFirst())
  analytics('All Last, First', 'Random', context.data.items.count())
}

export const supplyMaleLastFirst = context => {
  supplyOrderedData(getLastFirst('male'))
  analytics('Male Last, First', 'Ordered', context.data.items.count())
}

export const supplyRandomMaleLastFirst = context => {
  supplyRandomData(getLastFirst('male'))
  analytics('Male Last, First', 'Random', context.data.items.count())
}

export const supplyFemaleLastFirst = context => {
  supplyOrderedData(getLastFirst('female'))
  analytics('Female Last, First', 'Ordered', context.data.items.count())
}

export const supplyRandomFemaleLastFirst = context => {
  supplyRandomData(getLastFirst('female'))
  analytics('Female Last, First', 'Random', context.data.items.count())
}

// GEOGRAPHY

export const supplyCities = context => {
  supplyOrderedData(cities)
  analytics('Cities', 'Ordered', context.data.items.count())
}

export const supplyRandomCities = context => {
  supplyRandomData(cities)
  analytics('Cities', 'Random', context.data.items.count())
}

export const supplyDistrictsOfAnkara = context => {
  supplyOrderedData(ankaraDistricts)
  analytics('Districs of Ankara', 'Ordered', context.data.items.count())
}

export const supplyRandomDistrictsOfAnkara = context => {
  supplyRandomData(ankaraDistricts)
  analytics('Districs of Ankara', 'Random', context.data.items.count())
}

export const supplyDistrictsOfIstanbul = context => {
  supplyOrderedData(istanbulDistricts)
  analytics('Districs of Istanbul', 'Ordered', context.data.items.count())
}

export const supplyRandomDistrictsOfIstanbul = context => {
  supplyRandomData(istanbulDistricts)
  analytics('Districs of Istanbul', 'Random', context.data.items.count())
}

// COMMERCE

export const supplyIndustryTitle = context => {
  supplyOrderedData(industries)
  analytics('Industry Title', 'Ordered', context.data.items.count())
}

export const supplyRandomIndustryTitle = context => {
  supplyRandomData(industries)
  analytics('Industry Title', 'Random', context.data.items.count())
}

export const supplyBusinessTitle = context => {
  supplyOrderedData(businesses)
  analytics('Business Title', 'Ordered', context.data.items.count())
}

export const supplyRandomBusinessTitle = context => {
  supplyRandomData(businesses)
  analytics('Business Title', 'Random', context.data.items.count())
}

export const supplyCompanyName = context => {
  supplyOrderedData(getCompanies())
  analytics('CompanyName', 'Ordered', context.data.items.count())
}

export const supplyRandomCompanyName = context => {
  supplyRandomData(getCompanies())
  analytics('Company Name', 'Random', context.data.items.count())
}

export const supplyShopName = context => {
  supplyOrderedData(getStores())
  analytics('Shop Name', 'Ordered', context.data.items.count())
}

export const supplyRandomShopName = context => {
  supplyRandomData(getStores())
  analytics('Shop Name', 'Random', context.data.items.count())
}

// DATE & TIME

export const supplyDateDdMmYY = context => {
  let options = {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit'
  }
  supplyOrderedDate(getDateArray(context.data.items.count()), options)
  analytics('dd.MM.yy', 'Ordered', context.data.items.count())
}

export const supplyRandomDateDdMmYY = context => {
  let options = {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit'
  }
  supplyRandomDate(getDateArray(context.data.items.count()), options)
  analytics('dd.MM.yy', 'Random', context.data.items.count())
}

export const supplyDateDdMmYyyy = context => {
  let options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }
  supplyOrderedDate(getDateArray(context.data.items.count()), options)
  analytics('dd.MM.yyyy', 'Ordered', context.data.items.count())
}

export const supplyRandomDateDdMmYyyy = context => {
  let options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }
  supplyRandomDate(getDateArray(context.data.items.count()), options)
  analytics('dd.MM.yyyy', 'Random', context.data.items.count())
}

export const supplyDateDdMmmYyyy = context => {
  let options = {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }
  supplyOrderedDate(getDateArray(context.data.items.count()), options)
  analytics('dd.MMM.yyyy', 'Ordered', context.data.items.count())
}

export const supplyRandomDateDdMmmYyyy = context => {
  let options = {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }
  supplyRandomDate(getDateArray(context.data.items.count()), options)
  analytics('dd.MMM.yyyy', 'Random', context.data.items.count())
}

export const supplyDateDdMmmmYyyy = context => {
  let options = {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }
  supplyOrderedDate(getDateArray(context.data.items.count()), options)
  analytics('dd.MMMM.yyyy', 'Ordered', context.data.items.count())
}

export const supplyRandomDateDdMmmmYyyy = context => {
  let options = {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }
  supplyRandomDate(getDateArray(context.data.items.count()), options)
  analytics('dd.MMMM.yyyy', 'Random', context.data.items.count())
}

export const supplyDateDdMmmmYyyyDddd = context => {
  let options = {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    weekday: 'long'
  }
  supplyOrderedDate(getDateArray(context.data.items.count()), options)
  analytics('dd.MMMM.yyyy dddd', 'Ordered', context.data.items.count())
}

export const supplyRandomDateDdMmmmYyyyDddd = context => {
  let options = {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    weekday: 'long'
  }
  supplyRandomDate(getDateArray(context.data.items.count()), options)
  analytics('dd.MMMM.yyyy dddd', 'Random', context.data.items.count())
}

export const supplyDateDdMmYyHhMm = context => {
  let options = {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  }
  supplyOrderedDate(getDateArray(context.data.items.count()), options)
  analytics('dd.MM.yy HH:mm', 'Ordered', context.data.items.count())
}

export const supplyRandomDateDdMmYyHhMm = context => {
  let options = {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  }
  supplyRandomDate(getDateArray(context.data.items.count()), options)
  analytics('dd.MM.yy HH:mm', 'Random', context.data.items.count())
}

export const supplyDateDdMmYyyyHhMm = context => {
  let options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }
  supplyOrderedDate(getDateArray(context.data.items.count()), options)
  analytics('dd.MM.yyyy HH:mm', 'Ordered', context.data.items.count())
}

export const supplyRandomDateDdMmYyyyHhMm = context => {
  let options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }
  supplyRandomDate(getDateArray(context.data.items.count()), options)
  analytics('dd.MM.yyyy HH:mm', 'Random', context.data.items.count())
}

export const supplyDateDdMmmmYyyyDdddHhMm = context => {
  let options = {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    weekday: 'long'
  }
  supplyOrderedDate(getDateArray(context.data.items.count()), options)
  analytics('dd.MM.yyyy dddd HH:mm', 'Ordered', context.data.items.count())
}

export const supplyRandomDateDdMmmmYyyyDdddHhMm = context => {
  let options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    weekday: 'long'
  }
  supplyRandomDate(getDateArray(context.data.items.count()), options)
  analytics('dd.MM.yyyy dddd HH:mm', 'Random', context.data.items.count())
}

// SUPPLIERS

const supplyOrderedData = data => {
  DataSupplier.supplyData(
    context.data.key,
    data.sort()
  )
}

const supplyRandomData = data => {
  DataSupplier.supplyData(
    context.data.key,
    data.sort(() => Math.random() - 0.5)
  )
}

const supplyOrderedDate = (data, options) => {
  DataSupplier.supplyData(
    context.data.key,
    data.sort((a, b) => a < b).map(date => date.toLocaleDateString('tr-TR', options))
  )
}

const supplyRandomDate = (data, options) => {
  DataSupplier.supplyData(
    context.data.key,
    data.map(date => date.toLocaleDateString('tr-TR', options))
  )
}

// UTILS

const getFullNames = gender => {
  let names
  switch (gender) {
    case 'female':
      return femaleNames.map(name => {
        return femaleNames[Math.floor(Math.random() * femaleNames.length)] +
          ' ' + lastNames[Math.floor(Math.random() * lastNames.length)]
      })
    case 'male':
      return maleNames.map(name => {
        return maleNames[Math.floor(Math.random() * maleNames.length)] +
          ' ' + lastNames[Math.floor(Math.random() * lastNames.length)]
      })
    default:
      names = femaleNames.concat(maleNames)
      return names.map(name => {
        return names[Math.floor(Math.random() * names.length)] +
          ' ' + lastNames[Math.floor(Math.random() * lastNames.length)]
      })
  }
}

const getLastFirst = gender => {
  let names
  switch (gender) {
    case 'female':
      return femaleNames.map(name => {
        return lastNames[Math.floor(Math.random() * lastNames.length)] +
          ', ' + femaleNames[Math.floor(Math.random() * femaleNames.length)]
      })
    case 'male':
      return maleNames.map(name => {
        return lastNames[Math.floor(Math.random() * lastNames.length)] +
          ', ' + maleNames[Math.floor(Math.random() * maleNames.length)]
      })
    default:
      names = femaleNames.concat(maleNames)
      return names.map(name => {
        return lastNames[Math.floor(Math.random() * lastNames.length)] +
          ', ' + names[Math.floor(Math.random() * names.length)]
      })
  }
}

const getCompanies = () => {
  return companyNames.map(name => {
    return companyNames[Math.floor(Math.random() * companyNames.length)] +
      ' ' + industries[Math.floor(Math.random() * industries.length)]
  })
}

const getStores = () => {
  return companyNames.map(name => {
    return companyNames[Math.floor(Math.random() * companyNames.length)] +
      ' ' + businesses[Math.floor(Math.random() * businesses.length)]
  })
}

const getDateArray = arrayLength => {
/*
  let options = {
    weekday: 'long', // long, short, narrow
    year: 'numeric', // numeric, 2-digit
    month: 'long', // numeric, 2-digit, long, short, narrow
    day: 'numeric', // numeric, 2-digit
    hour: 'numeric', // numeric, 2-digit
    minute: 'numeric', // numeric, 2-digit
    //second: 'numeric', // numeric, 2-digit
    hour12: false
  }
*/
  let start = new Date()
  let end = new Date(new Date().setFullYear(new Date().getFullYear() - 2))
  let range = end.getTime() - start.getTime()
  let dates = []
  let i = 0
  while (i < arrayLength) {
    dates.push(new Date(Math.random() * range + start.getTime()))
    i++
  }
  return dates
}

const analytics = (action, label, value) => {
  const ID = 'UA-5738625-2'
  const payload = {}
  payload.ec = context.plugin.name()
  payload.ea = (action) || context.command.name()
  if (label) { payload.el = label }
  if (value) { payload.ev = value }
  return send(context, ID, 'event', payload)
}
