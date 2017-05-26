'use strict';

function createUpdatedCollection(collectionA, objectB) {
	for(let i=0;i<collectionA.length;i++)
	{
		for(let j=0;j<objectB.value.length;j++)
		{
			if(collectionA[i].key==objectB.value[j]&&collectionA[i].count>=3)
			{
				let t=parseInt(collectionA[i].count/3);
				collectionA[i].count=collectionA[i].count-t;
			}
		}
	}
  return collectionA;
}
const collectionA = [
    {key: 'a', count: 3},
    {key: 'e', count: 7},
    {key: 'h', count: 11},
    {key: 't', count: 20},
    {key: 'f', count: 9},
    {key: 'c', count: 8},
    {key: 'g', count: 7},
    {key: 'b', count: 6},
    {key: 'd', count: 5}
  ];
  const objectB = {value: ['a', 'd', 'e', 'f']};
   const result = createUpdatedCollection(collectionA, objectB);
   console.log(result);