function generateSession(instructorList){
    for (const instructor in instructorList) {
        if (Object.hasOwnProperty.call(instructorList, instructor)) {
          const element = instructorList[instructor];
          if (element.length === max_variant_each) continue;
          else {
            for (let i = 2; i <= max_variant_each; i++) {
              const newVariant = generateSingleVariant(element);
              if (newVariant !== 0) {
                instructorList[instructor].push(newVariant);
              }
            }
          }
        }
      }
      return instructorList;
}

function generateSingleVariant(element) {
    let attempts = 0;
    const maxAttempts = 100;
  
    while (attempts < maxAttempts) {
      const randomNumber = Math.floor(Math.random() * total_variants) + 1;
  
      if (
        !element.includes(randomNumber) &&
        (map[randomNumber] || 0) < highest_repetition
      ) {
        map[randomNumber] = (map[randomNumber] || 0) + 1;
        return randomNumber;
      }
  
      attempts++;
    }
  
    // If we exceed the maximum attempts, return 0 or handle as needed
    return 0;
  }