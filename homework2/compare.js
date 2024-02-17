/*
Node = {
  value: <number>,
  left: <Node> | undefined,
  right: <Node> | undefined
}
*/

const compare = (node1, node2) => {
  if (!node1 && !node2) {
    return true;
  }

  if ((!node1 || !node2) || (node1.value !== node2.value)){
    return false;
  }

  return compare(node1.left, node2.left) && compare(node1.right, node2.right);
};
