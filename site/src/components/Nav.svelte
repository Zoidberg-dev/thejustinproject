<section>

  <div>
    <TabBar tabs={iconTabs} let:tab>
      	<Tab {tab} on:click={()=> navigate(tab)}>
        <Icon class="material-icons">{tab.icon}</Icon>
        <Label>{tab.label}</Label>
      </Tab>
    </TabBar>
  </div>
</section>

<script>
  import { goto } from '@sapper/app';
  import Tab, {Icon, Label} from '@smui/tab';
  import TabBar from '@smui/tab-bar';
  import Button from '@smui/button';
  import {stores} from '@sapper/app';
  let active = 'Home';
  const {page} = stores();

  let iconTabs = [
    {
      icon: 'apps',
      label: 'Home',
      route: "/"
    },
    {
      icon: 'accessible_forward',
      label: 'Justin',
      route: "/justin"
    },
    {
      icon: 'smoking_rooms',
      label: 'Bram',
      route: "/bram"
    },
    {
      icon: 'assignment',
      label: 'To do',
      route: "/todo"
    }
  ];

function navigate(tab){ 
  goto(tab.route);
  }

</script>

<style>
  section > div {
    margin-bottom: 40px;
  }
</style>