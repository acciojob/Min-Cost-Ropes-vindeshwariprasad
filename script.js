function mincost(arr)
{ 
//write your code here
// return the min cost
	let totalCost = 0;

    // Continue until there is only one rope left
    while (arr.length > 1) {
        // Sort the array to get the two smallest ropes
        arr.sort((a, b) => a - b);

        // Get the two smallest ropes
        const smallest1 = arr.shift();
        const smallest2 = arr.shift();

        // Calculate the cost of connecting them
        const cost = smallest1 + smallest2;

        // Add the cost to the total
        totalCost += cost;

        // Put the connected rope back into the array
        arr.push(cost);
    }

    // Return the total cost
    return totalCost;
  
}

module.exports=mincost;
