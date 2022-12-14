db.produtos.updateMany(
    {
      nome: { $eq: "Big Mac" },
    },
    {
      $set: {
        ultimaModificacao: { $type: "timestamp" },
      },
    },
  );
  
  db.produtos.find(
    {
      ultimaModificacao: { $exists: true },
    },
    {
      _id: false,
      nome: 1,
    },
  );