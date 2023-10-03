# Insertion Sort

Implement the Insertion Sort algorithm to sort a list of objects, where each object contains a numeric key and a string value. Return a list of lists representing the intermediate states of the sorted array. If two objects have the same key, maintain their relative order in the sorted list.

## Objective
Given a list of objects, each containing a numeric key and a string value, your task is to sort the list by the numeric keys using the Insertion Sort algorithm. Return a list of lists that represent the state of the array after each insertion. The final state should be the fully sorted array, and there should be as many states as there are elements in the input list.

**Input:**
pairs (Array of Objects): An array of objects, where each object has a numeric key and a value as a string. (0 <= pairs.length <= 100)

**Output:**
An array of lists, each list representing the state of the array after each insertion.


## Example 1:

**Input:**
```
[
  { key: 5, value: "apple" },
  { key: 2, value: "banana" },
  { key: 9, value: "cherry" }
]
```

**Output:**
```
[
  [
    { key: 5, value: "apple" },
    { key: 2, value: "banana" },
    { key: 9, value: "cherry" }
  ],
  [
    { key: 2, value: "banana" },
    { key: 5, value: "apple" },
    { key: 9, value: "cherry" }
  ],
  [
    { key: 2, value: "banana" },
    { key: 5, value: "apple" },
    { key: 9, value: "cherry" }
  ]
]
```

Notice that the output shows the state of the array after each insertion. The last state is the final sorted array. There should be pairs.length states in total.

## Example 2:

**Input:**
```
[
  { key: 3, value: "cat" },
  { key: 3, value: "bird" },
  { key: 2, value: "dog" }
]
```

**Output:**

```
[
  [
    { key: 3, value: "cat" },
    { key: 3, value: "bird" },
    { key: 2, value: "dog" }
  ],
  [
    { key: 3, value: "cat" },
    { key: 3, value: "bird" },
    { key: 2, value: "dog" }
  ],
  [
    { key: 2, value: "dog" },
    { key: 3, value: "cat" },
    { key: 3, value: "bird" }
  ]
]
```
In this example, you can observe that the pairs maintain their relative order, illustrating the stability of the Insertion Sort algorithm.