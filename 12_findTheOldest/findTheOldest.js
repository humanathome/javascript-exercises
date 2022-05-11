const findTheOldest = function(people) {

	people.forEach(person => {
		if (person.yearOfDeath === undefined) person.yearOfDeath = new Date().getFullYear();
	});

const oldest = people.sort(function (a, b) {
	const lastGuy = a.yearOfDeath - a.yearOfBirth;
	const nextGuy = b.yearOfDeath - b.yearOfBirth;
	return lastGuy > nextGuy ? -1 : 1;
}, 0);

	return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
