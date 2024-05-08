function start() {
	console.log("------------- Method Invocation pattern ----------------");
	
	var person = {
		name:"Calvin",
		age:25,
		greet:function() {
			console.log("Hello! My name is",this.name)
		}
	}
	
	person.greet();
	
	console.log("------------- Function Invocation pattern ----------------");
	
	person.calculateAge = function(yearsOld) {
		function calculateYearsOld() {
			return this.age + yearsOld
		}
		console.log("I will be "+calculateYearsOld()+" years in "+yearsOld+" years");
	}
	
	person.calculateAge(10);

	console.log("-------------- Let's fix this --------------------------");
	person.calculateAge = function(yearsOld) {
		function calculateYearsOld() {
			return this.age + yearsOld
		}
		calculateYearsOld = calculateYearsOld.bind(this);
		console.log("I will be "+calculateYearsOld()+" years in "+yearsOld+" years");
	}
	
	person.calculateAge(10);
	
	console.log("-------------- Constructor Invocation pattern -----------");
	
	var Person2 = function(name) {
		this.name = name;
	}
	
	Person2.prototype.greet = function() {
		return this.name + " says hi!";
	}
	
	console.log(new Person2("Calvin").greet());
	console.log(Person2);
	
	console.log("----------- Apply Invocation pattern --------");
	
	Person2.prototype.waveTo = function(who) {
		return this.name+" waves to "+who.name
	}
	
	let calvin = new Person2("Calvin");
	let hobbes = new Person2("Hobbes");
	let rover = Object.create({"name":"Rover"});

	console.log(calvin.waveTo.apply(hobbes,[calvin]));
	console.log(calvin.waveTo.apply(rover,[hobbes]));
	console.log(rover);
}