'use strict';

function collectSameElements(collectionA, objectB) {
	let c=[];
	for(let i=0;i<collectionA.length;i++)
	{
		for(let j=0;j<collectionB.value.length;j++)
		{
			if(collectionA[i].key==collectionB.value[j]&&collectionA!="\0")
			{
				c.push(collectionA[i].key);
			}
		}
	}
  return c;
}
 const collectionA = [
    {key: 'a'}, {key: 'e'}, {key: 'h'}, {key: 't'}, {key: 'f'}, {key: 'c'}, {key: 'g'}, {key: 'b'}, {key: 'd'}
  ];
  const collectionB = {value: ['a', 'd', 'e', 'f']};
  const result = collectSameElements(collectionA, collectionB);
console.log(result);