/**
 * createElement: 依据babel编译JSX后的内容生成虚拟DOM
 */
function createElement(type, props, children) {
  let obj = {
    type: null,
    props: {
      children: "",
    },
    key: null,
    ref: null,
  };

  obj = { ...obj, type, props: { ...props, children } };
  "key" in obj.props
    ? ((obj.key = obj.props.key), (obj.props.key = undefined))
    : null;
  "ref" in obj.props
    ? ((obj.ref = obj.props.ref), (obj.props.ref = undefined))
    : null;

  return obj;
}

console.log(
  "---------->",
  selfCreateElement(
    "h1",
    { id: "title", className: "title-box", key: "123", ref: "aa" },
    "Salen"
  )
);

/**
 * render: 为生成的对象（虚拟DOM）动态创建DOM元素，并插入到指定的容器中
 */

function render(obj, container, callback) {
  let { type, props } = obj || {};
  if (!type) {
    return;
  }
  let newElement = document.createElement(type);

  for (let attr in props) {
    if (!props.hasOwnProperty(attr)) break; // 不是私有的直接结束遍历
    if (!props[attr]) continue; // 当前属性没有值，直接不做处理

    let value = props[attr];

    if (attr === "className") {
      newElement.setAttribute("class", value);
      continue;
    }

    if (attr === "style") {
      if (value === "") continue;
      for (let styKey in value) {
        if (value.hasOwnProperty(styKey)) {
          newElement["style"][styKey] = value[styKey];
        }
      }
      continue;
    }

    if (attr === "children") {
      if (typeof value === "string") {
        let text = document.createTextNode(value);
        newElement.appendChild(text);
      }
      continue;
    }

    // 基于setAttribute可以让设置的属性表现在HTML结构上
    newElement.setAttribute(attr, value);
  }

  container.appendChild(newElement);
  callback && callback();
}
