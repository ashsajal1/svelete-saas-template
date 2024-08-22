<script>
    export let data;
    let { isAuthenticated } = data;
    console.log(isAuthenticated)
</script>


{#if isAuthenticated}
	<p>Welcome dear user</p>
{:else}
<p>You are not logged in</p>
{/if}
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
