// VARIABLES & DATA TYPES

// 1. Create a variable using let and store your name.
let name = "Aalan";
console.log(typeof name);

// 2. Create a variable containing your age.
let age = 24;
console.log(age);
console.log(typeof age);

// 3. Create a variable containing true.
let isStudent = true;
console.log(isStudent);
console.log(typeof isStudent);

// 4. Declare a variable without assigning any value.
let value;
console.log(value);
console.log(typeof value);

// 5. Create a variable containing null.
let data = null;
console.log(data);
console.log(typeof data);

// 6. Five variables with different data types.
let myString = "Hey!!!";
let myNumber = 1120;
let myBoolean = true;
let myUndefined;
let myNull = null;
console.log(myString);
console.log(myNumber);
console.log(myBoolean);
console.log(myUndefined);
console.log(myNull);

// 7. Qualification and its data type.
let qualification = "B.Tech IT";
console.log(typeof qualification);

// 8. Salary and check whether its data type is number.
let salary = 45000;
console.log(typeof salary === "number");

// 9. "100" and 100.
let stringNumber = "100";
let actualNumber = 100;
console.log(typeof stringNumber);
console.log(typeof actualNumber);

// 10. Name, age, qualification, and working status.
let studentName = "Aalan";
let studentAge = 24;
let studentQualification = "B.Tech IT";
let workingStatus = false;
console.log(studentName, typeof studentName);
console.log(studentAge, typeof studentAge);
console.log(studentQualification, typeof studentQualification);
console.log(workingStatus, typeof workingStatus);


// ARRAYS


// 11. Five fruits.
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log(fruits);

// 12. Five numbers - print first element.
let numbers = [11, 20, 24, 02, 23];
console.log(numbers[0]);

// 13. Six colors - print third element.
let colors = ["Red", "Blue", "Green", "Yellow", "Black", "White"];
console.log(colors[2]);

// 14. Five mobile brands - print last using length.
let mobiles = ["Samsung", "Apple", "OnePlus", "Vivo", "Oppo"];
console.log(mobiles[mobiles.length - 1]);

// 15. Seven numbers - print second-last using length.
let sevenNumbers = [11, 20, 23, 02, 24, 05, 18];
console.log(sevenNumbers[sevenNumbers.length - 2]);

// 16. Favorite foods - first, third, and last.
let foods = ["Pizza", "Burger", "Biryani", "Pasta", "Dosa"];
console.log(foods[0]);
console.log(foods[2]);
console.log(foods[foods.length - 1]);

// 17. Five cricketers - print fourth.
let cricketers = ["Virat", "Rohit", "Dhoni", "Bumrah", "Gill"];
console.log(cricketers[3]);

// 18. Toys - print last dynamically.
let toys = ["Car", "Doll", "Ball", "Robot", "Puzzle"];
console.log(toys[toys.length - 1]);

// 19. Ten values - first, last, second-last.
let tenValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(tenValues[0]);
console.log(tenValues[tenValues.length - 1]);
console.log(tenValues[tenValues.length - 2]);

// 20. Fruits, toys, and cricketer name.
let mixedArray = ["Apple", "Mango", "Car", "Robot", "Virat"];
console.log(mixedArray);
console.log(mixedArray[0]);
console.log(mixedArray[2]);
console.log(mixedArray[4]);


// OBJECTS


// 21. Object with name, age, city.
let person = {name: "Rahul", age: 21, city: "Puducherry"};
console.log(person);

// 22. Name, qualification, company.
let employee = {name: "Aalan", qualification: "B.Tech IT", company: "STACKLY"};
console.log(employee.company);

// 23. Object containing fruits array.
let fruitObject = {fruits: ["Apple", "Mango", "Banana", "Orange"]};
console.log(fruitObject.fruits[1]);

// 24. Object containing toys array.
let toyObject = {toys: ["Car", "Doll", "Robot", "Ball"]};
console.log(toyObject.toys[toyObject.toys.length - 1]);

// 25. Cricketer and team.
let cricket = {cricketer: "Virat Kohli", team: "India"};
console.log(cricket.cricketer);

// 26. fruitName, toyName, cricketer.
let details = {fruitName: "Mango", toyName: "Robot", cricketer: "Rohit Sharma"};
console.log(details.fruitName);
console.log(details.toyName);
console.log(details.cricketer);

// 27. Students and courses arrays.
let college = {students: ["Rahul", "Amit", "Priya"], courses: ["JavaScript", "Python", "Java"]};
console.log(college.students[0]);
console.log(college.courses[1]);

// 28. Mobile array - print third mobile.
let mobileObject = {mobile: ["Samsung", "Apple", "OnePlus", "Vivo"]};
console.log(mobileObject.mobile[2]);

// 29. Employee name, skills, experience.
let employeeDetails = {employeeName: "Aalan", skills: ["HTML", "CSS", "JavaScript"], experience: 2};
console.log(employeeDetails.skills[1]);

// 30. Personal information - print three properties.
let personalInfo = {name: "Aalan", age: 24, city: "Neyveli", qualification: "B.Tech IT", country: "India"};
console.log(personalInfo.name);
console.log(personalInfo.age);
console.log(personalInfo.city);


// ARITHMETIC OPERATORS


// 31. Addition, subtraction, multiplication, division.
let num1 = 23;
let num2 = 20;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

// 32. Remainder.
let a = 20;
let b = 24;
console.log(a % b);

// 33. 2 ** 5.
console.log(2 ** 5);

// 34. All six arithmetic operations.
let x = 11;
let y = 2;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

// 35. Increase 10 by 5 using +.
let a = 10;
a = a + 5;
console.log(ten);


// INCREMENT & DECREMENT


// 36. Pre-increment.
let preIncrement = 10;
console.log(++preIncrement);

// 37. Post-increment.
let postIncrement = 10;
console.log(postIncrement++);

// 38. Pre-decrement.
let preDecrement = 20;
console.log(--preDecrement);

// 39. Post-decrement.
let postDecrement = 20;
console.log(postDecrement--);

// 40. Difference between pre-increment and post-increment.
let a = 23;
let b = 24;
console.log(++a);
console.log(b++);
console.log(b);

// DEMONSTRATION
// ++a → 23 becomes 24, then prints 24.
// b++ → prints 24 first, then becomes 25


// ASSIGNMENT OPERATORS


// 41. a=20 and b=10.Use +=
let a = 20;
let b = 10;
a += b;
console.log(a);

// 42. a=50 and b=20.Use -=
let a = 50;
let b = 20;
a -= b;
console.log(a);

// 43. a=10 and b=5.Use *=
let a = 10;
let b = 5;
a *= b;
console.log(a);

// 44. a=100 and b=10.Use /=
let a = 100;
let b = 10;
a /= b;
console.log(a);

// 45. a=25 and b=4.Use %=
let a = 25;
let b = 4;
a %= b;
console.log(a);


// COMPARISON, LOGICAL & TERNARY


// 46. Compare two numbers. <,>,<= and >=
let firstNumber = 20;
let secondNumber = 23;
console.log(firstNumber < secondNumber);
console.log(firstNumber > secondNumber);
console.log(firstNumber <= secondNumber);
console.log(firstNumber >= secondNumber);

// 47.  Compare a number and a string using both == and ===
let numberValue = 1120;
let stringValue = "1120";
console.log(numberValue == stringValue);
console.log(numberValue === stringValue);

// 48. Two conditions using numbers and Combine them using  &&, ||, !
let condition1 = 11 > 20;
let condition2 = 23 > 20;
console.log(condition1 && condition2);
console.log(condition1 || condition2);
console.log(!condition1);

// 49. Ternary operator - age eligibility.
let eligibleAge = 21;
console.log(eligibleAge >= 18 ? "Eligible" : "Not Eligible");

// 50. Ternary operator - marks.
let marks = 75;
console.log(marks >= 35 ? "Pass" : "Fail");
