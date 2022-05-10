"use strict";

var dom = "<div>\n  <span>\n    <a></a>\n  </span>\n  <span>\n    <a></a>\n    <a></a>\n  </span>\n</div>\n";
/**
 * dom 树解析
 * - tagName
 * - childNodes
 * 
*/

function dom2Json(domtree) {
  var obj = {};
  obj.name = domtree.tagName;
  obj.children = [];
  domtree.childNodes.forEach(function (child) {
    return obj.children.push(dom2Json(child));
  });
  return obj;
}
/**
 * HTML 字符串解析
*/