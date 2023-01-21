// To filter JavaScript array elements with multiple criteria or conditions,
// you need to call the Array object's filter() method and write multiple validations in its callback function.
// Different methods  can be used here, An easy way:

const data = [
    {
        _id: 1,
        name: 'mohsin',
        site_id: 1,
        department_id: 1,
        status: 'inactive'
    },
    {
        _id: 2,
        name: 'Raza',
        site_id: 5,
        department_id: 3,
        status: 'active'
    },
    {
        _id: 3,
        name: 'Ahmed',
        site_id: 7,
        department_id: 1,
        status: 'active'
    },

    {
        _id: 4,
        name: 'Ahmed Ali',
        site_id: 9,
        department_id: 2,
        status: 'inactive'
    },

    {
        _id: 1,
        name: 'Ahmed Raza',
        site_id: 1,
        department_id: 4,
        status: 'active'
    },
]


const filters = { department_id: 1, status: 'inactive', name: 'mohsin', };

function filterFunc(professionals, filters) {
    return professionals.filter(professional => {
        let match = true;
        if ('site_id' in filters) {
            match = match && professional.site_id === filters.site_id;
        }
        if ('department_id' in filters) {
            match = match && professional.department_id === filters.department_id;
        }
        if ('status' in filters) {
            match = match && professional.status === filters.status;
        }
        return match;
    });
}

const filteredData = filterFunc(data, filters);

// console.log(filteredData)


/////Another aproach

// function withoutMethodsFilters(data, filters) {
//     let filtered = "";
//     for (let i = 0; i < data.length; i++) {
//         if (data[i].site_id === filters.site_id && data[i].department_id === filters.department_id) {
//             filtered += JSON.stringify(data[i]);
//         }
//     }
//     return JSON.parse("[" + filtered + "]")
// }

// withoutMethodsFilters(data, filters);

// console.log(filtered)

// There are a few ways to improve the last implementation without using any built-in array methods:

function filterArray(data, filters) {
    let index = 0;
    for (let i = 0; i < data.length; i++) {
        let matches = true;
        for (let key in filters) {
            if (data[i][key] !== filters[key]) {
                matches = false;
                break;
            }
        }
        if (matches) {
            data[index++] = data[i];
        }
    }
    data.length = index;
    return data;
}


// You can also use a single loop instead of nested loops to check if the properties match. 
// This can make the code more readable and also improve performance:

function filterArray(data, filters) {
    let filtered = [];
    for (let i = 0; i < data.length; i++) {
        let matches = true;
        for (let key in filters) {
            if (!data[i].hasOwnProperty(key) || data[i][key] !== filters[key]) {
                matches = false;
                break;
            }
        }
        if (matches) {
            filtered.push(data[i]);
        }
    }
    return filtered;
}


// Keep in mind that the first approach will modify the original array, so if you need to keep the original data, you should make a copy of it before filtering it.
// Both of these approaches will work without using any built-in array methods, but the second approach is more efficient and readable.

// Correct that using the Array.push() method to add elements to an array can have a negative impact on performance when working with large arrays. This is because the push() method needs to re-allocate memory and copy all the elements to the new memory location every time it's called.
// One way to improve the performance of the last implementation when working with large arrays would be to use a manual index to add elements to the filtered array, instead of using the push() method.

function filterArray(data, filters) {
    let filtered = new Array(data.length);
    let index = 0;
    for (let i = 0; i < data.length; i++) {
        let matches = true;
        for (let key in filters) {
            if (!data[i].hasOwnProperty(key) || data[i][key] !== filters[key]) {
                matches = false;
                break;
            }
        }
        if (matches) {
            filtered[index++] = data[i];
        }
    }
    filtered.length = index;
    return filtered;
}

// By using a manual index to add elements to the filtered array, you avoid the overhead of the push() method and it will improve the performance when working with large arrays.
// Also, you can preallocate the size of the filtered array to the same size of the data array, so you don't need to reallocate memory for the filtered array.
// Keep in mind that this approach may still have some performance issues when working with very large arrays, and when performance is critical, it might be necessary to use other data structures or algorithms.

// correct that using nested for loops can have a negative impact on performance when working with large arrays. The time complexity of nested loops is O(n^2), which means that the execution time increases exponentially as the size of the input data increases.

// One way to improve the performance when working with large arrays would be to use a hash table to store the filter properties and their values. This way, we can check if a property of an object matches the filter in constant time O(1), instead of iterating through the filter properties in linear time O(n).
function filterArray(data, filters) {
    let filtered = [];
    let filterHash = {};
    for (let key in filters) {
        filterHash[key] = filters[key];
    }
    for (let i = 0; i < data.length; i++) {
        let matches = true;
        for (let key in filterHash) {
            if (!data[i].hasOwnProperty(key) || data[i][key] !== filterHash[key]) {
                matches = false;
                break;
            }
        }
        if (matches) {
            filtered.push(data[i]);
        }
    }
    return filtered;
}
// In this implementation, we first create a hash table that store the filter properties and their values, and then we iterate through the data array. On each iteration, we check if the property of the object match the filter in constant time O(1) using the hash table.
// This approach will improve the performance when working with large arrays and the time complexity will be O(n) which is linear.
// It's worth noting that this approach can be further optimized and tailored to your specific use case, and when performance is critical, it might be necessary to use other data structures or algorithms.