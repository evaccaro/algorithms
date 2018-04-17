///solving collatz recursively and returning number of steps it takes to get to 1
function collatz(num, counter = 0) {
  if (num === 1) {
    return counter;
  } else {
    counter++;
    if (num % 2 === 0) {
      return collatz(num / 2, counter);
    } else {
      return collatz(num * 3 + 1, counter);
    }
  }
  return counter;
}

///solving collatz recursively and returning steps until reaching 1
function collatz(num, holder = []) {
  if (num === 1) {
    return holder;
  } else {
    holder.push(num);
    if (num % 2 === 0) {
      return collatz(num / 2, holder);
    } else {
      return collatz(num * 3 + 1, holder);
    }
  }
  return holder;
}

