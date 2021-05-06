import analytics from '@ozgurgunes/sketch-plugin-analytics'
import { supplyOrderedData, supplyRandomData } from './utils'

import industries from './data/businessIndustry'
import occupations from './data/businessOccupation'
import titles from './data/businessTitle'
import works from './data/businessWork'

function getCompanies() {
  return titles.map(() => {
    return (
      titles[Math.floor(Math.random() * titles.length)] +
      ' ' +
      industries[Math.floor(Math.random() * industries.length)]
    )
  })
}

function getShops() {
  return titles.map(() => {
    return (
      titles[Math.floor(Math.random() * titles.length)] +
      ' ' +
      works[Math.floor(Math.random() * works.length)]
    )
  })
}

export function supplyIndustryTitle(context) {
  supplyOrderedData(industries)
  analytics('Industry Title', 'Ordered', context.data.items.count())
}

export function supplyRandomIndustryTitle(context) {
  supplyRandomData(industries)
  analytics('Industry Title', 'Random', context.data.items.count())
}

export function supplyBusinessTitle(context) {
  supplyOrderedData(works)
  analytics('Business Title', 'Ordered', context.data.items.count())
}

export function supplyRandomBusinessTitle(context) {
  supplyRandomData(works)
  analytics('Business Title', 'Random', context.data.items.count())
}

export function supplyCompanyName(context) {
  supplyOrderedData(getCompanies())
  analytics('CompanyName', 'Ordered', context.data.items.count())
}

export function supplyRandomCompanyName(context) {
  supplyRandomData(getCompanies())
  analytics('Company Name', 'Random', context.data.items.count())
}

export function supplyOccupation(context) {
  supplyOrderedData(occupations)
  analytics('Occupations', 'Ordered', context.data.items.count())
}

export function supplyRandomOccupation(context) {
  supplyRandomData(occupations)
  analytics('Occupations', 'Random', context.data.items.count())
}

export function supplyShopName(context) {
  supplyOrderedData(getShops())
  analytics('Shop Name', 'Ordered', context.data.items.count())
}

export function supplyRandomShopName(context) {
  supplyRandomData(getShops())
  analytics('Shop Name', 'Random', context.data.items.count())
}
