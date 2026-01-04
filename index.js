// 1. Створити об’єкт user з наступними властивостями:
// ім'я,
// прізвище,
// електронна адреса,
// password,
// номер телефона,
// адреса (є рядком або *об'єктом з властивостями місто, вулиця, дім, квартира) ;

const customer = {
  firstName: "Anna",
  lastName: "Smith",
  email: "anna@example.com",
  password: "qwerty123",
  telNumber: "+1234567890",
  adress: {
    city: "New York",
    street: "Main St",
    houseNumber: 9,
    zipCode: 10001,
  },
};

// 2. Написати функцію, яка приймає об’єкт юзера і виводить вітання типу “Доброго дня, (ім’я_юзера) (прізвище юзера)”

function greeting(customer) {
  console.log(`Hello, ${customer.firstName} ${customer.lastName}!`);
}
greeting(customer);

// 3. Написати функцію, яка приймає об’єкт і виводить в консоль всі його властивості (за допомогою циклу for..in)

function showObjects(obj) {
  for (const key in obj) {
    console.log(key, obj[key]);
  }
}

showObjects(customer);

// 4. Створити об’єкт car (машина) з властивостями:
// колір
// модель
// марка
// об’єм двигуна
// місткість (можлива кількість пасажирів)
// поточна швидкість (speed)
// максимальна можлива швидкість (maxSpeed)

// та методами:
// accelerate (збільшення швидкості): метод приймає кількість кілометрів/годину (ціле число) та додає до поточної швидкості (speed), але результат не має перевищувати максимально можливої швидкості для цієї машини

// deaccelerate (зменшення швидкості): метод приймає ціле число (кількість кілометрів на годину) і зменшує поточну швидкість (speed) на вказану, але результат не може бути від’ємним

// stop (зупинка) - метод нічого не приймає, при виклику встановлює поточну швидкість (speed) рівною 0

const vehicle = {
  color: "grey",
  brand: "Audi",
  model: "A4",
  engineVolume: 2.0,
  capacity: 5,
  speed: 40,
  maxSpeed: 240,
  accelerate(a) {
    let newSpeed = this.speed + a;
    if (newSpeed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    } else {
      this.speed = newSpeed;
    }
    console.log(`Current speed: ${this.speed} km/h`);
  },
  deaccelerate(b) {
    let newSpeed = this.speed - b;
    if (newSpeed < 0) {
      this.speed = 0;
    } else {
      this.speed = newSpeed;
    }
    console.log(`Current speed: ${this.speed} km/h`);
  },
  stop() {
    this.speed = 0;
    console.log(`Current speed: ${this.speed} km/h`);
  },
};

// Checking:
vehicle.accelerate(20);
vehicle.deaccelerate(20);
vehicle.stop();

// 5. На основі об’єкта з завдання №4 розробити функцію-конструктор для масового створення таких об’єктів за переданими параметрами. В якості перевірки створити декілька екземплярів таких об’єктів з різними властивостями

function Car(color, brand, model, engineVolume, capacity, speed, maxSpeed) {
  this.color = color;
  this.brand = brand;
  this.model = model;
  this.engineVolume = engineVolume;
  this.capacity = capacity;
  this.speed = speed;
  this.maxSpeed = maxSpeed;
  this.accelerate = function (a) {
    let newSpeed = this.speed + a;
    if (newSpeed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    } else {
      this.speed = newSpeed;
    }
    console.log(
      `${this.brand} ${this.model} current speed: ${this.speed} km/h`
    );
  };
  this.deaccelerate = function (b) {
    let newSpeed = this.speed - b;
    if (newSpeed < 0) {
      this.speed = 0;
    } else {
      this.speed = newSpeed;
    }
    console.log(
      `${this.brand} ${this.model} current speed: ${this.speed} km/h`
    );
  };
  this.stop = function () {
    this.speed = 0;
    console.log(
      `${this.brand} ${this.model} stopped. Speed: ${this.speed} km/h`
    );
  };
}

const audi = new Car("grey", "Audi", "A4", 2.0, 5, 40, 200);
const bmw = new Car("black", "BMW", "X5", 3.0, 5, 0, 200);
const porche = new Car("burgundy", "Porche", "911", 2.0, 5, 60, 200);

// Checking:
audi.accelerate(20);
porche.deaccelerate(20);
bmw.stop();
