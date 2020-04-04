<svelte:head>
  <title>To do</title>
</svelte:head>

<section>
    <div class="columns margins">
      <div>
        <Textfield bind:value={valueStandardA} label="Label" input$aria-controls="helper-text-standard-a" input$aria-describedby="helper-text-standard-a" />
        <HelperText id="helper-text-standard-a">Helper Text</HelperText>

        <pre class="status">Value: {valueStandardA}</pre>
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
            <Item href="javascript:void(0)" on:click={() => clicked = 'Gray Kittens'}>
              <Text>Gray Kittens</Text>
            </Item>
            <Item href="javascript:void(0)" on:click={() => clicked = 'A Space Rocket'}>
              <Text>A Space Rocket</Text>
            </Item>
            <Item href="javascript:void(0)" on:click={() => clicked = '100 Pounds of Gravel'}>
              <Text>100 Pounds of Gravel</Text>
            </Item>
            <Item href="javascript:void(0)" on:click={() => clicked = 'All of the Shrimp'}>
              <Text>All of the Shrimp</Text>
            </Item>
            <Item href="javascript:void(0)" on:click={() => clicked = 'A Planet with a Mall'}>
              <Text>A Planet with a Mall</Text>
            </Item>
          </List>
        </Content>
      </Drawer>

      <AppContent class="app-content">
        <main class="main-content">
        <Header>
            <Title>Description:</Title>
            <Subtitle>What about?</Subtitle>
        </Header>
          <pre class="status">Clicked: {clicked}</pre>
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
    let clicked = 'nothing yet';

    //Textfield  
    import Textfield, {Input, Textarea} from '@smui/textfield';
    import HelperText from '@smui/textfield/helper-text/index';
    import FloatingLabel from '@smui/floating-label';
    import LineRipple from '@smui/line-ripple';
    let valueClickable = '';
    let dirtyClickable = false;
    let invalidClickable = false;
    let valueStandardA = '';
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