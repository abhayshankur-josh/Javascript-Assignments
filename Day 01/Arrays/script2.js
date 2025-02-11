/*
2. What makes a method mutating or non mutating in Javascript? Find out whether each of the following methods are mutating or non-mutating. How can you verify this?: 
    ○ push 
    ○ pop 
    ○ filter 
    ○ find 
    ○ sort 
    ○ map 
*/

const data = [
  {
    id: 1,
    first_name: "Nicki",
    email: "ncrozier0@squarespace.com",
    date_of_birth: "2009/05/09",
  },
  {
    id: 2,
    first_name: "Raychel",
    email: "rmcgrady1@cpanel.net",
    date_of_birth: "1996/11/05",
  },
  {
    id: 3,
    first_name: "Demetris",
    email: "dkilshall2@elpais.com",
    date_of_birth: "2018/12/31",
  },
  {
    id: 4,
    first_name: "Amata",
    email: "abraiden3@canalblog.com",
    date_of_birth: "2012/05/23",
  },
  {
    id: 5,
    first_name: "Venita",
    email: "vheap4@clickbank.net",
    date_of_birth: "2020/10/04",
  },
  {
    id: 6,
    first_name: "Fairfax",
    email: "fcrichton5@merriam-webster.com",
    date_of_birth: "2009/12/23",
  },
  {
    id: 7,
    first_name: "Kathleen",
    email: "kvasyukhnov6@devhub.com",
    date_of_birth: "2010/12/20",
  },
  {
    id: 8,
    first_name: "Sam",
    email: "scorck7@sitemeter.com",
    date_of_birth: "2020/08/30",
  },
  {
    id: 9,
    first_name: "Virgilio",
    email: "vferandez8@e-recht24.de",
    date_of_birth: "2000/09/07",
  },
  {
    id: 10,
    first_name: "Townie",
    email: "tpetyt9@upenn.edu",
    date_of_birth: "2018/09/01",
  },
];

const arrayMethodsTest = () => {
  let arr = [1, 2, 3, 4, 5];
  console.log("Original Array:", arr);

  // push (Mutating)
  arr.push(6);
  console.log("After push:", arr);

  // pop (Mutating)
  arr.pop();
  console.log("After pop:", arr);

  // filter (Non-Mutating)
  let filteredArr = arr.filter((num) => num % 2 === 0);
  console.log("After filter:", filteredArr);
  console.log("Original Array after filter:", arr);

  // find (Non-Mutating)
  let found = arr.find((num) => num === 3);
  console.log("After find:", found);
  console.log("Original Array after find:", arr);

  // sort (Mutating)
  arr.sort((a, b) => b - a);
  console.log("After sort:", arr);

  // map (Non-Mutating)
  let mappedArr = arr.map((num) => num * 2);
  console.log("After map:", mappedArr);
  console.log("Original Array after map:", arr);
};

arrayMethodsTest();
