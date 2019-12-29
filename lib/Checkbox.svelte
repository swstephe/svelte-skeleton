<script>
  import {clean} from './utils';

  export let id;
  const props = clean($$props);
</script>

<label {...props} for={id}>
  <input type="checkbox" {id}/>
  <span class="label-body"><slot/></span>
</label>
