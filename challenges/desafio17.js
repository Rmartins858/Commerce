db.resumoProdutos.insertOne({
  franquia: "McDonalds",
  totalProdutos: db.produtos.count({}),
});
db.resumoProdutos.find(
  {},
  {
    _id: false,
    franquia: 1,
    totalProdutos: 1,
  },
);
