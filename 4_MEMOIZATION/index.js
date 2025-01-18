//  implementing memoization in javascript
// 1. Memoization is an optimization technique used primarily to speed up computer programs by storing the 
// results of expensive function calls and returning the cached result when the same inputs occur again.
// 2. In simple words, memoization is a technique used to avoid repeated computations by storing the results of expensive function calls.
// 3. Memoziation ek wo technique hai jisme hum expensive function calls ke results ko store karke rakhte 
// hain taki jab bhi same inputs aaye toh hum cached result return kar sake.

let sum = 0;
function cal(n){
    for(let i=1; i<=n; i++){
        sum += i;
    }
    return sum;
}

const memozie=(func)=>{
    console.log(func);
   let cached = {};
    return function (...arg){
            console.log(arg)
            let n=arg[0];
            console.log(cached);
            if(n in cached){
                console.log('cached value',n);
                return cached[n];
            }else{
                console.log('first time calling the function',n);
                let result = func(n);
                cached[n] = result;
                return result;
            }
    }
}

console.time();
const initial = memozie(cal);
console.log(initial(5)); // first time calling the function
console.timeEnd();

console.time();
console.log(initial(5)); // second time fetch from cache result
console.timeEnd();

console.time();
console.log(initial(6)); // first time calling the function
console.timeEnd();

console.time();
console.log(initial(6)); // second time fetch from cache result
console.timeEnd();



// // Dataset for search suggestions
// const dataset = [
//     "apple", "apricot", "banana", "blueberry", "cherry",
//     "date", "fig", "grape", "guava", "kiwi",
//     "lemon", "lime", "mango", "melon", "orange",
//     "papaya", "peach", "pear", "pineapple", "plum",
//     "raspberry", "strawberry", "watermelon"
// ];

// // Memoization cache for search results
// const searchCache = {};

// // Function to filter suggestions
// const getSuggestions = (query) => {
//     if (searchCache[query]) {
//         console.log("Returning cached results for:", query);
//         return searchCache[query]; // Return cached result
//     }

//     // Simulate a computation-intensive filter (e.g., server call)
//     const result = dataset.filter(item => item.toLowerCase().includes(query.toLowerCase()));

//     // Cache the result for future queries
//     searchCache[query] = result;
//     return result;
// };

// // Handle input and update suggestions
// document.getElementById('searchInput').addEventListener('input', (e) => {
//     const query = e.target.value.trim();

//     const suggestionsList = document.getElementById('suggestions');
//     suggestionsList.innerHTML = ""; // Clear previous suggestions

//     if (query.length === 0) return; // No suggestions for empty input

//     // Get suggestions (from cache or fresh computation)
//     console.time();
//     const suggestions = getSuggestions(query);
//     console.log(suggestions);
//     console.timeEnd();
//     // Display suggestions
//     suggestions.forEach(suggestion => {
//         const li = document.createElement('li');
//         li.textContent = suggestion;
//         suggestionsList.appendChild(li);
//     });
// });
