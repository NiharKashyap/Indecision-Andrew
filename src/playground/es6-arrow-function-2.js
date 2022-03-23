const add = (a,b) =>
{
	return a+b;
};


console.log(add(56,1));

const user = {
	name: 'Nihar',
	cities:['Philadelphia', 'New York', 'Dublin'],
	printPlacesLived() {
		this.cities.forEach((city) => {
			console.log(this.name + ' has lived in ' + city);
		});
	}
};

const multiplier = {
	numbers : [1,2,3],
	multiply_by : 2,
	multiply(){
		return this.numbers.map((number) => this.multiply_by * number);
	}
};


console.log(multiplier.multiply());

// user.printPlacesLived();