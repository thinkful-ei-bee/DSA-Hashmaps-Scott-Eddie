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