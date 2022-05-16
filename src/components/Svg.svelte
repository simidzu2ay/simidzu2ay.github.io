<script lang="ts">
  export let className: string = '';
  export let svg: string;
  export let fill: string = 'black';
</script>

<div style="fill: {fill};" class={className}>
  {@html svg}
</div>
