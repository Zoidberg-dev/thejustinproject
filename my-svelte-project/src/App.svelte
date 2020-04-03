<svelte:head>
  <title>Tabs - SMUI</title>
</svelte:head>

<section>

  <div>
    <TabBar tabs={iconTabs} let:tab>
      <Tab {tab}>
        <Icon class="material-icons">{tab.icon}</Icon>
        <Label>{tab.label}</Label>
      </Tab>
    </TabBar>
  </div>
 
</section>

<script>
  import Tab, {Icon, Label} from '@smui/tab';
  import TabBar from '@smui/tab-bar';
  import Button from '@smui/button';
  let active = 'Home';
  let iconTabs = [
    {
      icon: 'apps',
      label: 'Home'
    },
    {
      icon: 'accessible_forward',
      label: 'Justin'
    },
    {
      icon: 'smoking_rooms',
      label: 'Bram'
    }
  ];
</script>

<style>
  section > div {
    margin-bottom: 40px;
  }
</style>