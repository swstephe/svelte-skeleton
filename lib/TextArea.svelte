<script>
  import {clean} from './utils';

  export let id;
  export let value="";
  const props = clean($$props);
</script>

<label for={id}><slot/></label>
<textarea id={id} {...props}>{value}</textarea>
