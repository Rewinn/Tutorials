var personPrototype = {
	name: "anonymous",
	species: "Homo sapien",
	greet: function (name, mood) {
		name = name || "You";
		mood = mood || "good";

		console.log("Hello, " + name +
					" I am " + this.name + " and I am in a  "
					+ mood + " mood.");
	}
}

function Person (name) {
	this.name = name;
	return this;
}

Person.prototype = personPrototype;
jim = new Person ("Jim")


