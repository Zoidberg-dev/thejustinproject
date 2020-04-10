<script>
  let pizzaSizes = ['Medium', 'Italian', 'large', 'Family XXL']; 
  let pizzaSauces = ['Tomato Sauce', 'No Sauce', 'Hickory BBQ Sauce', 'Creme Fraiche']
  let pizzaAmount = 1;
  let uid = 1;

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
            <select>
            {#each pizzaSizes as pizzaSize}
            
                <option value={pizzaSize}>
                    {pizzaSize}
                </option>
            {/each}
            </select>
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
    font-size: 16px;
    font-family: 'Roboto';
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
    height: 600px;
}

.bestelling-container{
    border: 3px solid rgba(212, 161, 161, 0.1);
    width: 300px;
    height: 600px;
}
</style>