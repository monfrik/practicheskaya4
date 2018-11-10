// Напишите класс Basket (order, price, count ) со статическим totalPrice(), вычисляющим итоговую стоимость. 
// Унаследуйте от него используя родительский конструктор, причём в дочернем вызывайте метод totalPrice() и передавайте 
// его результат в соот. поле. 
class Basket{
    constructor(order, price, count){
        this.order = order;
        this.price = price;
        this.count = count;
    }
    static totalPrice() {
        return this.order*this.price*this.count;
    }
}
class GreatBasket extends Basket {
    constructor(order, price, count, result) {
        super(order, price, count);
        this.result;
    }
    totalPrice() {
        this.result = this.order*this.price*this.count;
    }
  }
  
let Ball = new GreatBasket(10,10,3);
Ball.totalPrice();
console.log(Ball.result);