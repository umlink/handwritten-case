"use strict";

var tree = [{
  "id": 1,
  "text": "节点1",
  "parentId": 0,
  "children": [{
    "id": 2,
    "text": "节点1_1",
    "parentId": 1,
    "children": [{
      "id": 4,
      "text": "节点1_1_1",
      "parentId": 2
    }]
  }, {
    "id": 3,
    "text": "节点1_2",
    "parentId": 1
  }]
}];

var treeToList = function treeToList(tree) {
  var list = [];

  var traverse = function traverse(tree) {
    tree.forEach(function (item) {
      if (item.children) {
        traverse(item.children);
        delete item.children;
      }

      list.push(item);
    });
  };

  traverse(tree);
  console.log(list);
  return list;
};

treeToList(tree);