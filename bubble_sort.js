//bubble_sort(arr)
//loop through the array
// if next elemetnt < current element
//   temp = current;
//   current = next element;
//   next = temp;

function bubble_sort(arr)
{
  for(var i = 0; i < arr.length; i++){
    for(var k=0; k < arr.length - 1; k++)
    {
      if(arr[k] > arr[k + 1])
      {
        var temp = arr[k];
        arr[k] = arr[k + 1];
        arr[k + 1] = temp;
      }
    }
  }
  console.log(arr);
}

var x = [];
for(var i=0; i < 101; i++)
{
  x.push(Math.round(Math.random() * 10001));
}

bubble_sort(x);