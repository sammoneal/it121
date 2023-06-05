//recursive counter function
function counter(start) {
  //limit defines the base case
  const value = start

  //next is the value passed to the nested function call
  const next = value + 1

  //log value
  console.log(value)

  //function calls itself until base case
  if (next < 11) {
    counter(next)
  }
}

//bind anonymous functions to variables
const one = ()=> console.log('one');
const two = ()=> console.log('two');

//three calls one and two
function three(){
  console.log('three')
  one();
  two();
}

//four calls one with timeout then three
function four(){
  console.log('four')
  setTimeout(one, 0)
  three()
}

//main calls counter and four
function main(){
  counter(1)
  four()
}

main()