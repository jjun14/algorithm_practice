selection sort(array)
loop through numbers
 var lowest_index = i;
 var current = arr[i];
 loop from j to end
   if arr[j] < arr[lowest_index]
     lowest_index = j;
 if(arr[lowest_index] !== arr[i])
   arr[i] = arr[lowest_index];
   arr[lowest_index] = current;

var x = [];
for(var i=0; i < 101; i++)
{
  x.push(Math.round(Math.random() * 10001));
}

function selection_sort(arr)
{
  for(var i = 0; i < arr.length; i++)
  {
    var min_index = i;
    var max_index = arr.length - 1;
    var current_min = arr[min_index];
    var current_max = arr[max_index];
    for(var j = i; j < arr.length; j++)
    {
      if(arr[j] < arr[min_index])
      {
        min_index = j;
      }
      if(arr[j] > arr[max_index])
      {
        max_index = j;
      }
    }
    if(min_index !== i)
    {
      arr[i] = arr[min_index];
      arr[min_index] = current_min;
    }
    if(max_index !== arr.length - 1)
    {
      arr[arr.length - 1] = arr[max_index];
      arr[max_index] = current_max;
    }
  }
  return arr;
}

selection_sort(x);