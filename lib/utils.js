export function clean($$props) {
  // TODO support keys
  const {children, $$scope, $$slots} = $$props;
  const rest = {};
  for (const key of Object.keys($$props)) {
    if (key !== 'children' && key !== '$$scope' && key !== '$$slots') {
      rest[key] = $$props[key];
    }
  }
  return rest;
}
