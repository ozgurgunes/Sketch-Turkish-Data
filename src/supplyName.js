import { supplyOrderedData, supplyRandomData } from './utils'
import analytics from './analytics'

import maleNames from './data/nameMale'
import femaleNames from './data/nameFemale'
import lastNames from './data/nameLast'

function getFullNames(gender) {
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

function getFirstLs(gender) {
  let names
  switch (gender) {
    case 'female':
      return femaleNames.map(n => {
        return (
          n +
          ' ' +
          lastNames[Math.floor(Math.random() * lastNames.length)][0] +
          '.'
        )
      })
    case 'male':
      return maleNames.map(n => {
        return (
          n +
          ' ' +
          lastNames[Math.floor(Math.random() * lastNames.length)][0] +
          '.'
        )
      })
    default:
      names = femaleNames.concat(maleNames)
      names.sort((a, b) => a.localeCompare(b, 'tr-TR', { sensitivity: 'base' }))
      return names.map(n => {
        return (
          n +
          ' ' +
          lastNames[Math.floor(Math.random() * lastNames.length)][0] +
          '.'
        )
      })
  }
}

function getLastFirst(gender) {
  let names
  switch (gender) {
    case 'female':
      return femaleNames.map(n => {
        return (
          n + ', ' + femaleNames[Math.floor(Math.random() * femaleNames.length)]
        )
      })
    case 'male':
      return maleNames.map(n => {
        return (
          n + ', ' + maleNames[Math.floor(Math.random() * maleNames.length)]
        )
      })
    default:
      names = femaleNames.concat(maleNames)
      names.sort((a, b) => a.localeCompare(b, 'tr-TR', { sensitivity: 'base' }))
      return names.map(n => {
        return n + ', ' + names[Math.floor(Math.random() * names.length)]
      })
  }
}

// FIRST NAME

export function supplyAnyFirstName(context) {
  supplyOrderedData(femaleNames.concat(maleNames))
  analytics('Any First Name', 'Ordered', context.data.items.count())
}

export function supplyRandomAnyFirstName(context) {
  supplyRandomData(femaleNames.concat(maleNames))
  analytics('Any First Name', 'Random', context.data.items.count())
}

export function supplyMaleFirstName(context) {
  supplyOrderedData(maleNames)
  analytics('Male First Name', 'Ordered', context.data.items.count())
}

export function supplyRandomMaleFirstName(context) {
  supplyRandomData(maleNames)
  analytics('Male First Name', 'Random', context.data.items.count())
}

export function supplyFemaleFirstName(context) {
  supplyOrderedData(femaleNames)
  analytics('Female First Name', 'Ordered', context.data.items.count())
}

export function supplyRandomFemaleFirstName(context) {
  supplyRandomData(femaleNames)
  analytics('Female First Name', 'Random', context.data.items.count())
}

// FIRST L.

export function supplyAnyFirstL(context) {
  supplyOrderedData(getFirstLs())
  analytics('Any First Name', 'Ordered', context.data.items.count())
}

export function supplyRandomAnyFirstL(context) {
  supplyRandomData(getFirstLs())
  analytics('Any First Name', 'Random', context.data.items.count())
}

export function supplyMaleFirstL(context) {
  supplyOrderedData(getFirstLs('male'))
  analytics('Male First Name', 'Ordered', context.data.items.count())
}

export function supplyRandomMaleFirstL(context) {
  supplyRandomData(getFirstLs('male'))
  analytics('Male First Name', 'Random', context.data.items.count())
}

export function supplyFemaleFirstL(context) {
  supplyOrderedData(getFirstLs('female'))
  analytics('Female First Name', 'Ordered', context.data.items.count())
}

export function supplyRandomFemaleFirstL(context) {
  supplyRandomData(getFirstLs('female'))
  analytics('Female First Name', 'Random', context.data.items.count())
}

// FULL NAME

export function supplyAnyFullName(context) {
  supplyOrderedData(getFullNames())
  analytics('Any Full Name', 'Ordered', context.data.items.count())
}

export function supplyRandomAnyFullName(context) {
  supplyRandomData(getFullNames())
  analytics('Any Full Name', 'Random', context.data.items.count())
}

export function supplyMaleFullName(context) {
  supplyOrderedData(getFullNames('male'))
  analytics('Male Full Name', 'Ordered', context.data.items.count())
}

export function supplyRandomMaleFullName(context) {
  supplyRandomData(getFullNames('male'))
  analytics('Male Full Name', 'Random', context.data.items.count())
}

export function supplyFemaleFullName(context) {
  supplyOrderedData(getFullNames('female'))
  analytics('Female Full Name', 'Ordered', context.data.items.count())
}

export function supplyRandomFemaleFullName(context) {
  supplyRandomData(getFullNames('female'))
  analytics('Female Full Name', 'Random', context.data.items.count())
}

// LAST, FIRST

export function supplyAnyLastFirst(context) {
  supplyOrderedData(getLastFirst())
  analytics('Any Last, First', 'Ordered', context.data.items.count())
}

export function supplyRandomAnyLastFirst(context) {
  supplyRandomData(getLastFirst())
  analytics('Any Last, First', 'Random', context.data.items.count())
}

export function supplyMaleLastFirst(context) {
  supplyOrderedData(getLastFirst('male'))
  analytics('Male Last, First', 'Ordered', context.data.items.count())
}

export function supplyRandomMaleLastFirst(context) {
  supplyRandomData(getLastFirst('male'))
  analytics('Male Last, First', 'Random', context.data.items.count())
}

export function supplyFemaleLastFirst(context) {
  supplyOrderedData(getLastFirst('female'))
  analytics('Female Last, First', 'Ordered', context.data.items.count())
}

export function supplyRandomFemaleLastFirst(context) {
  supplyRandomData(getLastFirst('female'))
  analytics('Female Last, First', 'Random', context.data.items.count())
}
