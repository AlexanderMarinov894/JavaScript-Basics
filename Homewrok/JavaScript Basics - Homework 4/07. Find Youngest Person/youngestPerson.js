function findYoungestPerson(persons) {
    var minAge = 1000;
    var youngestPerson = {};
    for (var person in persons) {
        var currentAge = persons[person].age;
        if (currentAge < minAge) {
            youngestPerson = persons[person];
            minAge = currentAge;
        }
    }

    console.log('The youngest person is ' + youngestPerson.firstname + ' '
                + youngestPerson.lastname + ' (' + youngestPerson.age + ' years old).');
}

var persons = [
    { firstname : 'George', lastname: 'Kolev', age: 32},
    { firstname : 'Bay', lastname: 'Ivan', age: 81},
    { firstname : 'Baba', lastname: 'Ginka', age: 40}]

console.log();
findYoungestPerson(persons);