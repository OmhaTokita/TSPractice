//Explicit type assignment are easier to read and more intentional.
//Implicit - TypeScript will "guess" the type, based on the assigned value:
//any is a type that disables type checking and effectively allows all types to be used.
//The readonly keyword can prevent arrays from being changed.
//A tuple is a typed array with a pre-defined length and types for each index.
// Even though we have a boolean, string, and number the order matters in our tuple and will throw an error.
//An enum is a special "class" that represents a group of constants (unchangeable variables).
// =>always return a number ex . function 
//boject
var student = {
    name: "Lars",
    age: 1,
    access: ["lars", 1] // tupple if gusto mo ilimit lang from number and string
};
console.log(student.name);
var Access;
(function (Access) {
    Access[Access["Admin"] = 0] = "Admin";
    Access[Access["Moderator"] = 1] = "Moderator";
    Access[Access["user"] = 2] = "user";
})(Access || (Access = {}));
//boject
var student1 = {
    name: "Lars",
    age: 1,
    access: Access.Admin
};
if (student1.access === 1) {
    console.log("Match");
}
