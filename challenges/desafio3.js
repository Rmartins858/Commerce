db.produtos
  .find(
    {},
    {
      nome: 1,
      vendidos: 1,
      _id: false,
    },
  )
  .limit(1);
