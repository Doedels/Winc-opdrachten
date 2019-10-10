const car = {
    brand: "Nissan",
    getBrand: function () {
        console.log(this.brand);
    }
};

const getCarBrand = car.getBrand;

getCarBrand();   // output = Nissan -> ik had het fout :(


const car2 = {
    brand: "Nissan",
    getBrand: function () {
        console.log(this.brand);
    }
};

const getCarBrand2 = car2.getBrand;

console.log(getCarBrand2);   // output: [Function: getBrand]


const car3 = {
    brand: "Nissan",
    getBrand: function () {
        console.log(this.brand);
    }
};
const getCarBrand3 = car3.getBrand.bind(car3);
getCarBrand3();   // output: Nissan

// 2c
<button id="btn" type="button">Get the car's brand</button>

const car = {
    brand: "Nissan",
    getBrand: function () {
        console.log(this.brand);
    }
};

const el = document.getElementById("btn");
el.addEventListener("click", car.getBrand);

// Waarnaar refereert "this" op het moment dat je car.getBrand uitprobeert te voeren? 
// antw: het window object.
// hmm. dat was dus fout, het is het el object

// oplossing met bind().
<button id="btn" type="button">Get the car's brand</button>
 
 var car = {
   brand: "Nissan",
   getBrand: function(){
     console.log(this.brand);
   }
 };
  
 var el = document.getElementById("btn");
 el.addEventListener("click", car.getBrand.bind(car));

// 2d

const car = {
    brand: "Nissan",
    getBrand: function(){
      const printBrandName = function(){
        console.log(this.brand);
      };
      return printBrandName();
    }
  };
   
  car.getBrand();

// Waarnaar refereert this nu? 
// antw: window object

const car = {
    brand: "Nissan",
    getBrand: function(){
      const self = this;
       // naast self kun je deze variable noemen zoals je wilt. 
      // Je ziet ook vaak : that, _this, me, context, etc
      const printBrandName = function(){
        console.log(self.brand);
      };
      return printBrandName();
    }
  };
   
  car.getBrand();   // output: Nissan 

// Waarnaar refereert het this keyword nu? 
// antw: naar het car object (via self)
// Hoe kan het dat je nu wel access hebt tot het brand "Nissan"? 
// antw: de innerfunctie heeft toegang tot self, maar niet this. 
// door self = this te doen wordt de verwijzing doorgegeven van buiten de scope naar binnen de scope

