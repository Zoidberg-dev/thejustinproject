<svelte:head>
  <title>To do</title>
</svelte:head>

<section style="display: flex; justify-content: center;">
  <div class="columns margins">
    <div class="addToDoList">
      <div>
        <Textfield bind:value={valueStandardA} label="Add to ToDo list" input$aria-controls="helper-text-standard-a" input$aria-describedby="helper-text-standard-a" />
        <HelperText id="helper-text-standard-a">what to do</HelperText>
      </div>
      <div style="display: flex; align-items: center;">
        <Button on:click={() => addToDo(valueStandardA)} variant="unelevated" class="button-shaped-round"><Icon class="material-icons">add</Icon><Label>Add</Label></Button>
      </div>
    </div>
    <div>

    <div class="drawer-container">
      <Drawer>
        <Header>
            <Title>To do</Title>
            <Subtitle>What to do?</Subtitle>
        </Header>
        <Content>
          <List>
            {#each todos.filter(t => !t.done) as todo (todo.id)}
            <Item on:click={() => clickedItem(todo.title,todo.description)} on:click={() => currentToDo = todo } style="justify-content: space-between; height: 60px;">
              <div style="display: flex; justify-content: space-between;">
                <Text>{todo.title}</Text>
              </div>
              <div style="display: flex; align-items: center;">
                <IconButton class="material-icons" on:click={() => removeToDo(todo)} ripple={false}>delete</IconButton>
              </div>
            </Item>
            {/each}
          </List>
        </Content>
      </Drawer>

      <AppContent class="app-content" style="display: flex; flex-direction: column; align-items: center; width: 500px;"> 
        <main class="main-content" style="justify-content: center; display: flex; flex-direction: column; align-items: center;">
        <Header>
            <Title>{clickedTitle}</Title>
            <Subtitle>What about?</Subtitle>
        </Header>
        <div>
          <Textfield textarea bind:value={clickedDescription} on:keyup={() => saveDescription(currentToDo, clickedDescription)} label="Description:" input$aria-controls="helper-text-textarea" input$aria-describedby="helper-text-textarea" />
          <HelperText id="helper-text-textarea">This is a description</HelperText>
        </div>  
        </main>
      </AppContent>
    </div>
  </div>
</section>

<script>
    //Drawer
    import Drawer, {AppContent, Content, Header, Title, Subtitle} from '@smui/drawer';
    import Button, {Label} from '@smui/button';
    import IconButton, {Icon} from '@smui/icon-button';
    import List, {Item, Text} from '@smui/list';
    import H6 from '@smui/common/H6.svelte';
    let clickedTitle = 'Select a to do';
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
  let currentToDo;

  function saveDescription(currentToDo, clickedDescription) {
    currentToDo.description = clickedDescription;
  }

  function addToDo(input) {
    const todo = {
			id: uid++,
      done: false,
      title: input,
			description: ''
    };
    
    todos = [todo, ...todos];
		valueStandardA = '';
  }

  function removeToDo(todo) {
		todos = todos.filter(t => t !== todo);
  }
  
  function clickedItem(arg1, arg2) {
    clickedTitle = arg1;
    clickedDescription = arg2;
  }

</script>

<style>
   .drawer-container {
    display: flex;
    height: 500px;
    max-width: 1000px;
    border: 1px solid rgba(0,0,0,.1);
    overflow: hidden;
    z-index: 0;
  }

  * :global(textarea.mdc-text-field__input) {
    height: 400px;
    width: 400px;
  }

   * :global(input.mdc-text-field__input) {
    width: 700px;
  }
  .addToDoList {
    display: inline-flex;
    justify-content: space-between;
  }
</style>