





function createInstructor(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName
    }
}



function myCreateInstructor(firstName, lastName) {
    return {
        firstName,
        lastName
    }
}


var favoriteNumber = 42;

var instructor = {
    firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"


function makeObj(favNum, firstName) {
    return {
        [favNum]: firstName,
        [firstName]: favNum
    }
}



var instructor2 = {
    firstName: "Colt",
    sayHi: function () {
        return "Hi!";
    },
    sayBye: function () {
        return this.firstName + " says bye!";
    }
}

let instructor3 = {
    firstname: 'Colt',
    sayHi() {
        return 'Hi!';
    },
    sayBye() {
        return this.firstName = 'says bye!';
    },

}

// I need some help on this one ): 

const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"

function createAnimal(species, verb, noise) {
    return {
        species,
        [verb]() {
            return noise;
        }
    }
}



