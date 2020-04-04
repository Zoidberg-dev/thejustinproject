<svelte:head>
  <title>To do</title>
</svelte:head>

<section>
    <div class="columns margins">
      <div>
        <Textfield bind:value={valueStandardA} label="Add to ToDo list" input$aria-controls="helper-text-standard-a" input$aria-describedby="helper-text-standard-a" />
        <HelperText id="helper-text-standard-a">what to do</HelperText>
      </div>
      <div>
        <Button on:click={() => clicked++} variant="unelevated" class="button-shaped-round"><Icon class="material-icons">add</Icon><Label>Add</Label></Button>
      </div>
</section>

<section>
    <div><p>To do</p></div>
    <div>

    <div class="drawer-container">
      <Drawer>
        <Header>
            <Title>To do</Title>
            <Subtitle>What to do?</Subtitle>
        </Header>
        <Content>
          <List>
            {#each todos as todo }
            <Item on:click={() => clickedItem(todo.title,todo.description) }>
              <Text>{todo.title}</Text>
            </Item>
            {/each}
          </List>
        </Content>
      </Drawer>

      <AppContent class="app-content">
        <main class="main-content">
        <Header>
            <Title>Description:</Title>
            <Subtitle>What about?</Subtitle>
        </Header>
          <pre>Title: {clickedTitle}</pre>
          <pre>Description:<br>{clickedDescription}</pre>
        </main>
      </AppContent>
    </div>
  </div>
</section>

<script>
    //Drawer
    import Drawer, {AppContent, Content, Header, Title, Subtitle} from '@smui/drawer';
    import Button, {Label, Icon} from '@smui/button';
    import List, {Item, Text} from '@smui/list';
    import H6 from '@smui/common/H6.svelte';
    let clickedTitle = 'nothing yet';
    let clickedDescription = '';

    //Textfield  
    import Textfield, {Input, Textarea} from '@smui/textfield';
    import HelperText from '@smui/textfield/helper-text/index';
    import FloatingLabel from '@smui/floating-label';
    import LineRipple from '@smui/line-ripple';
    let valueClickable = '';
    let dirtyClickable = false;
    let invalidClickable = false;
    let valueStandardA = '';
    let clicked = 0;

  let uid = 1;

	let todos = [
		{ id: uid++, done: false, title: 'write some docs', description: 'stupid work stuff'},
		{ id: uid++, done: false, title: 'start writing blog post', description: 'write about your sex life aka very short story'},
		{ id: uid++, done: true,  title: 'buy some milk',  description: 'jack off and put in bottle'},
		{ id: uid++, done: false, title: 'mow the lawn',  description: 'grab lawn mower and mow the lawn'},
		{ id: uid++, done: false, title: 'feed the turtle',  description: 'feed your best friend y̬̠̑̽o̟̗̔͂ŭ̳r̡̩͉̓̽͡ ̮̞̤̇̀͛̀͜ò̘̠̖͈̅̓͂̏͢nľ̖͙̈y̫̝̣͆̑̃̔͜ f͞ͅŗ̛̳̥̦͂̒̓i̯̜̝͛͌͒eṅ̝̠̬̩̐͆͊͜͡d̳̭͇̰̊͛̆̅'},
		{ id: uid++, done: false, title: 'fix some bugs',  description: 'kill the bugs'},
  ];
  
  function clickedItem(arg1, arg2) {
    clickedTitle = arg1;
    clickedDescription = arg2;
  }

</script>

<style>
  .drawer-container {
    display: flex;
    height: 350px;
    max-width: 600px;
    border: 1px solid rgba(0,0,0,.1);
    overflow: hidden;
    z-index: 0;
  }
</style>