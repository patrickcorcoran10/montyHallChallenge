function montyHallGame(toSwitch) {
  // Use Math.floor(Math.random() * 3) to determine which door the prize is behind.
  let carDoor = Math.floor(Math.random() * 3);
  // Use Math.floor(Math.random() * 3) to determine the initial door selected.
  let pickedDoor = Math.floor(Math.random() * 3);
  // Array of possible doors
  let doorArray = [0, 1, 2];
  // Use the find() in-built function to select the door that is both not the pickedDoor and not the carDoor.
  let goatDoor = doorArray.find(
    door => door !== carDoor && door !== pickedDoor
  );
  // If/else statement that tests if the carDoor is selected or not.
  if (toSwitch) {
    return (
      carDoor ===
      doorArray.find(door => door !== pickedDoor && door !== goatDoor)
    );
  } else {
    return carDoor === pickedDoor;
  }
}

function simulation(toSwitch) {
  // Set gamesWon variable to 0.
  let gamesWon = 0;
  // Run for loop 10,000 times and determine how many games are won.
  for (let i = 0; i < 10000; i++) {
    gamesWon += montyHallGame(toSwitch);
  }
  //   Returning the total of games won.
  return gamesWon;
}

console.log(
  "This represents how many wins out of 10000 if you do switch doors",
  simulation((toSwitch = true))
);

console.log(
  "This represents how many wins out of 10000 if you do not switch doors",
  simulation((toSwitch = false))
);
