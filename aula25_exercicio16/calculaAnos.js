const dayjs = require('dayjs');

function aniversario(date){
    const aniversario = dayjs(date)
    const hoje = dayjs()

    const anos = hoje.diff(aniversario, 'year')
    const proxAniversario = aniversario.add(anos + 1, 'years')
    const diasProxAniver = proxAniversario.diff(hoje, 'day') + 1

    console.log(`A pessoa esta com ${anos} anos e o proximo aniversario é em ${proxAniversario.format('DD-MM-YYYY')} e isso acontecera em ${diasProxAniver} dias`);
}

aniversario("2001-08-22")