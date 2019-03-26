import settings from 'sketch/settings'
import DataSupplier from 'sketch/data-supplier'

import send from 'sketch-module-google-analytics'

import maleNames from './data/nameMale'
import femaleNames from './data/nameFemale'
import lastNames from './data/nameLast'
import companies from './data/commerceCompany'
import industries from './data/commerceIndustry'
import businesses from './data/commerceBusiness'
import cities from './data/geoCity'
import istanbul from './data/geoIstanbul'
import ankara from './data/geoAnkara'
import districtCities from './data/geoDistrictCity'
import occupations from './data/bioOccupation'
import addresses from './data/bioAddress'

export const onStartup = () => {
  let rds = DataSupplier.registerDataSupplier
  let txt = 'public.text'

  rds(txt, '1 - Name _ Ordered:  All:  First L.', 'AllFirstL')
  rds(txt, '1 - Name _ Ordered:  All:  First Name', 'AllFirstName')
  rds(txt, '1 - Name _ Ordered:  All:  Full Name', 'AllFullName')
  rds(txt, '1 - Name _ Ordered:  All:  Last, First', 'AllLastFirst')
  rds(txt, '1 - Name _ Ordered:  Female:  First L.', 'FemaleFirstL')
  rds(txt, '1 - Name _ Ordered:  Female:  First Name', 'FemaleFirstName')
  rds(txt, '1 - Name _ Ordered:  Female:  Full Name', 'FemaleFullName')
  rds(txt, '1 - Name _ Ordered:  Female:  Last, First', 'FemaleLastFirst')
  rds(txt, '1 - Name _ Ordered:  Male:  First L.', 'MaleFirstL')
  rds(txt, '1 - Name _ Ordered:  Male:  First Name', 'MaleFirstName')
  rds(txt, '1 - Name _ Ordered:  Male:  Full Name', 'MaleFullName')
  rds(txt, '1 - Name _ Ordered:  Male:  Last, First', 'MaleLastFirst')
  rds(txt, '1 - Name _ Random:  All:  First L.', 'RandomAllFirstL')
  rds(txt, '1 - Name _ Random:  All:  First Name', 'RandomAllFirstName')
  rds(txt, '1 - Name _ Random:  All:  Full Name', 'RandomAllFullName')
  rds(txt, '1 - Name _ Random:  All:  Last, First', 'RandomAllLastFirst')
  rds(txt, '1 - Name _ Random:  Female:  First L.', 'RandomFemaleFirstL')
  rds(txt, '1 - Name _ Random:  Female:  First Name', 'RandomFemaleFirstName')
  rds(txt, '1 - Name _ Random:  Female:  Full Name', 'RandomFemaleFullNames')
  rds(txt, '1 - Name _ Random:  Female:  Last, First', 'RandomFemaleLastFirst')
  rds(txt, '1 - Name _ Random:  Male:  First L.', 'RandomMaleFirstL')
  rds(txt, '1 - Name _ Random:  Male:  First Name', 'RandomMaleFirstName')
  rds(txt, '1 - Name _ Random:  Male:  Full Name', 'RandomMaleFullName')
  rds(txt, '1 - Name _ Random:  Male:  Last, First', 'RandomMaleLastFirst')

  rds(txt, '2 - Bio _ Ordered:  Occupation', 'Occupation')
  rds(txt, '2 - Bio _ Ordered:  Address', 'Address')
  rds(txt, '2 - Bio _ Random:  Occupation', 'RandomOccupation')
  rds(txt, '2 - Bio _ Random:  Address', 'RandomAddress')

  rds(txt, '3 - Geo _ Ordered:  City', 'City')
  rds(txt, '3 - Geo _ Ordered:  District, City', 'DistrictCity')
  rds(txt, '3 - Geo _ Ordered:  Districts of Ankara', 'DistrictsOfAnkara')
  rds(txt, '3 - Geo _ Ordered:  Districts of Istanbul', 'DistrictsOfIstanbul')
  rds(txt, '3 - Geo _ Random:  City', 'RandomCity')
  rds(txt, '3 - Geo _ Random:  District, City', 'RandomDistrictCity')
  rds(txt, '3 - Geo _ Random:  Districts of Ankara', 'RandomDistrictsOfAnkara')
  rds(txt, '3 - Geo _ Random:  Districts of Istanbul', 'RandomDistrictsOfIstanbul')

  rds(txt, '4 - Commerce _ Ordered:  Business Title', 'BusinessTitle')
  rds(txt, '4 - Commerce _ Ordered:  Company Name', 'CompanyName')
  rds(txt, '4 - Commerce _ Ordered:  Industry Title', 'IndustryTitle')
  rds(txt, '4 - Commerce _ Ordered:  Shop Name', 'ShopName')
  rds(txt, '4 - Commerce _ Random:  Business Title', 'RandomBusinessTitle')
  rds(txt, '4 - Commerce _ Random:  Company Name', 'RandomCompanyName')
  rds(txt, '4 - Commerce _ Random:  Industry Title', 'RandomIndustryTitle')
  rds(txt, '4 - Commerce _ Random:  Shop Name', 'RandomShopName')

  rds(txt, '5 - Date & Time _ Ordered 1:  dd.MM.yy', 'DateDdMmYY')
  rds(txt, '5 - Date & Time _ Ordered 2:  dd.MM.yyyy', 'DateDdMmYyyy')
  rds(txt, '5 - Date & Time _ Ordered 3:  dd MMM yyyy', 'DateDdMmmYyyy')
  rds(txt, '5 - Date & Time _ Ordered 4:  dd MMMM yyyy', 'DateDdMmmmYyyy')
  rds(txt, '5 - Date & Time _ Ordered 5:  dd MMMM yyyy dddd', 'DateDdMmmmYyyyDddd')
  rds(txt, '5 - Date & Time _ Ordered 6:  dd.MM.yy HH:mm', 'DateDdMmYyHhMm')
  rds(txt, '5 - Date & Time _ Ordered 7:  dd.MM.yyyy HH:mm', 'DateDdMmYyyyHhMm')
  rds(txt, '5 - Date & Time _ Ordered 8:  dd MMMM yyyy dddd HH:mm ', 'DateDdMmmmYyyyDdddHhMm')
  rds(txt, '5 - Date & Time _ Random 1:  dd.MM.yy', 'RandomDateDdMmYY')
  rds(txt, '5 - Date & Time _ Random 2:  dd.MM.yyyy', 'RandomDateDdMmYyyy')
  rds(txt, '5 - Date & Time _ Random 3:  dd MMM yyyy', 'RandomDateDdMmmYyyy')
  rds(txt, '5 - Date & Time _ Random 4:  dd MMMM yyyy', 'RandomDateDdMmmmYyyy')
  rds(txt, '5 - Date & Time _ Random 5:  dd MMMM yyyy dddd', 'RandomDateDdMmmmYyyyDddd')
  rds(txt, '5 - Date & Time _ Random 6:  dd.MM.yy HH:mm', 'RandomDateDdMmYyHhMm')
  rds(txt, '5 - Date & Time _ Random 7:  dd.MM.yyyy HH:mm', 'RandomDateDdMmYyyyHhMm')
  rds(txt, '5 - Date & Time _ Random 8:  dd MMMM yyyy dddd HH:mm ', 'RandomDateDdMmmmYyyyDdddHhMm')
}

export const onShutdown = () => {
  DataSupplier.deregisterDataSuppliers()
}

/*

// FIRST NAME

*/

export const supplyAllFirstName = context => {
  supplyOrderedData(femaleNames.concat(maleNames))
  analytics('All First Names', 'Ordered', context.data.items.count())
}

export const supplyRandomAllFirstName = context => {
  supplyRandomData(femaleNames.concat(maleNames))
  analytics('All First Names', 'Random', context.data.items.count())
}

export const supplyMaleFirstName = context => {
  supplyOrderedData(maleNames)
  analytics('Male First Names', 'Ordered', context.data.items.count())
}

export const supplyRandomMaleFirstName = context => {
  supplyRandomData(maleNames)
  analytics('Male First Names', 'Random', context.data.items.count())
}

export const supplyFemaleFirstName = context => {
  supplyOrderedData(femaleNames)
  analytics('Female First Names', 'Ordered', context.data.items.count())
}

export const supplyRandomFemaleFirstName = context => {
  supplyRandomData(femaleNames)
  analytics('Female First Names', 'Random', context.data.items.count())
}

/*

// FIRST L.

*/

export const supplyAllFirstL = context => {
  supplyOrderedData(getFirstLs())
  analytics('All First Names', 'Ordered', context.data.items.count())
}

export const supplyRandomAllFirstL = context => {
  supplyRandomData(getFirstLs())
  analytics('All First Names', 'Random', context.data.items.count())
}

export const supplyMaleFirstL = context => {
  supplyOrderedData(getFirstLs('male'))
  analytics('Male First Names', 'Ordered', context.data.items.count())
}

export const supplyRandomMaleFirstL = context => {
  supplyRandomData(getFirstLs('male'))
  analytics('Male First Names', 'Random', context.data.items.count())
}

export const supplyFemaleFirstL = context => {
  supplyOrderedData(getFirstLs('female'))
  analytics('Female First Names', 'Ordered', context.data.items.count())
}

export const supplyRandomFemaleFirstL = context => {
  supplyRandomData(getFirstLs('female'))
  analytics('Female First Names', 'Random', context.data.items.count())
}

/*

// FULL NAME

*/

export const supplyAllFullName = context => {
  supplyOrderedData(getFullNames())
  analytics('All Full Names', 'Ordered', context.data.items.count())
}

export const supplyRandomAllFullName = context => {
  supplyRandomData(getFullNames())
  analytics('All Full Names', 'Random', context.data.items.count())
}

export const supplyMaleFullName = context => {
  supplyOrderedData(getFullNames('male'))
  analytics('Male Full Names', 'Ordered', context.data.items.count())
}

export const supplyRandomMaleFullName = context => {
  supplyRandomData(getFullNames('male'))
  analytics('Male Full Names', 'Random', context.data.items.count())
}

export const supplyFemaleFullName = context => {
  supplyOrderedData(getFullNames('female'))
  analytics('Female Full Names', 'Ordered', context.data.items.count())
}

export const supplyRandomFemaleFullName = context => {
  supplyRandomData(getFullNames('female'))
  analytics('Female Full Names', 'Random', context.data.items.count())
}

/*

// LAST, FIRST

*/

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

/*

// BIO

*/

export const supplyOccupation = context => {
  supplyOrderedData(occupations)
  analytics('Occupations', 'Ordered', context.data.items.count())
}

export const supplyRandomOccupation = context => {
  supplyRandomData(occupations)
  analytics('Occupations', 'Random', context.data.items.count())
}

export const supplyAddress = context => {
  supplyOrderedData(addresses)
  analytics('Addresses', 'Ordered', context.data.items.count())
}

export const supplyRandomAddress = context => {
  supplyRandomData(addresses)
  analytics('Addresses', 'Random', context.data.items.count())
}

/*

// GEO

*/

export const supplyCity = context => {
  supplyOrderedData(cities)
  analytics('Cities', 'Ordered', context.data.items.count())
}

export const supplyRandomCity = context => {
  supplyRandomData(cities)
  analytics('Cities', 'Random', context.data.items.count())
}

export const supplyDistrictCity = context => {
  supplyOrderedData(districtCities)
  analytics('District, Cities', 'Ordered', context.data.items.count())
}

export const supplyRandomDistrictCity = context => {
  supplyRandomData(districtCities)
  analytics('District, Cities', 'Random', context.data.items.count())
}

export const supplyDistrictsOfAnkara = context => {
  supplyOrderedData(ankara)
  analytics('Districs of Ankara', 'Ordered', context.data.items.count())
}

export const supplyRandomDistrictsOfAnkara = context => {
  supplyRandomData(ankara)
  analytics('Districs of Ankara', 'Random', context.data.items.count())
}

export const supplyDistrictsOfIstanbul = context => {
  supplyOrderedData(istanbul)
  analytics('Districs of Istanbul', 'Ordered', context.data.items.count())
}

export const supplyRandomDistrictsOfIstanbul = context => {
  supplyRandomData(istanbul)
  analytics('Districs of Istanbul', 'Random', context.data.items.count())
}

/*

// COMMERCE

*/

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

/*

// DATE & TIME

*/

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

/*

// SUPPLIERS

*/

const supplyOrderedData = data => {
  DataSupplier.supplyData(
    context.data.key,
    data.sort((a, b) => a.localeCompare(b, 'tr-TR', { sensitivity: 'base' }))
      .slice(0, context.data.items.count())
  )
}

const supplyRandomData = data => {
  DataSupplier.supplyData(
    context.data.key,
    data.sort(() => Math.random() - 0.5)
      .slice(0, context.data.items.count())
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

/*

// UTILS

*/

const getFullNames = gender => {
  let names
  switch (gender) {
    case 'female':
      return femaleNames.map(n => {
        return n + ' ' + lastNames[Math.floor(Math.random() * lastNames.length)]
      })
    case 'male':
      return maleNames.map(n => {
        return n + ' ' + lastNames[Math.floor(Math.random() * lastNames.length)]
      })
    default:
      names = femaleNames.concat(maleNames)
      names.sort((a, b) => a.localeCompare(b, 'tr-TR', { sensitivity: 'base' }))
      return names.map(n => {
        return n + ' ' + lastNames[Math.floor(Math.random() * lastNames.length)]
      })
  }
}

const getFirstLs = gender => {
  let names
  switch (gender) {
    case 'female':
      return femaleNames.map(n => {
        return n + ' ' + lastNames[Math.floor(Math.random() * lastNames.length)][0] + '.'
      })
    case 'male':
      return maleNames.map(n => {
        return n + ' ' + lastNames[Math.floor(Math.random() * lastNames.length)][0] + '.'
      })
    default:
      names = femaleNames.concat(maleNames)
      names.sort((a, b) => a.localeCompare(b, 'tr-TR', { sensitivity: 'base' }))
      return names.map(n => {
        return n + ' ' + lastNames[Math.floor(Math.random() * lastNames.length)][0] + '.'
      })
  }
}

const getLastFirst = gender => {
  let names
  switch (gender) {
    case 'female':
      return femaleNames.map(n => {
        return n + ', ' + femaleNames[Math.floor(Math.random() * femaleNames.length)]
      })
    case 'male':
      return maleNames.map(n => {
        return n + ', ' + maleNames[Math.floor(Math.random() * maleNames.length)]
      })
    default:
      names = femaleNames.concat(maleNames)
      names.sort((a, b) => a.localeCompare(b, 'tr-TR', { sensitivity: 'base' }))
      return names.map(n => {
        return n + ', ' + names[Math.floor(Math.random() * names.length)]
      })
  }
}

const getCompanies = () => {
  return companies.map(name => {
    return companies[Math.floor(Math.random() * companies.length)] +
      ' ' + industries[Math.floor(Math.random() * industries.length)]
  })
}

const getStores = () => {
  return companies.map(name => {
    return companies[Math.floor(Math.random() * companies.length)] +
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
  let analyticsAllowed = (settings.settingForKey('analyticsAllowed')) || false

  if (analyticsAllowed != true) {
    let dialog = NSAlert.alloc().init()
    if (context.plugin.alertIcon()) {
      dialog.icon = context.plugin.alertIcon()
    }
    dialog.setMessageText('Allow Google Analytics')
    dialog.setInformativeText(
      context.plugin.name() + ' ' +
        'plugin use Google Analytics for tacking data. ' +
        'You can to click "Disallow" to disable tracking. ' +
        'You have to click "Allow" ' +
        'if you don\'t want to see this dialog again.'
    )
    dialog.addButtonWithTitle('Allow')
    dialog.addButtonWithTitle('Disallow')
    let response = dialog.runModal()
    if (response == 1000) {
      analyticsAllowed = true
      settings.setSettingForKey('analyticsAllowed', analyticsAllowed)
    }
  }

  const ID = 'UA-5738625-2'
  const payload = {}
  payload.ec = context.plugin.name()
  payload.ea = (action) || context.command.name()
  if (label) { payload.el = label }
  if (value) { payload.ev = value }
  if (analyticsAllowed) {
    return send(context, ID, 'event', payload)
  }
}
