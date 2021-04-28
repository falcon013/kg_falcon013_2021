let array = []
process.argv.forEach((val, index) => {
    if (array.length > 2 || index > 1) {
        array.push(val)
    }
})

function numbersToString(numbers) {
    let results = []
    let obj = {
        0: "Zero",
        1: "One",
        2: "Two",
        3: "Three",
        4: "Four",
        5: "Five",
        6: "Six",
        7: "Seven",
        8: "Eight",
        9: "Nine"
    }
    let array = numbers.filter(el => !isNaN(el))

    for (const el of array) {
        const elNumbers = el.split('');
        const elString = elNumbers.map(el => {
            return obj[el];
        })

        results.push(elString.join(''));
    }
    return results.join(', ')
}

const sum = numbersToString(array);
console.log(sum)




