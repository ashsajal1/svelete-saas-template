<script>
  import Button from "./ui/button/button.svelte";
  export let data;
</script>

<nav class="flex items-center p-3 justify-between border-b">
  <div>
    <a href="/" class="font-bold px-4 hover:text-gray-700">Home</a>
  </div>
  <div class="flex items-center gap-2">
    {#if data.isAuthenticated}
      <a href="/api/auth/logout" class="text-sm px-4 hover:text-gray-700">
        <Button>Logout</Button>
      </a>
    {:else}
      <a href="/api/auth/login" class="text-sm px-4 hover:text-gray-700">
        <Button>Login</Button>
      </a>
    {/if}
  </div>
</nav>
