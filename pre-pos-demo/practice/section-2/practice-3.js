'use strict';

function countSameElements(collection) {
	let x=[
      {name: 'a', summary: 0},
      {name: 'e', summary: 0},
      {name: 'h', summary: 0},
      {name: 't', summary: 0},
      {name: 'f', summary: 0},
      {name: 'c', summary: 0},
      {name: 'g', summary: 0},
      {name: 'b', summary: 0},
      {name: 'd', summary: 0}
    ];
    for(let i=0;i<collection.length;i++)
    {
    	for(let j=0;j<x.length;j++)
    	{
    		if(collection[i]==x[j].name)
    		{
    			x[j].summary++;
    		}
    		if(collection[i]=="d-5"&&x[j].name=="d")
    		{
    			x[j].summary+=5;
    		}
    		if(collection[i]=="h[3]"&&x[j].name=="h")
    		{
    			x[j].summary+=3;
    		}
    		if(collection[i]=="t-2"&&x[j].name=="t")
    		{
    			x[j].summary+=2;
    		}
    		if(collection[i]=="t[10]"&&x[j].name=="t")
    		{
    			x[j].summary+=10;
    		}
    		if(collection[i]=="c:8"&&x[j].name=="c")
    		{
    			x[j].summary+=8;
    		}
    	}
    }
  return x;
}
const collection = [
    'a', 'a', 'a',
    'e', 'e', 'e', 'e', 'e', 'e', 'e',
    'h', 'h', 'h', 'h', 'h', 'h', 'h[3]', 'h', 'h',
    't', 't-2', 't', 't', 't', 't', 't', 't', 't[10]',
    'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f',
    'c:8',
    'g', 'g', 'g', 'g', 'g', 'g', 'g',
    'b', 'b', 'b', 'b', 'b', 'b',
    'd-5'
  ];
   const result = countSameElements(collection);
   console.log(result);