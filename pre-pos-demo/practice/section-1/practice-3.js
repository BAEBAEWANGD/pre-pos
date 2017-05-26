'use strict';

function collectSameElements(collectionA, objectB) {
	let c=[];
	for(let i=0;i<collectionA.length;i++)
		for(let j=0;j<collectionB.value.length;j++)
		{
			if(collectionA[i]==collectionB.value[j]&&collectionA!="\0")
			{
				c.push(collectionA[i]);
			}
		}
  return c;
}
const collectionA = ['a', 'e', 'h', 't', 'f', 'c', 'g', 'b', 'd'];
const collectionB = {value: ['a', 'd', 'e', 'f']};
 const result = collectSameElements(collectionA, collectionB);
 console.log(result);