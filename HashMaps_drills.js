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

  //Value of 'Maiar' is Sauron and value of 'Hobbit' is Frodo.
  //makes sense as earlier values for these keys were replaced.

  //capacity is 24.  when 0.5 of initial capacity 8 was reached
  //resize occured and capacity was updated to 8 * 3 = 24

}

main();