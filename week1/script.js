const firstName = "Sam";
const lastName = "O'Neal";
const yearsOfStudy = "three quarters";
const goal = "become a web developer";

function introduce(first, last, years, goal) {
    return `My name is ${first} ${last}. I have been at SCC for ${years} and plan to ${goal} after completing my courses.`;
}

function main() {
    const message = introduce(firstName, lastName, yearsOfStudy, goal);
    document.write(message);
}

main();