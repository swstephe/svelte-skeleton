<script>
  export let id;
  export let value="";
</script>

<label for={id}><slot/></label>
<textarea id={id} {...$$props}>{value}</textarea>
