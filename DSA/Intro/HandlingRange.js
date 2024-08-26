//Handling Range Problem or Intersection Problem of Array = Prefix Sum + Freq Array

//Problem :
// You are given a 2D integer array logs where each logs[i] = [birthi, deathi] indicates the birth and death years of the ith person.

// The population of some year x is the number of people alive during that year. The ith person is counted in year x's population if x is in the inclusive range [birthi, deathi - 1]. Note that the person is not counted in the year that they die.

// Return the earliest year with the maximum population.

 

// Example 1:

// Input: logs = [[1993,1999],[2000,2010]]
// Output: 1993
// Explanation: The maximum population is 1, and 1993 is the earliest year with this population.
// Example 2:

// Input: logs = [[1950,1961],[1960,1971],[1970,1981]]
// Output: 1960
// Explanation: 
// The maximum population is 2, and it had happened in years 1960 and 1970.
// The earlier year between them is 1960.

//Solution :

/**
 * Function maxPopulation takes an array of birth and death years and returns the year with the maximum population.
 * The array is structured as an array of arrays, where each subarray contains the birth and death year of a person.
 * The birth and death years are given as integers, where 1950 is the first year and 2050 is the last year.
 * The function returns the year with the maximum population as an integer.
 * 
 * @param {Array} logs - An array of birth and death years of people.
 * @returns {Number} - The year with the maximum population.
 */
function maxPopulation(logs) {
    /**
     * Create an array of 101 elements, where each element is initialized to 0.
     * The array represents the population of each year from 1950 to 2050.
     * The index of the array corresponds to the year, and the value at that index is the population in that year.
     */
    const gain = new Array(101).fill(0);

    /**
     * Iterate over the array of birth and death years.
     * For each pair of birth and death years, increment the population of the birth year by 1 and decrement the population of the death year by 1.
     * This effectively adds the person to the population of their birth year and removes them from the population of their death year.
     */
    logs.forEach(([birth, death]) => {
        gain[birth - 1950] += 1;
        gain[death - 1950] -= 1;
    });

    /**
     * Initialize variables to keep track of the maximum population and the year with the maximum population.
     * The maximum population is initialized to 0, and the year with the maximum population is initialized to 1950.
     * The current population is initialized to 0.
     */
    let maximumPopulation = 0;
    let maxYear = 1950;
    let currentPopulation = 0;

    /**
     * Iterate over the array of population and find the year with the maximum population.
     * At each iteration, add the population of the current year to the current population.
     * If the current population is greater than the maximum population, update the maximum population and the year with the maximum population.
     */
    for (let year = 0; year < 101; year++) {
        currentPopulation += gain[year];
        if (currentPopulation > maximumPopulation) {
            maximumPopulation = currentPopulation;
            maxYear = year + 1950;
        }
    }

    /**
     * Return the year with the maximum population.
     */
    return maxYear;
}
