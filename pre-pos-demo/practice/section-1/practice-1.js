'use strict';

function collectSameElements(collectionA, collectionB) {
	let c=[];
	for(let i=0;i<collectionA.length;i++)
	{
		for(let j=0;j<collectionB.length;j++)
		{
			if(collectionA[i]==collectionB[j]&&collectionA!="\0")
			{
				c.push(collectionA[i]);
			}
		}
	}
  return c;
}
const collectionA = ['a', 'e', 'h', 't', 'f', 'c', 'g', 'b', 'd'];
const collectionB = ['a', 'd', 'e', 'f'];
const result = collectSameElements(collectionA, collectionB);
console.log(result);