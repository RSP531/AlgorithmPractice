//Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    //return arr2[2][1]
    let longestLength = Math.max(arr1.length, arr2.length)

    //return longestLength
    for(let i = 0; i<arr2.length;i++){
        //find the index in arr1 equal to arr2[i][1] 
        let temp = arr1.findIndex((el)=> el[1] === arr2[i][1])

        if (temp >= 0){
            arr1[temp] = [arr1[temp][0]+ arr2[i][0], arr1[temp][1] ]
        } else {
            arr1.push(arr2[i])
        }
    }

    //sort the return array alphabetically
    arr1.sort((a,b) => {
        if (b[1] > a[1]) {
            return -1;
        }
        if (a[1] > b[1]) {
            return 1;
        }
        return 0;
    })

    return arr1
}

The function updateInventory should return an array.
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) should return an array with a length of 6.
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].
Passed
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []) should return [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]].
updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) should return [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].
updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]) should return [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]].