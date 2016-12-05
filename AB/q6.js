/** @constructor */
const Node = function(node) {
  const self = this;

  self.node = node;

  self.hasParent = () => {
    return !!self.node.parentNode;
  };

  self.hasChildren = () => {
    return !!self.node.childNodes.length;
  }

  self.getParent = () => {
    return self.node.parentNode;
  };

  self.getAllParents = () => {
    let parentNodes = [];
    let tempNode = self.node;

    while (tempNode) {
      tempNode = tempNode.parentNode;
      parentNodes.push(tempNode);
    }

    return parentNodes;
  };

  self.getChildren = () => {
    return self.node.childrenNodes;
  };
}

/** @namespace */
const DOM = {};
/**
 * Find the closest ancestor of two html elements.
 * @param {Node} node1
 * @param {Node} node2
 * @returns {Element | undefined}
 */
DOM.closestCommonAncestor = (node1, node2) => {
  if (!node1.getParent() || !node2.getParent()) {
    return undefined;
  }

  let ancestors1 = node1.getAllParents();
  let ancestors2 = node2.getAllParents();

  for (let i = 0; i < ancestors1.length; i++) {
    if (ancestors2.indexOf(ancestors1[i] > -1)) {
      return ancestors1[i];
    }
  }

  return undefined;
}
