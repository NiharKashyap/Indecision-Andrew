const square = function (x)
{
	return x*x;
};

const squareArrow = (x) => x*x;


// const firstName = (x) => {
// 	return x.split(' ')[0]
// };

const firstName = (x) => (x.split(' ')[0]); 


console.log(firstName('Nihar Kashyap'));
console.log(squareArrow(11));
