'use strict';

const HashMap = require('./HashMap');

function main() {

  const lor = new HashMap();

  const items = [{'Hobbit': 'Bilbo'}, {'Hobbit': 'Frodo'},
    {'Wizard': 'Gandolf'}, {'Human': 'Aragon'}, {'Elf': 'Legolas'}, {'Maiar': 'The Necromancer'},
    {'Maiar': 'Sauron'}, {'RingBearer': 'Gollum'}, {'LadyOfLight': 'Galadriel'}, {'HalfElven': 'Arwen'},
    {'Ent': 'Treebeard'}];

  items.forEach(item => lor.set(Object.keys(item)[0], item[Object.keys(item)[0]]));

  console.log(lor);

  console.log(lor.get('Maiar'), lor.get('Hobbit'));

  //1.
  //Value of 'Maiar' is Sauron and value of 'Hobbit' is Frodo.
  //makes sense as earlier values for these keys were replaced.

  //capacity is 24.  when 0.5 of initial capacity 8 was reached
  //resize occured and capacity was updated to 8 * 3 = 24





}

main();

const WhatDoesThisDo = function(){
  let str1 = 'Hello World.';
  let str2 = 'Hello World.';
  let map1 = new HashMap();
  map1.set(str1,10);
  map1.set(str2,20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3,20);
  map2.set(str4,10);

  console.log(map1.get(str1));
  console.log(map2.get(str3));
};

//2.
//Output should be 20 for map1 and 10 for map2 because 
//str1,2,3 and 4 share the same key and the second set()
//calls overwrite the initial set() calls

WhatDoesThisDo();

//3.1 k mod m where m=11
// | | | | | | | | |
// 10 => 10%11 =  10(hash) => 10%8 = 2
// | | |10| | | | | |
// 22 => 22%11 = 0(hash) = > 0%8 = 0
// |22| |10| | | | | |
// 31 => 31%11 = 9(hash) => 9%8 = 1
// |22|31|10| | | | | |
// 4 => 4%11 = 4(hash) => 4%8 = 4
// |22|31|10| |4| | | |
// |22| | | |4| | | | |31|10| | ...| resized hashtable
// 15 => 15%11 = 4(hash) => 4%24 = 4
// |22| | | |4|15| | | |31|10| | ...|
// 28 => 28%11 = 6(hash) => 6%24 = 6
// |22| | | |4|15|28| | |31|10| | ...|
// 17 => 17%11 = 6 => 6%24 = 6
// |22| | | |4|15|28|17| |31|10| | ...|
// 88 => 88 %11 = 0(hash) => 0%24 =0
// |22|88| | |4|15|28|17| |31|10| | ...|
// 59 => 59%11 = 4(hash) => 4%24 = 4
// |22|88| | |4|15|28|17|4|31|10| | ...|

//3.2 k mod m where m=9
// | | | | | | | | |
// 5 => 5%9 = 5 => 5%8=5
// | | | | | |5| | |
// 28 => 28%9 = 1 => 1%8 =1
// | |28| | | |5| | |
// 19 => 19%9 = 1 => 1%8 =1
// | |28->19| | | |5| | |
// 15 => 15%9 = 6 6%8 = 6
// | |28->19| | | |5|15| |
// resize: | |28->19| | | |5|15| | | | | | | | | | |...
// 20 => 20%9 =2 => 2%24 = 2
// | |28->19|20| | |5|15| | | | | | | | | | |...
// 33 => 33%9 = 6 => 6%24 = 6
// | |28->19|20| | |5|15->33| | | | | | | | | | |...
// 12 => 12%9 = 3 => 3%24 = 3
// | |28->19|20|12| |5|15->33| | | | | | | | | | |...
// 17 => 17%9 = 8 => 8%24 = 8
// | |28->19|20|12| |5|15->33| |17| | | | | | | | |...
// 10 => 10%9 =1 => 1%24 =1
// | |28->19->10|20|12| |5|15->33| |17| | | | | | | | |...

//4. 
function removeDupes(string){
  const map = new Map();
  let result = '';
  for (let i=0;i<string.length;i++){
    if (!map.has(string[i])){
      result += string[i];
      map.set(string[i]);
    }
  }
  return result;
}

console.log(removeDupes('google all that you think can think of'));

//5.

function permPal(string) {
  const map = new Map();
  map.set('odds', 0);
  for (let i = 0; i < string.length; i++) {
    if(map.has(string[i])){
      map.set(string[i], map.get(string[i])+1);
      if (map.get(string[i]) % 2 === 0) {
        map.set('odds', map.get('odds')-1);
      } else {
        map.set('odds', map.get('odds')+1);
      }
    } else{
      map.set(string[i], 1);
      map.set('odds', map.get('odds')+1);
    }
  }

  return map.get('odds') <= 1;
}

console.log(permPal('north'));

//6.

function anaGroup(strings) {
  const map = new Map();

  strings.forEach(string => {
    let key = string.split('').sort().join('');
    if (map.has(key)) {
      map.set(key, [...map.get(key),string]);
    } else {
      map.set(key, [string]);
    }
  });

  const res = [];

  map.forEach(value => res.push(value));

  return res;
}

console.log(anaGroup(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']));