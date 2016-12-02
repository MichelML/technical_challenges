// js implementation
function parents(node) {
  var nodes = [];
  for (; node; node = node.parentNode) {
    nodes.push(node);
  }
  return nodes;
}

function commonAncestor(node1, node2) {
  var parents1 = parents(node1);
  var parents2 = parents(node2);

  for (var i = 0; i < parents1.length; i++) {
    if (parents2.indexOf(parents1[i]) > -1) return parents1[i];
  }

  throw "No common ancestor!";
}


// find wort case, best case, and average case time complexity of above algorithm
