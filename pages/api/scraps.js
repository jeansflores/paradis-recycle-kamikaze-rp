export default function handler(req, res) {
  const scraps = [
    {
      id: 1,
      key: 'cardboard',
      name: 'Papelão',
      purchase_price: 3.00,
      sale_price: 5.00
    },
    {
      id: 2,
      key: 'bottle',
      name: 'Garrafa',
      purchase_price: 3.00,
      sale_price: 8.00
    },
    {
      id: 3,
      key: 'glass',
      name: 'Vidro',
      purchase_price: 3.00,
      sale_price: 5.00
    },
    {
      id: 4,
      key: 'tin',
      name: 'Latinha',
      purchase_price: 4.00,
      sale_price: 15.00
    },
    {
      id: 5,
      key: 'wire',
      name: 'Fio',
      purchase_price: 6.00,
      sale_price: 18.00
    },
    {
      id: 6,
      key: 'rigid_plastic',
      name: 'Plástico Duro',
      purchase_price: 6.00,
      sale_price: 18.00
    },
    {
      id: 7,
      key: 'circuit',
      name: 'Circuito',
      purchase_price: 6.00,
      sale_price: 18.00
    },
    {
      id: 8,
      key: 'antenna',
      name: 'Antena',
      purchase_price: 6.00,
      sale_price: 18.00
    }
  ]

  res.status(200).json(scraps)
}
