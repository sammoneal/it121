const people = { friends: [] };

const friend1 = { first: "Bob", last: "Dylan", id: 1 };
const friend2 = { first: "David", last: "Bowie", id: 2 };
const friend3 = { first: "Elvis", last: "Presley", id: 3 };
const friend4 = { first: "Mick", last: "Jager", id: 4 };

people.friends.push(friend1);
people.friends.push(friend2);
people.friends.push(friend3);
people.friends.push(friend4);

console.log(people.friends);
