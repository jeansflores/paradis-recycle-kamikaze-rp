import 'moment/locale/pt-br'

import moment from 'moment'

moment.locale('pt-br')

export const buildExtract = (data) => {
  const {
    operation,
    seller,
    purchaser,
    cardboard,
    bottle,
    glass,
    tin,
    wire,
    rigidPlastic,
    circuit,
    antenna,
    total
  } = data

  return `
  -----------------------------------------
              Detalhes da ${operation}
  -----------------------------------------
  Vendedor: ${seller}
  Comprador: ${purchaser}

  -----------------------------------------
  Descrição dos Itens:
  -----------------------------------------
  1. Papelão       ${cardboard.quantity.toString().padStart(10, ' ')}x   $ ${cardboard.value.toFixed(2)}
  2. Garrafa       ${bottle.quantity.toString().padStart(10, ' ')}x   $ ${bottle.value.toFixed(2)}
  3. Vidro         ${glass.quantity.toString().padStart(10, ' ')}x   $ ${glass.value.toFixed(2)}
  4. Latinha       ${tin.quantity.toString().padStart(10, ' ')}x   $ ${tin.value.toFixed(2)}
  5. Fio           ${wire.quantity.toString().padStart(10, ' ')}x   $ ${wire.value.toFixed(2)}
  6. Plástico Duro ${rigidPlastic.quantity.toString().padStart(10, ' ')}x   $ ${rigidPlastic.value.toFixed(2)}
  7. Circuito      ${circuit.quantity.toString().padStart(10, ' ')}x   $ ${circuit.value.toFixed(2)}
  8. Antena        ${antenna.quantity.toString().padStart(10, ' ')}x   $ ${antenna.value.toFixed(2)}
  -----------------------------------------
  Valor Total:                   $ ${total.toFixed(2)}
  -----------------------------------------
  Realizada em ${moment().format('LL')}
  `
}
