export default function handler(req, res) {
  const goals = [
    {
      id: 1,
      name: 'Latinha',
      quantity: 30
    },
    {
      id: 2,
      name: 'Fio',
      quantity: 20
    },
    {
      id: 3,
      name: 'Plástico Duro',
      quantity: 10
    },
    {
      id: 4,
      name: 'Circuito',
      quantity: 10
    },
    {
      id: 5,
      name: 'Antena',
      quantity: 10
    },
    {
      id: 6,
      name: 'Garrafa',
      quantity: 20
    }
  ]

  res.status(200).json(goals)
}
