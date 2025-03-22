let numberOfGuest = 6;

let pizzaSize;

function pizzaSizeDetermination() {
    if(numberOfGuest <=2)
    {
        pizzaSize = "small"
    }
    else if(numberOfGuest > 2 && numberOfGuest <=5)
    {
        pizzaSize = "medium"
    }
    else{
        pizzaSize = "large"
    }
  }

  pizzaSizeDetermination()
  console.log(pizzaSize);