function start() {

	let HelloWorld = function() {
		this.name = "World";
		this.message = "Hello";
	}
	
	let helloInstance = new HelloWorld();
	
	HelloWorld.prototype.name = "Jaska";
	HelloWorld.prototype.message2 = "Goodbye";
	
	console.log(helloInstance.name);
	console.log(helloInstance.message);
	console.log(helloInstance.message2);
	console.log(helloInstance);

	let myObject = {
		myVar:10,
		myFunction:function() {
			return this.myVar+10;
		}
	}
	console.log(myObject);
	
	let object1 = Object.create(myObject);
	let object2 = Object.create(myObject);
	console.log(object1);
	console.log(object2);
	console.log(object1.myFunction());
	console.log(object2.myFunction());
	object1.myVar = 15;
	object2.myVar = 100;
	console.log(object1.myFunction());
	console.log(object2.myFunction());
	console.log(object1);
	console.log(object2);
	myObject.myVar = 150;
}