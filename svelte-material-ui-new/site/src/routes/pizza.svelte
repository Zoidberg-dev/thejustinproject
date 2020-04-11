<script>
  let pizzaSizes = ['Medium', 'Italian', 'large', 'Family XXL']; 
  let pizzaSauces = ['Tomato Sauce', 'No Sauce', 'Hickory BBQ Sauce', 'Creme Fraiche']
  let pizzaAmount = 1;
  let uid = 1;
  let toppingsChecked = false
  let addedPizzaToppings = ['Pineapple', 'Bacon', 'Mushrooms', 'Cherry Tomatoes', 'Meat', 'Ham']

    let pizzas = [
    { id: uid++, name: "Pizza Peperoni", price: 5.00, sauce: 'Tomato Sauce', toppings: ['Mozzerella', 'Pepperoni'], amount: pizzaAmount, size: 'Medium', pictureSource: 'pictures/pizza_perfect_pepperoni.webp'},
    { id: uid++, name: "Pizza Chicken Kebab", price:  5.00 , sauce: 'Tomato Sauce', toppings: ['Mozzerella', 'Red onion', 'Chicken Kebab', 'Garlic Sauce'], amount: pizzaAmount, size: 'Medium', pictureSource: 'pictures/pizza_chicken_kebab.webp'},
    { id: uid++, name: "Pizza Chicken Supreme", price:  5.00, sauce: 'Tomato Sauce', toppings: ['Mozzerella', 'Red Onion', 'paprika', 'Grilled Chicken', 'Fresh Tomato', 'Oregano'], amount: pizzaAmount, size: 'Medium', pictureSource: 'pictures/pizza_chicken_supreme.webp'},
    { id: uid++, name: "Pizza Margaritha", price:  5.00, sauce: 'Tomato Sauce', toppings: ['Double Mozzerella', 'Oregano'], amount: pizzaAmount, size: 'Medium', pictureSource: 'pictures/pizza_margaritha.webp'},
    { id: uid++, name: "Pizza Funghi", price:  5.00, sauce: 'Tomato Sauce', toppings: ['Mozzerella', 'Oregano', 'Mushrooms'], amount: pizzaAmount, size: 'Medium', pictureSource: 'pictures/pizza_funghi.webp'},
    { id: uid++, name: "Pizza Americana", price:  5.00, sauce: 'Tomato Sauce', toppings: ['Mozzerella', 'peperoni', 'Ham', 'Meat'], amount: pizzaAmount, size: 'Medium', pictureSource: 'pictures/pizza_americana.webp'},
    { id: uid++, name: "Pizza Americana", price:  5.00, sauce: 'Tomato Sauce', toppings: ['Mozzerella', 'peperoni', 'Ham', 'Meat'], amount: pizzaAmount, size: 'Medium', pictureSource: 'pictures/pizza_americana.webp'},
    { id: uid++, name: "Pizza Americana", price:  5.00, sauce: 'Tomato Sauce', toppings: ['Mozzerella', 'peperoni', 'Ham', 'Meat'], amount: pizzaAmount, size: 'Medium', pictureSource: 'pictures/pizza_americana.webp'},
    { id: uid++, name: "Pizza Americana", price:  5.00, sauce: 'Tomato Sauce', toppings: ['Mozzerella', 'peperoni', 'Ham', 'Meat'], amount: pizzaAmount, size: 'Medium', pictureSource: 'pictures/pizza_americana.webp'},
    { id: uid++, name: "Pizza Americana", price:  5.00, sauce: 'Tomato Sauce', toppings: ['Mozzerella', 'peperoni', 'Ham', 'Meat'], amount: pizzaAmount, size: 'Medium', pictureSource: 'pictures/pizza_americana.webp'},
    { id: uid++, name: "Pizza Americana", price:  5.00, sauce: 'Tomato Sauce', toppings: ['Mozzerella', 'peperoni', 'Ham', 'Meat'], amount: pizzaAmount, size: 'Medium', pictureSource: 'pictures/pizza_americana.webp'},
    { id: uid++, name: "Pizza Americana", price:  5.00, sauce: 'Tomato Sauce', toppings: ['Mozzerella', 'peperoni', 'Ham', 'Meat'], amount: pizzaAmount, size: 'Medium', pictureSource: 'pictures/pizza_americana.webp'},
    { id: uid++, name: "Pizza Americana", price:  5.00, sauce: 'Tomato Sauce', toppings: ['Mozzerella', 'peperoni', 'Ham', 'Meat'], amount: pizzaAmount, size: 'Medium', pictureSource: 'pictures/pizza_americana.webp'},
  ] 
  function stringifyToppings(pizzaToppings){
      pizzaToppings.join(", ")
      return pizzaToppings;
  }
</script>
<section class="main-content">
    <section class="pizzas-container">
        {#each pizzas as pizza}
        <div class="pizza-container">
            <div class="pizza-img-container">
                <img src={pizza.pictureSource} alt={pizza.name}>
            </div>
            <div>
                {pizza.name}
            </div>
            <div>
                {pizza.price}
            </div>
            <div>
                {stringifyToppings(pizza.toppings)}    
            </div>
        </div>
        {/each}    
    </section>
    <div class="grid-container">
        <section class="bewerk-pizza-container">
        <div class="pizza-name-container">
            <label class="pizza-bewerk-labels">Placeholder pizza name</label>
        </div>
        <div>
             <img src={'pictures/pizza_americana.webp'} alt={'placeholder pizza'}>
        </div>
        <div class="pizza-sauce-container">
            <label class="pizza-bewerk-labels">Select your desired sauce</label>
            <select class="pizza-bewerk-dropdowns">
            {#each pizzaSauces as pizzaSauce}
            
                <option value={pizzaSauce}>
                    {pizzaSauce}
                </option>
            {/each}
            </select>
            </div>
            <div class="pizza-size-container">
            <label class="pizza-bewerk-labels">Select your desired size</label>
            <select class="pizza-bewerk-dropdowns">
            {#each pizzaSizes as pizzaSize}
            
                <option value={pizzaSize}>
                    {pizzaSize}
                </option>
            {/each}
            </select>
            </div>
            <div class="pizza-amount-container">
                <label class="pizza-bewerk-labels">Amount</label>
                    <input class="pizza-bewerk-dropdowns" type="number" bind:value={pizzaAmount} min=1 max=10>
            </div>
            <div class="pizza-toppings-container">
            <label class="pizza-bewerk-labels">Current pizza toppings</label>
                <div class="current-toppings-container">
                        {#each addedPizzaToppings as addedPizzaTopping}
                        <label>
                         <input type="checkbox" bind:checked={toppingsChecked}>
                         {addedPizzaTopping}
                        </label>
                        {/each}
                </div>
                <label class="pizza-bewerk-labels">Add your desired toppings</label>
                <div class="added-toppings-container">
                     {#each addedPizzaToppings as addedPizzaTopping}
                    <label>
                    <input type="checkbox" bind:checked={toppingsChecked}>
                    {addedPizzaTopping}
                    </label>
                    {/each}
                </div>
            </div>
        </section>

        <section class="bestelling-container">

        </section>
    </div>    
</section>
<style>
.grid-container{
    display: grid;
    grid-gap: 1em;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
    height: auto;
    font-family: 'Roboto';
    font-size: 15px;
}

.main-content{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

.pizzas-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
    margin: 0 auto;
    max-width: 625px;
    font-size: 12px;
}

.pizza-container{
    display: flex;
    max-width: 300px;
    justify-content: center;
    flex-direction: column;
    border: 3px solid rgba(212, 161, 161, 0.1);
}

.bewerk-pizza-container{
    border: 3px solid rgba(212, 161, 161, 0.1);
    width: 300px;
    display: inline-block;
    overflow: visible;
    box-sizing: border-box;
    pointer-events: auto;
}

.bestelling-container{
    border: 3px solid rgba(212, 161, 161, 0.1);
    width: 300px;
    height: 600px;
    
}
.pizza-sauce-container{
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    display: flex;
    justify-content: center;
}
.pizza-size-container{
    display: flex;
    flex-direction: column;

}
.pizza-amount-container{
    display: flex;
    flex-direction: column;

    margin-bottom: 16px;
}
.current-toppings-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 8px;
    margin-bottom: 16px;
}
.added-toppings-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 8px;
}
.pizza-bewerk-dropdowns{
    width: 180px;
    font-family: 'Roboto';
    font-size: 15px;
    display: flex;
    justify-content: center;

}
.pizza-toppings-container{

}
.pizza-name-container{
    margin-top: 8px;
    margin-bottom: 8px;

}
.pizza-bewerk-labels{
    justify-content: center;
    display: flex;
}
</style>
