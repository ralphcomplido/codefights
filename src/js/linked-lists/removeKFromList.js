function ListNode(x) {
  this.value = x;
  this.next = null;
};

function removeKFromList(l, k) {
  let dummy = new ListNode();
  dummy.next = l;
  let cur = dummy;

  while (cur.next) {
    if (cur.next.value === k) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }

  return dummy.next;
};

module.exports = {
  ListNode,
  removeKFromList
};
