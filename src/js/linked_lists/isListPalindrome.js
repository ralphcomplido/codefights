function ListNode(x) {
  this.value = x;
  this.next = null;
}

const isListPalindrome = l => {
  // empty list or list of length 1
  if (l === null || l.next === null) {
    return true;
  }

  const stack = [];
  let slow = l;
  let fast = l;

  // use slow, fast pointer method
  // when fast reaches the end, slow will be halfway
  while (fast && fast.next) {
    stack.push(slow.value);
    slow = slow.next;
    fast = fast.next.next;
  }

  // for odd length lists
  if (fast) {
    slow = slow.next;
  }

  // verify the next values match the stack values
  while (stack.length !== 0) {
    if (stack.pop() !== slow.value) {
      return false;
    }
    slow = slow.next;
  }

  return true;
};

module.exports = {
  ListNode,
  isListPalindrome
};
