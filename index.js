/**
 *
 * @param {string} name
 * @param {number} age
 * @param {Car} car
 * @constructor
 */

function Human (name, age) {
    this.name = name;
    this.age = age;
    this.car = [];

    this.showInfo = () => {
       console.log(`${this.name}, ${this.age}`);
    };

    this.assignCar = function (car) {
        if (age > 18) {
            this.car.push(car);
            car.owner.push(this);
        } else {
            console.log(`${this.name}'s age is less then 18`);
        };
    };
};

/**
 *
 * @param {string} brand
 * @param {string} model
 * @param {number} year
 * @param {string} carNumber
 * @constructor
 */

function Car (brand, model, year, carNumber) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.carNumber = carNumber;
        this.owner = [];

        this.carInfo = function () {
        console.log(`${this.brand}, ${this.model}, ${this.year}, ${this.carNumber}`);
        this.owner.forEach((element) => {
            element.showInfo();
        });
    };
};


const olga = new Human("Olga", 23);
olga.showInfo();
const andrii = new Human("Andrii", 26);
andrii.showInfo();
const mary = new Human ("Mary", 16);
mary.showInfo();
const ruby = new Human("Ruby", 5);
ruby.showInfo();

const mazda = new Car("Mazda", "MAZDA3", 2003, "KR2931CS");
mazda.carInfo();
olga.assignCar(mazda);

const bmw1 = new Car("BMW", "E92", 2019, "KE2393CG");
bmw1.carInfo();
mary.assignCar(bmw1);

const bmw2 = new Car("BMW", "X5", 2015, "KE3493JF");
bmw2.carInfo();
ruby.assignCar(bmw2);

const audi = new Car("Audi", "A3", 2009, "AU3838LD");
audi.carInfo();
andrii.assignCar(audi);






