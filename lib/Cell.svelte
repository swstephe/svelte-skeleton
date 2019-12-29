<script>
  import clsx from "clsx";
  import {clean} from './utils';

  let className = '';
  export { className as class };
  export let span = 1;
  export let offset = 0;
  const singular = ["1", "1/3", "1/2"];
  const num_map = {
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine",
    "10": "ten",
    "11": "eleven",
    "12": "twelve",
    "1/3": "one-third",
    "2/3": "two-thirds",
    "1/2": "one-half"
  };
  const props = clean($$props);

  $: classes = clsx(
    className,
    span && num_map[span] ? num_map[span] : false,
    span && num_map[span] ? (singular.includes(span) ? "column" : "columns") : false,
    offset && num_map[offset] ? "offset-by-" + num_map[offset] : false
  );
</script>

<div {...props} class={classes}>
  <slot/>
</div>
