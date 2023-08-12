const dayjs = require('dayjs');


const hoje = dayjs()
const dataAniversario = dayjs('2001-08-22')

const anosPassados = hoje.diff(dataAniversario, 'year')

console.log(`A pessoa esta com ${anosPassados} anos e nasceu em ${dataAniversario.format('DD-MM-YYYY')}`);


