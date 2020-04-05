<svelte:head>
  <title>Justin</title>
</svelte:head>

<section>
  <div><p>Justin</p></div>
  <p>This is the 'about' page about Justin. There's not much here,<strong>yet...</strong></p>
  <form>
    <h1>Login Page!</h1>
    <label for="username">username:</label>
      <input type="text" name="username" id="username">
    <hr>
    <label for="user-pw">password:</label>
    <input type="password" id="user-pw" name="user-pw">
  </form>
</section>

<section>
<h2>Read More Read Less Button</h2>

{#if readtext.showText}
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet</p>
{/if}

{#if readtext.showText}
  <button on:click={()=>toggle()}>Show Less</button>
{:else}
  <button on:click={toggle}>Read text</button>
{/if}
</section>

<script>
let readtext = { showText: false };

	function toggle() {
    readtext.showText = !readtext.showText;
  }
</script>