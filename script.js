const ticketOptions = document.querySelectorAll(".ticket-option1,.ticket-option2, .ticket-option3") ;
const totalPriceDisplay = document.querySelector("#total-price");

ticketOptions.forEach(option => {
  const addButton = option.querySelector(".add-ticket");
  const removeButton = option.querySelector(".remove-ticket");
  const ticketCountInput = option.querySelector("input[type='text']");

  addButton.addEventListener("click", function() {
    ticketCountInput.value = parseInt(ticketCountInput.value) + 1;
    updateTotalPrice();
  });

  removeButton.addEventListener("click", function() {
    if (ticketCountInput.value > 0) {
      ticketCountInput.value = parseInt(ticketCountInput.value) - 1;
      updateTotalPrice();
    }
  });
});

function updateTotalPrice() {
    let totalPrice = 0;
    
    ticketOptions.forEach(option => {
      const ticketCount = parseInt(option.querySelector("input[type='text']").value);
      const ticketPriceString = option.querySelector("p").textContent.split("Kr")[0];
      const ticketPrice = parseInt(ticketPriceString.split(":")[1].trim());
      totalPrice += ticketCount * ticketPrice;
    });
    
    totalPriceDisplay.textContent = `Total Pris: ${totalPrice} Kr`;
  }