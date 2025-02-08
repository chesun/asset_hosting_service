function drawWorker() {
    // Generate a random integer between 1 and 12 (inclusive)
    const score = Math.floor(Math.random() * 12) + 1;
    
    // Determine which interval the score falls into
    let interval;
    if (score <= 3) {
      interval = "1 to 3";
    } else if (score <= 6) {
      interval = "4 to 6";
    } else if (score <= 9) {
      interval = "7 to 9";
    } else {
      interval = "10 to 12";
    }
  
    // Output the result to the 'result' div
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `You drew a worker who scored in the ${interval} range. (Random score: ${score})`;
  }
  