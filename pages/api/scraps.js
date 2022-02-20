export default function handler(req, res) {
  const scraps = [
    {
      id: 1,
      name: 'Papelão',
      purchase_price: 3.00,
      sale_price: 5.00
    },
    {
      id: 2,
      name: 'Garrafa',
      purchase_price: 3.00,
      sale_price: 8.00
    },
    {
      id: 3,
      name: 'Vidro',
      purchase_price: 3.00,
      sale_price: 5.00
    },
    {
      id: 4,
      name: 'Latinha',
      purchase_price: 4.00,
      sale_price: 15.00
    },
    {
      id: 5,
      name: 'Fio',
      purchase_price: 6.00,
      sale_price: 18.00
    },
    {
      id: 6,
      name: 'Plástico Duro',
      purchase_price: 6.00,
      sale_price: 18.00
    },
    {
      id: 7,
      name: 'Circuito',
      purchase_price: 6.00,
      sale_price: 18.00
    },
    {
      id: 8,
      name: 'Antena',
      purchase_price: 6.00,
      sale_price: 18.00
    }
  ]

  res.status(200).json(scraps)
}
