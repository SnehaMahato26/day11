const student = {
    name: "Subham Mahato",
    rollNumber: 234,
    marks: {
        math: 90,
        science: 70,
        english: 80,
        history: 40
    },
    
    getAverageMarks: function() {
        let totalMarks = 0;
        let subjects = Object.keys(this.marks);
        subjects.forEach(subject => {
            totalMarks += this.marks[subject];
        });
        return totalMarks / subjects.length;
    },
    
    checkPassOrFail: function() {
        return this.getAverageMarks() > 40 ? "Pass" : "Fail";
    }
};

console.log("Student Name:", student.name);
console.log("Roll Number:", student.rollNumber);
console.log("Average Marks:", student.getAverageMarks());
console.log("Result:", student.checkPassOrFail());



const library = {
    books: {
       "Atomic Habits": { author: "James Clear", availableCopies: 3 },
       "The Alchemist": { author: "Paulo Coelho", availableCopies: 5 },
    },
    
    borrowBook: function(title) {
        if (this.books[title] && this.books[title].availableCopies > 0) {
            this.books[title].availableCopies--;
            console.log(`You have borrowed "${title}".`);
        } else {
            console.log(`Sorry, "${title}" is not available.`);
        }
    },
    returnBook: function(title) {
        if (this.books[title]) {
            this.books[title].availableCopies++;
            console.log(`You have returned "${title}".`);
        } else {
            console.log(`Sorry, "${title}" does not belong to this library.`);
        }
    }
};

console.log("Library Books:", library.books);



function generateTable(n, limit) {
    for (let i = 1; i <= limit; i++) {
        console.log(`${n} x ${i} = ${n* i}`);
    }
}

generateTable(12, 10);




function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
fizzBuzz(9);




function revString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(revString("sneha"));




function removeDuplicates(arr) {
    let a= [];
    for (let i = 0; i < arr.length; i++) {
        if (!a.includes(arr[i])) {
            a.push(arr[i]);
        }
    }
    return a;
}
console.log(removeDuplicates([9,8,8,6,5,9,7,6]));




function longestWord(sentence) {
    let words = sentence.split(" ");
    let longest = "";
    for (let w of words) {
        if (w.length > longest.length) {
            longest = w;
        }
    }
    return longest;
}
console.log(longestWord("my hobby is drawing and painting"));




function firstUniqueCharacter(str) {
    let Count = {};
    for (let char of str) {
        Count[char] = (Count[char] || 0) + 1;
    }
    for (let char of str) {
        if (Count[char] === 1) {
            return char;
        }
    }
    return null;
}
console.log(firstUniqueCharacter("aabbaauia"));




function findPairs(arr, target) {
    let a = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                a.push([arr[i], arr[j]]);
            }
        }
    }
    return a;
}
console.log(findPairs([9,8,7,6,1,2,3,4], 10));