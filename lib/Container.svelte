<script>
  import clsx from "clsx";
  import {clean} from './utils';

  let className = '';
  export { className as class };
  const props = clean($$pros);

  $: classes = clsx(
    className,
    'container'
  );
</script>

<div {...props} class={classes}>
  <slot/>
</div>
