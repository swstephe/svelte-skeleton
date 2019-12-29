<script>
  export let primary = false;
  export let href = null;
  export let type = null;
  export let value = null;
</script>

{#if href}
  <a role="button" class="button" class:button-primary={primary} {href} {...$$props}>
    <slot/>
  </a>
{:else if type && value}
  <input class:button-primary={primary} {type} {value} {...$$props}/>
{:else}
  <button class:button-primary={primary} {...$$props}>
    <slot />
  </button>
{/if}
