## Return Negative

```js
function makeNegative(num) {
  if (Math.sign(num) === 0) {
    return 0
  } else if (Math.sign(num) === -1) {
    return num
  } else if (Math.sign(num) === 1) {
    return num * -1
  }
}
```

## Sum of Positive

```js
function positiveSum(arr) {
  let sum = 0;
  for(let i=0; i< arr.length; i++){
    if(arr[i] === 0 || arr[i] > 0){
      sum += arr[i]
    }
  }
  if(sum !== 0){
    return sum
  }
  else {
    sum = 0
    return sum
  }
```

## Function 2

```js
const square = (a) => {
  return Math.pow(a, 2)
}
```

## Sum Arrays

```js
function sum(numbers) {
  'use strict'
  let sum = 0
  if (numbers.length === 0) {
    return 0
  } else {
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i]
    }
    return sum
  }
}
```

## Reversed Strings

```js
//it works on my VB Code but didn't work on codewars.com

let captureStr = []

function solution(str) {
  for (let i = 0; i < str.length; i++) {
    captureStr.push(str[i])
  }
  captureStr.reverse()

  return captureStr.join('')
}

// I referenced it on freecodecamp.org and got the following answer that codewars.com accepted:
function solution(str) {
  let splitStr = str.split('')
  let reverseArr = splitStr.reverse()
  let joinArr = reverseArr.join('')
  return joinArr
}
```
