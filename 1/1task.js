

function sort(array, method){
  if (array.length < 2) return array;
  switch(method) {
    case 'min':
      return array.sort((a,b) => a - b);
    case 'max':
      return array.sort((a, b) => b - a);
  } 
}

console.log(sort([3,1,7,2], 'max'));
