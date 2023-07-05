type Operation = {
  func: (a: number, b: number) => number;
  symbol: string;
};

type Step = {
  num1: number;
  op: Operation;
  num2: number;
  result: number;
};

type Permutation = {
  value: number;
  steps: Step[];
};

const operators: Operation[] = [
  { func: (a, b) => a + b, symbol: '+' },
  { func: (a, b) => a - b, symbol: '-' },
  { func: (a, b) => a * b, symbol: '*' },
  { func: (a, b) => a / b, symbol: '/' },
];

function* permute(
  nums: number[],
  ops: Operation[]
): Generator<Permutation, void, undefined> {
  if (nums.length === 1) {
    yield { value: nums[0], steps: [] };
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    let rest = nums.slice(0, i).concat(nums.slice(i + 1));
    for (let restPerm of permute(rest, ops)) {
      for (let j = 0; j < ops.length; j++) {
        yield {
          value: ops[j].func(nums[i], restPerm.value),
          steps: [
            {
              num1: nums[i],
              op: ops[j],
              num2: restPerm.value,
              result: ops[j].func(nums[i], restPerm.value),
            },
          ].concat(restPerm.steps),
        };
      }
    }
  }
}

export function findSolution(numbers: number[], total: number): Step[] | null {
  for (let perm of permute(numbers, operators)) {
    if (perm.value === total) {
      return perm.steps;
    }
  }
  return null;
}
