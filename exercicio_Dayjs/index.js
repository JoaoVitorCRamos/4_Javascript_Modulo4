const dayjs = require('dayjs');

const currentDate = dayjs();
const formattedDate = currentDate.format('DD-MM-YYYY');


const futureDate = currentDate.add(7, 'day');

console.log('Data atual:', formattedDate);
console.log('Data daqui a 7 dias:', futureDate.format('DD-MM-YYYY'));