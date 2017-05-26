'use strict';

function createUpdatedCollection(collectionA, objectB) {
	for(let i=0;i<collectionA.length;i++)
	{
		for(let j=0;j<objectB.value.length;j++)
		{
			if(collectionA[i].key==objectB.value[j])
			{
				collectionA[i].count--;
			}
		}
	}
  return collectionA;
}
 const collectionA = [
    {key: 'a', count: 2},
    {key: 'e', count: 2},
    {key: 'h', count: 2},
    {key: 't', count: 2},
    {key: 'f', count: 2},
    {key: 'c', count: 2},
    {key: 'g', count: 2},
    {key: 'b', count: 2},
    {key: 'd', count: 2}
  ];
  const objectB = {value: ['a', 'd', 'e', 'f']};
   const result = createUpdatedCollection(collectionA, objectB);
   console.log(result);