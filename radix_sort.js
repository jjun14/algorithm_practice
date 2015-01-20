var x = [170, 45, 75, 90, 802, 2, 24, 66];

function radix_sort(arr)
{
  var nums = [[],[],[],[],[],[],[],[],[],[]];
  
  var largest = arr[0];
  
  //find largest number
  for(var n = 1; n < arr.length; n++)
  {
    if(arr[n] > largest)
    {
      largest = arr[n];
    }
  }
  
  //find number of digits in the largest number
  function largest_length(num)
  {
    count = 0;
    while(num > 0)
    {
      num = Math.floor(num/10);
      count++;
    }
    return count;
  }
  
  var iterations = largest_length(largest);
  
  // run the radix sort as many times as there are digits in the largest number
  for(var a=0; a < iterations; a++){
    for(var i = 0; i < arr.length; i++)
    {
      nums[Math.floor(arr[i] / Math.pow(10, a)) % 10].push(arr[i]);
    }
    arr = [];
    for(var j = 0; j < nums.length; j++)
    {
      for(var k = 0; k < nums[j].length; k++)
      {
        arr.push(nums[j][k]);
      }
    }
    nums = [[],[],[],[],[],[],[],[],[],[]];
  }

  console.log(arr);
}

radix_sort(x);

