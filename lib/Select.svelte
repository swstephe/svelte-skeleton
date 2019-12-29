<script>
  import {clean} from './utils';
  export let id;
  export let options;
  const props = clean($$props);
</script>

<label for={id}><slot/></label>
<select {...props} id={id}>
  {#each options as option}
    <option value={option.value}>{option.text}</option>
  {/each}
</select>
