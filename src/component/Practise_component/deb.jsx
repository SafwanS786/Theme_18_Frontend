function orderPizza(callback) {
  console.log("Pizza Ordered");

  callback();
}

orderPizza(function () {
  console.log("Pizza Delivered");
});
