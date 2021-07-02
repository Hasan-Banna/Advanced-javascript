const nums = [1,2,3,4,5,6,7,8];
//const part = nums.slice(2, 5); 2num index theke start hobe 5 er age sesh hobe

const removed = nums.splice(2, 5, 77); //2 num index theke start hoye 5 num er pore jeye sesh hobe and mul array theke 2 num index dhore 5ta bad die dibe.remove er jaygay 77 add hobe.


// console.log(removed);
// console.log(nums);

const together = nums.join(","); //join holo array theke value gula ber hoye ek sathe ashbe string e convert hobe.
console.log(together);