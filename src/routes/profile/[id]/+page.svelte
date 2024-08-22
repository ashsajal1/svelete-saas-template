<script>
  export let data;
</script>

<div>
  {#if data.isAuthenticated}
    <p>Welcome dear user</p>
    {data.id}
    {data.name}
  {:else}
    <p>Log in</p>
  {/if}
</div>
