<script>
class Vehicle {
	constructor(paramName,paramType){
		this.Name = paramName;
		this.Type = paramType;
  
	}

      getName (){
     	return this.Name;
     }

      getType (){
     	return this.Type;
     }
}

class Car extends Vehicle{
  constructor(paramName,paramType){
		super(paramName,paramType);
		
	}
}

class Bike extends Vehicle{
  constructor(paramName,paramType){
		super(paramName,paramType);
		
	}
}

class Scooter extends Vehicle{
  constructor(paramName,paramType){
		super(paramName,paramType);
		
	}
}

 var objCar = new Car('Xyl0','SUV');
 console.log(`Vehicle is ${objCar.getName()} of type ${objCar.getType()}`)

 var objBike = new Bike('FatBoy','Cruiser');
 console.log(`Vehicle is ${objBike.getName()} of type ${objBike.getType()}`)

 var objScooter = new Scooter('Vespa','Moped');
 console.log(`Vehicle is ${objScooter.getName()} of type ${objScooter.getType()}`)
</script>