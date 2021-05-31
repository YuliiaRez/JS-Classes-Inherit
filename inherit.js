'use strict';
/*Для базового класса Vehicle реализовать:
- свойства:
--- dimensions - габариты (объект с длиной, шириной, высотой),
--- brand - марка,
--- model - модель,
--- manufactureDate - дата производства (использовать встроенный объект Date).
- методы:
--- getMaxSize() - возвращает максимальный габаритный размер,
--- getAge() - возвращает количество лет со дня производства. */
class Vehicle {
    constructor(brand, model, { a, b, c }, year, month = 0) {
        this._brand = brand;
        this._model = model;
        this._dimensions = { a, b, c };
        this._makeDate = new Date(year, month);
    }
    getMaxSize() {
        return Math.max(...Object.values(this._dimensions));
    }
    getAge() {
        const date = new Date();
        return date.getFullYear() - this._makeDate.getFullYear();
    }
}

/*Дочерний класс PassengerTransport расширяется:
- свойствами:
--- passengerLimit - максимальное количество пассажирских мест,
--- passengerCount - количество занятых пассажирских мест,
- методом addPassenger() для добавления еще одного пассажира 
с проверкой возможности добавления (есть ли еще незанятые места) -
 возвращает истину (если пассажир добавлен) или ложь (если не добавлен). */
class PassengerTransport extends Vehicle {
    constructor(brand, model, { a, b, c }, year, passengerLimit, passengerCount) {
        super(brand, model, { a, b, c }, year);
        this._passengerLimit = passengerLimit;
        this._passengerCount = passengerCount;
    }
    addPassenger() {
        return (+this._passengerCount < +this._passengerLimit ? Boolean(this._passengerCount++) : false);
    }

}
/**Дочерний класс FreightTransport расширяется:
- свойством:
--- capacity - грузоподъемность,
- методом checkLoadingPossibility(weight) - для проверки возможности погрузки массы weight. Возвращает булеан. */
class FreightTransport extends Vehicle {
    constructor(brand, model, { a, b, c }, year, capacity) {
        super(brand, model, { a, b, c }, year);
        this._capacity = capacity;
    }
    checkLoadingPossibility(weight) {
        return (weight <= this._capacity ? true : false);
    }
}
const passTr = new PassengerTransport('ford', 'focus', { a: 4, b: 3, c: 5 }, '2010', 5, 3)
console.log(passTr);
console.log('passTr.getMaxSize()', passTr.getMaxSize());
console.log('passTr.getAge()', passTr.getAge());
console.log('passTr.addPassenger()', passTr.addPassenger());

const freightTr = new FreightTransport('renault', 'kangoo', { a: 5, b: 2, c: 3 }, '2012', 5000);
console.log(freightTr);
console.log('freightTr.getMaxSize()', freightTr.getMaxSize());
console.log('freightTr.getAge()', freightTr.getAge());
console.log('freightTr.checkLoadingPossibility(6000)', freightTr.checkLoadingPossibility(6000));


