function CheckNumber() {
    // console.log(document.getElementById("number").value);
    //   alert("Function called.");
    const number = document.getElementById("number").value;
    console.log(number, "number");
    if (!number) {
      console.log("Please type the number.");
      alert("Please type the number.");
    } else if (number % 2 === 0) {
      console.log(`Number ${number} is Even.`);
      alert(`Number ${number} is Even.`);
    } else {
      console.log(`Number ${number} is Odd.`);
      alert(`Number ${number} is Odd.`);
    }
  }