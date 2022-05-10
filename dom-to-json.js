const dom = `<div>
  <span>
    <a></a>
  </span>
  <span>
    <a></a>
    <a></a>
  </span>
</div>
`

/**
 * dom 树解析
 * - tagName
 * - childNodes
 * 
*/
function dom2Json(domtree) {
  let obj = {};
  obj.name = domtree.tagName;
  obj.children = [];
  domtree.childNodes.forEach((child) => obj.children.push(dom2Json(child)));
  return obj;
}

/**
 * HTML 字符串解析
*/
