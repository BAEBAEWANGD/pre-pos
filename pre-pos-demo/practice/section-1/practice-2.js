'use strict';

function collectSameElements(collectionA, collectionB) {
	let c=[];
	for(let i=0;i<collectionA.length;i++)
	{
		for(let k=0;k<collectionB.length;k++)
		{
			for(let j=0;j<collectionB[k].length;j++)
			{
				if(collectionA[i]==collectionB[k][j]&&collectionA!="\0")
				{
					c.push(collectionA[i]);
				}
			}
		}
	}
  return c;
}
const collectionA = ['a', 'e', 'h', 't', 'f', 'c', 'g', 'b', 'd'];
const collectionB = [['a', 'd', 'e', 'f']];
const result = collectSameElements(collectionA, collectionB);
console.log(result);