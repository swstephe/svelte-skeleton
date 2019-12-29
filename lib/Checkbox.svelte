<script>
  export let id;
</script>

<label for={id} {...$$props}>
  <input type="checkbox" {id}/>
  <span class="label-body"><slot/></span>
</label>
