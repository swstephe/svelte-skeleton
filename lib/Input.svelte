<script>
  import {clean} from './utils';
  export let id;
  const props = clean($$props);
</script>

<label for={id}><slot/></label>
<input id={id} {...props}>
