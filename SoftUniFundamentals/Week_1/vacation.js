function vacation(people, typeOfGroup, day) {

    let sum = 0;

    switch (typeOfGroup) {
        case "Students":
            if (day === "Friday") {
                sum = people * 8.45;
            } else if (day === "Saturday") {
                sum = people * 9.80;
            } else if (day === "Sunday") {
                sum = people * 10.46;
            }

            if (people >= 30) {
                sum = sum * 0.85;
            }
            break;

        case "Business":

            if (people >= 100) {
                people = people - 10;
            }
            if (day === "Friday") {
                sum = people * 10.90;
            } else if (day === "Saturday") {
                sum = people * 15.60;
            } else if (day === "Sunday") {
                sum = people * 16;
            }
            break;

        case "Regular":
            if (day === "Friday") {
                sum = people * 15;
            } else if (day === "Saturday") {
                sum = people * 20;
            } else if (day === "Sunday") {
                sum = people * 22.50;
            }

            if (people >= 10 && people <= 20) {
                sum = sum * 0.95;
            }
            break;
    }

    console.log(`Total price: ${sum.toFixed(2)}`);

}
vacation(30,
    "Students",
    "Sunday"
    );