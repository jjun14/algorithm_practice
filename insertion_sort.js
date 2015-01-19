// insertion sort(arr)
// loop through array on i = 1
//   var current = arr[i]
//   loop through array on j = 0
//     if arr[j] > current
//       shift values over starting from i back to j
//       insert current at arr[j]
//       break

function insertion_sort(arr)
{
  for(var i = 0; i < arr.length; i++)
  {
    var current  = arr[i];
    for(var j = 0; j < i; j++)
    {
      if(arr[j] > current)
      {
        for(var k = i; k > j; k--)
        {
          arr[k] = arr[k - 1];
        }
        arr[j] = current;
        break;
      }
    }
  }
  console.log(arr);
}

var x = [6,5,3,1,8,7,2,4];
var y = [];
for(var a = 0; a < 100; a++)
{
  y.push(Math.floor(Math.random() * 100001));
}

insertion_sort(x);
insertion_sort(y);
