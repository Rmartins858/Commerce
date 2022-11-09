db.produtos
  .find(
    {
      vendidos: {
        $gt: 50,
        $lt: 100,
      },
    },
    {
      nome: 1,
      _id: false,
      vendidos: 1,
    },
  )
  .sort({ vendidos: 1 });
