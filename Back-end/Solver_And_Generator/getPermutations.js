const permutator = (inputArr) => {
  let result = [];
  const permute = (arr) => {
    let k = -2;
    while (k !== -1) {
      k = findK(arr);
      let l = findI(arr, k);
      swap(arr, k, l);
      r(arr, k);
      result.push([...arr]);
    }
  };
  permute(inputArr);
  return result;
};

const findK = (arr) => {
  for (let i = arr.length - 2; i >= 0; i--) if (arr[i] < arr[i + 1]) return i;
  return -1;
};

const findI = (arr, k) => {
  for (let i = arr.length - 1; i > k; i--) if (arr[i] > arr[k]) return i;
  return -1;
};

const swap = (arr, k, l) => {
  const tmp = arr[k];
  arr[k] = arr[l];
  arr[l] = tmp;
};

const r = (arr, k) => {
  const subArr = arr.slice(k + 1);
  subArr.reverse();
  arr.splice(k + 1, arr.length - k - 1, ...subArr);
};

export default permutator;
