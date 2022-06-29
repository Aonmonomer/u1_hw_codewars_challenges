const str = 'helloworld'
let captureStr = []

function solution(str) {
  for (let i = 0; i < str.length; i++) {
    captureStr.push(str[i])
  }
  captureStr.reverse()

  return captureStr.join('')
}

console.log(solution(str))

// function solution(str) {
//   let splitStr = str.split("")
//   let reverseArr = splitStr.reverse()
//   let joinArr = reverseArr.join("")
//   return joinArr
// }
