function ListNode(x) {
  this.value = x;
  this.next = null;
}

function addTwoHugeNumbers(a, b) {
  const s1 = [];
  const s2 = [];

  while (a || b) {
    if (a) {
      s1.push(a.value);
      a = a.next;
    }

    if (b) {
      s2.push(b.value);
      b = b.next;
    }
  }

  const s3 = [];
  let carry = 0;
  while (s1.length !== 0 || s2.length !== 0 || carry) {
    let v1 = s1.pop() || 0;
    let v2 = s2.pop() || 0;

    let sum = v1 + v2 + carry;
    carry = Math.floor(sum / 10000);
    sum = sum % 10000;

    s3.push(sum);
  }

  let dummy = new ListNode();
  let cur = dummy;
  while (s3.length !== 0) {
    cur.next = new ListNode(s3.pop());
    cur = cur.next;
  }

  return dummy.next;
}

module.exports = {
  ListNode,
  addTwoHugeNumbers
};
