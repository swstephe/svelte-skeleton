<script>
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

  function compute_classes(span, offset) {
    const classList = [];
    if (span && num_map[span]) {
      classList.push(num_map[span]);
      classList.push(singular.includes(span) ? "column" : "columns");
    }
    if (offset && num_map[offset]) {
      classList.push("offset-by-" + num_map[offset]);
    }
    if ($$props['class']) {
      classList.push($$props['class']);
    }
    return classList.join(" ");
  }
  $: classes = compute_classes(span, offset);
</script>

<div class={classes}>
  <slot/>
</div>
