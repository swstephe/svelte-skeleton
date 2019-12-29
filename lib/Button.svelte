<script>
  import clsx from "clsx";
  import {clean} from './utils';

  let className = '';
  export { className as class };
  export let primary = false;
  export let href = null;
  export let type = null;
  export let value = null;
  const props = clean($$props);

  $: ariaLabel = $$props['aria-label'];
  $: classes = clsx(
    className,
    'button',
    primary ? 'button-primary' : false
  );
</script>

{#if href}
  <a {...props} role="button" class={classes} {href}><slot/></a>
{:else if type && value}
  <input {...props} class={classes} {type} {value}/>
{:else}
  <button {...props} class={classes}><slot /></button>
{/if}
