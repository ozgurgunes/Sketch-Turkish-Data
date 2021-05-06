import analytics from '@ozgurgunes/sketch-plugin-analytics'
import { supplyData, supplyOrderedData, supplyRandomData } from './utils'

import cities from './data/locationCity'
import countries from './data/locationCountry'
import addresses from './data/locationAddress'

function getAddresses() {
  let data = []
  for (let i = 0; i < context.data.items.count(); i++) {
    let address = ''
    let str1 = ['Mah.', 'Cad.', 'Bul.'][Math.floor(Math.random() * 3)]
    let str2 = ['Cad.', 'Sok.', 'Apt.']
    switch (true) {
      case str1 == 'Mah.':
        str2.splice(2, 1)
        break
      case str1 == 'Cad.':
        str2.splice(0, 1)
        break
    }

    address += addresses[Math.floor(Math.random() * addresses.length)]
    address += ' ' + str1
    address += ' ' + addresses[Math.floor(Math.random() * addresses.length)]
    address += ' ' + str2[Math.floor(Math.random() * str2.length)]
    address += ' No: ' + (Math.floor(Math.random() * 100) + 1)
    address +=
      Math.random() >= 0.5 ? '/' + (Math.floor(Math.random() * 25) + 1) : ''
    let city = cities[Math.floor(Math.random() * cities.length)]
    let town = city.towns[Math.floor(Math.random() * city.towns.length)]
    address += ' ' + town + ', ' + city.name
    data.push(address)
  }
  return data
}

function getCities() {
  let data = []
  for (let i = 0; i < context.data.items.count(); i++) {
    let city = cities[Math.floor(Math.random() * cities.length)]
    let town = city.towns[Math.floor(Math.random() * city.towns.length)]
    data.push({ city: city.name, town: town })
  }
  return data
}

export function supplyAddress(context) {
  supplyOrderedData(getAddresses())
  analytics('Address', 'Ordered', context.data.items.count())
}

export function supplyRandomAddress(context) {
  supplyRandomData(getAddresses())
  analytics('Address', 'Random', context.data.items.count())
}

export function supplyCity(context) {
  supplyOrderedData(cities.map(city => city.name))
  analytics('City', 'Ordered', context.data.items.count())
}

export function supplyRandomCity(context) {
  supplyRandomData(cities.map(city => city.name))
  analytics('City', 'Random', context.data.items.count())
}

export function supplyDistrictCommaCity(context) {
  let data = getCities()
    .sort((a, b) => {
      if (a.city == b.city) {
        return a.town.localeCompare(b.town, 'tr-TR', { sensitivity: 'base' })
      }
      return a.city.localeCompare(b.city, 'tr-TR', { sensitivity: 'base' })
    })
    .map(data => data.town + ', ' + data.city)
  supplyData(data)
  analytics('District, City', 'Ordered', context.data.items.count())
}

export function supplyRandomDistrictCommaCity(context) {
  supplyData(getCities().map(data => data.town + ', ' + data.city))
  analytics('District, City', 'Random', context.data.items.count())
}

export function supplyDistrictSlashCity(context) {
  let data = getCities()
    .sort((a, b) => {
      if (a.city == b.city) {
        return a.town.localeCompare(b.town, 'tr-TR', { sensitivity: 'base' })
      }
      return a.city.localeCompare(b.city, 'tr-TR', { sensitivity: 'base' })
    })
    .map(data => data.town + ' / ' + data.city)
  supplyData(data)
  analytics('District / City', 'Ordered', context.data.items.count())
}

export function supplyRandomDistrictSlashCity(context) {
  supplyData(getCities().map(data => data.town + ' / ' + data.city))
  analytics('District / City', 'Random', context.data.items.count())
}

export function supplyDistrictsOfAnkara(context) {
  supplyOrderedData(cities.find(city => city.name == 'Ankara').towns)
  analytics('Districts of Ankara', 'Ordered', context.data.items.count())
}

export function supplyRandomDistrictsOfAnkara(context) {
  supplyRandomData(cities.find(city => city.name == 'Ankara').towns)
  analytics('Districts of Ankara', 'Random', context.data.items.count())
}

export function supplyDistrictsOfIstanbul(context) {
  supplyOrderedData(cities.find(city => city.name == 'İstanbul').towns)
  analytics('Districts of Istanbul', 'Ordered', context.data.items.count())
}

export function supplyRandomDistrictsOfIstanbul(context) {
  supplyRandomData(cities.find(city => city.name == 'İstanbul').towns)
  analytics('Districts of Istanbul', 'Random', context.data.items.count())
}

export function supplyCountry(context) {
  supplyOrderedData(countries.map(country => country.name))
  analytics('Country', 'Ordered', context.data.items.count())
}

export function supplyRandomCountry(context) {
  supplyRandomData(countries.map(country => country.name))
  analytics('Country', 'Random', context.data.items.count())
}
