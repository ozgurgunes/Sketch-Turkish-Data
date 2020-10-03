import DataSupplier from 'sketch/data-supplier'

export * from './supplyName'
export * from './supplyDateTime'
export * from './supplyLocation'
export * from './supplyBusiness'

export const onStartup = () => {
  let register = DataSupplier.registerDataSupplier
  let text = 'public.text'

  register(text, '1. Name (Random) _ Any:  First L.', 'RandomAnyFirstL')
  register(text, '1. Name (Random) _ Any:  First Name', 'RandomAnyFirstName')
  register(text, '1. Name (Random) _ Any:  Full Name', 'RandomAnyFullName')
  register(text, '1. Name (Random) _ Any:  Last, First', 'RandomAnyLastFirst')
  register(text, '1. Name (Random) _ Female:  First L.', 'RandomFemaleFirstL')
  register(text, '1. Name (Random) _ Female:  First Name', 'RandomFemaleFirstName')
  register(text, '1. Name (Random) _ Female:  Full Name', 'RandomFemaleFullName')
  register(text, '1. Name (Random) _ Female:  Last, First', 'RandomFemaleLastFirst')
  register(text, '1. Name (Random) _ Male:  First L.', 'RandomMaleFirstL')
  register(text, '1. Name (Random) _ Male:  First Name', 'RandomMaleFirstName')
  register(text, '1. Name (Random) _ Male:  Full Name', 'RandomMaleFullName')
  register(text, '1. Name (Random) _ Male:  Last, First', 'RandomMaleLastFirst')

  register(text, '2. Name (Ordered) _ Any:  First L.', 'AnyFirstL')
  register(text, '2. Name (Ordered) _ Any:  First Name', 'AnyFirstName')
  register(text, '2. Name (Ordered) _ Any:  Full Name', 'AnyFullName')
  register(text, '2. Name (Ordered) _ Any:  Last, First', 'AnyLastFirst')
  register(text, '2. Name (Ordered) _ Female:  First L.', 'FemaleFirstL')
  register(text, '2. Name (Ordered) _ Female:  First Name', 'FemaleFirstName')
  register(text, '2. Name (Ordered) _ Female:  Full Name', 'FemaleFullName')
  register(text, '2. Name (Ordered) _ Female:  Last, First', 'FemaleLastFirst')
  register(text, '2. Name (Ordered) _ Male:  First L.', 'MaleFirstL')
  register(text, '2. Name (Ordered) _ Male:  First Name', 'MaleFirstName')
  register(text, '2. Name (Ordered) _ Male:  Full Name', 'MaleFullName')
  register(text, '2. Name (Ordered) _ Male:  Last, First', 'MaleLastFirst')
  
  register(text, '3. Location (Random) _ Address', 'RandomAddress')
  register(text, '3. Location (Random) _ City', 'RandomCity')
  register(text, '3. Location (Random) _ Country', 'RandomCountry')
  register(text, '3. Location (Random) _ District / City', 'RandomDistrictSlashCity')
  register(text, '3. Location (Random) _ District, City', 'RandomDistrictCommaCity')
  register(text, '3. Location (Random) _ Districts of Ankara', 'RandomDistrictsOfAnkara')
  register(text, '3. Location (Random) _ Districts of Istanbul', 'RandomDistrictsOfIstanbul')
  
  register(text, '4. Location (Ordered) _ Address', 'Address')
  register(text, '4. Location (Ordered) _ City', 'City')
  register(text, '4. Location (Ordered) _ Country', 'Country')
  register(text, '4. Location (Ordered) _ District / City', 'DistrictSlashCity')
  register(text, '4. Location (Ordered) _ District, City', 'DistrictCommaCity')
  register(text, '4. Location (Ordered) _ Districts of Ankara', 'DistrictsOfAnkara')
  register(text, '4. Location (Ordered) _ Districts of Istanbul', 'DistrictsOfIstanbul')
  
  register(text, '5. Business (Random) _ Business Title', 'RandomBusinessTitle')
  register(text, '5. Business (Random) _ Company Name', 'RandomCompanyName')
  register(text, '5. Business (Random) _ Industry Title', 'RandomIndustryTitle')
  register(text, '5. Business (Random) _ Occupation', 'RandomOccupation')
  register(text, '5. Business (Random) _ Shop Name', 'RandomShopName')

  register(text, '6. Business (Ordered) _ Business Title', 'BusinessTitle')
  register(text, '6. Business (Ordered) _ Company Name', 'CompanyName')
  register(text, '6. Business (Ordered) _ Industry Title', 'IndustryTitle')
  register(text, '6. Business (Ordered) _ Occupation', 'Occupation')
  register(text, '6. Business (Ordered) _ Shop Name', 'ShopName')

  register(text, '7. Date & Time (Random) _ 01:  HH:mm', 'RandomDateTimeHhMm')
  register(text, '7. Date & Time (Random) _ 02:  HH:mm:SS', 'RandomDateTimeHhMmSs')
  register(text, '7. Date & Time (Random) _ 03:  dd.MM.yy', 'RandomDateTimeDdMmYY')
  register(text, '7. Date & Time (Random) _ 04:  dd.MM.yyyy', 'RandomDateTimeDdMmYyyy')
  register(text, '7. Date & Time (Random) _ 05:  dd MMM yyyy', 'RandomDateTimeDdMmmYyyy')
  register(text, '7. Date & Time (Random) _ 06:  dd MMMM yyyy', 'RandomDateTimeDdMmmmYyyy')
  register(text, '7. Date & Time (Random) _ 07:  dd MMMM yyyy dddd', 'RandomDateTimeDdMmmmYyyyDddd')
  register(text, '7. Date & Time (Random) _ 08:  dd.MM.yy HH:mm', 'RandomDateTimeDdMmYyHhMm')
  register(text, '7. Date & Time (Random) _ 09:  dd.MM.yyyy HH:mm', 'RandomDateTimeDdMmYyyyHhMm')
  register(text, '7. Date & Time (Random) _ 10:  dd MMMM yyyy dddd HH:mm ', 'RandomDateTimeDdMmmmYyyyDdddHhMm')

  register(text, '8. Date & Time (Ordered) _ 01:  HH:mm', 'DateTimeHhMm')
  register(text, '8. Date & Time (Ordered) _ 02:  HH:mm:SS', 'DateTimeHhMmSs')
  register(text, '8. Date & Time (Ordered) _ 03:  dd.MM.yy', 'DateTimeDdMmYY')
  register(text, '8. Date & Time (Ordered) _ 04:  dd.MM.yyyy', 'DateTimeDdMmYyyy')
  register(text, '8. Date & Time (Ordered) _ 05:  dd MMM yyyy', 'DateTimeDdMmmYyyy')
  register(text, '8. Date & Time (Ordered) _ 06:  dd MMMM yyyy', 'DateTimeDdMmmmYyyy')
  register(text, '8. Date & Time (Ordered) _ 07:  dd MMMM yyyy dddd', 'DateTimeDdMmmmYyyyDddd')
  register(text, '8. Date & Time (Ordered) _ 08:  dd.MM.yy HH:mm', 'DateTimeDdMmYyHhMm')
  register(text, '8. Date & Time (Ordered) _ 09:  dd.MM.yyyy HH:mm', 'DateTimeDdMmYyyyHhMm')
  register(text, '8. Date & Time (Ordered) _ 10:  dd MMMM yyyy dddd HH:mm ', 'DateTimeDdMmmmYyyyDdddHhMm')
}

export const onShutdown = () => {
  DataSupplier.deregisterDataSuppliers()
}

