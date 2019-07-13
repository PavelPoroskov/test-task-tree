export function sortBy(key) {
  return function compare(o1, o2) {
    if (o1[key] < o2[key]) {
      return -1;
    }
    if (o1[key] > o2[key]) {
      return 1;
    }
    return 0;
  };
}

export function secondUsefullFunction() {

}
