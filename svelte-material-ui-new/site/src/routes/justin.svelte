<svelte:head>
  <title>Justin</title>
</svelte:head>

<section>
  <div><p>Justin</p></div>
  <p>This is the 'about' page about Justin. There's not much here,<strong>yet...</strong></p>
  <form>
    <h1>Login Page!</h1>
    <label>Username:</label>
      <input bind:value={username} type="text">
      <h1>Username: {username}</h1>
    <hr>
    <label>Password:</label>
      <input bind:value={password} type="password">
    <h1 type="password">Password: {password}</h1>
  </form>
</section>

<script>
let username =  "Type username here";
let password =  "Type password here";
</script>