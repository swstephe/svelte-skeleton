<script>
  export let id;
  export let options;
</script>

<label for={id}><slot/></label>
<select id={id} {...$$props}>
  {#each options as option}
    <option value={option.value}>{option.text}</option>
  {/each}
</select>
