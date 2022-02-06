export function toMeta (ns, props) {

  return Object.keys(props).map(key => ({
    hid: key,
    name: key,
    content: props[key]
  }))
}