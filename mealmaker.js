let menu ={
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    },
    get appetizers() {
      return this._courses.appetizers;
    },
    get mains() {
      return this._courses.main;
    },
    get desserts(){
      return this._courses.desserts;
    },
  
    set appetizers(appetizers){
      this._courses.appetizers = appetizers;
    },
    set mains(mains){
      this._courses.mains = mains;
    },
    set desserts(desserts){
      this._courses.desserts = desserts;
    },
  
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      };
    },
    addDishToCourse(courseName, dishName, dishPrice){
      const dish = {
        name: dishName,
        price: dishPrice,
      };
      return this._courses[courseName].push(dish);    
    },
  
    getRandomDishFromCourse(courseName){
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },
  
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
      return  `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The price is ${totalPrice}`;
    },
  };
  
  
  menu.addDishToCourse('appetizers', 'salad', 10.25);
  menu.addDishToCourse('appetizers', 'spring-roll', 4.00);
  menu.addDishToCourse('appetizers', 'samosa', 15.99);
  
  menu.addDishToCourse('mains', 'fried-rice', 20.00);
  menu.addDishToCourse('mains', 'chicken wings', 25.00);
  menu.addDishToCourse('mains', 'banku', 15.00);
  
  menu.addDishToCourse('desserts', 'diet coke', 12.00);
  menu.addDishToCourse('desserts', 'coffee', 15.50);
  menu.addDishToCourse('desserts', 'ice-cream', 10.99);
  
  const meal = menu.generateRandomMeal();
  console.log(meal);