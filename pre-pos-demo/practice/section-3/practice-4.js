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
    ]
    for(let i=0;i<collectionA.length;i++)
    {
    	for(let j=0;j<c.length;j++)
    	{
    		if(collectionA[i]==c[j].key&&collectionA!='\0')
    		{
    			c[j].count++;
    		}
    		if(collectionA[i]==(c[j].key+"-5"))
    		{
    			c[j].count+=5;
    		}
    	}
    }
    for(let i=0;i<c.length;i++)
    {
    	for(let j=0;j<objectB.value.length;j++)
    	{
    		if(c[i].key==objectB.value[j]&&c[i].count>=3)
    		{
    			let t=parseInt(c[i].count/3);
    			c[i].count=c[i].count-t;
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
    'd-5'
  ];
  const objectB = {value: ['a', 'd', 'e', 'f']};
  const result = createUpdatedCollection(collectionA, objectB);
  console.log(result);