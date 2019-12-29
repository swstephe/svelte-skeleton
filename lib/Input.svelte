<script>
  export let id;
</script>

<label for={id}><slot/></label>
<input id={id} {...$$props}>
