'use strict';

function createUpdatedCollection(collectionA, objectB) {
	let c=[
      {key: 'a', count: 0},
      {key: 'e', count: 0},
      {key: 'h', count: 0},
      {key: 't', count: 0},
      {key: 'f', count: 0},
      {key: 'c', count: 0},
      {key: 'g', count: 0},
      {key: 'b', count: 0},
      {key: 'd', count: 0}
    ];
    for(let i=0;i<collectionA.length;i++)
    {
    		for(let j=0;j<c.length;j++)
    		{
    			if(collectionA[i]==c[j].key&&collectionA[i]!="\0")
    		{
    			c[j].count++;
    		}
    		}
    }
for(let j=0;j<c.length;j++)
    {
    	for(let k=0;k<objectB.value.length;k++)
    		{
    			if(c[j].key==objectB.value[k]&&c[j].count>=3)
    			{
    				let t=parseInt(c[j].count/3);
    				c[j].count=c[j].count-t;
    			}
    		}
    }
  return c;
}
const collectionA = [
    'a', 'a', 'a',
    'e', 'e', 'e', 'e', 'e', 'e', 'e',
    'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h',
    't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't',
    'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f',
    'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c',
    'g', 'g', 'g', 'g', 'g', 'g', 'g',
    'b', 'b', 'b', 'b', 'b', 'b',
    'd', 'd', 'd', 'd', 'd'
  ];
  const objectB = {value: ['a', 'd', 'e', 'f']};
  const result = createUpdatedCollection(collectionA, objectB);
  console.log(result);