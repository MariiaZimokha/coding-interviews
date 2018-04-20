// Given two arrays, write a function to compute their intersection.
// Example: Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].

// Note:
// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.

// Follow up:
// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you
// cannot load all elements into the memory at once?

const intersect = function(nums1, nums2) {
  const map = {};
  const intersection = [];

  for (const num1 of nums1)
    map[num1] = map[num1] ? map[num1].concat(num1) : [num1];

  for (const num2 of nums2)
    if (map[num2] && map[num2].length)
      intersection.push(map[num2].pop());

  return intersection;
};