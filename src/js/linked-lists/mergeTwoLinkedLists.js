function ListNode(x) {
  this.value = x;
  this.next = null;
}

function mergeTwoLinkedLists(l1, l2) {
  let dummy = new ListNode();
  let cur = dummy;

  while (l1 || l2) {
    if (l1 && l2) {
      if (l1.value < l2.value) {
        cur.next = new ListNode(l1.value);
        l1 = l1.next;
      } else {
        cur.next = new ListNode(l2.value);
        l2 = l2.next;
      }
    } else if (l1) {
      cur.next = new ListNode(l1.value);
      l1 = l1.next;
    } else if (l2) {
      cur.next = new ListNode(l2.value);
      l2 = l2.next;
    }
    cur = cur.next;
  }

  return dummy.next;
}

module.exports = {
  ListNode,
  mergeTwoLinkedLists
};
