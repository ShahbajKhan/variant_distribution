async function toggleSpinner(generatedVariants){
    // hide the instructor selection form
    document.getElementById("preferencesForm").style.display="none"
    // Show the spinner initially
    const spinner = document.getElementById('spinner');
    spinner.style.display = 'block';

    // Hide the spinner after 2 seconds (2000 milliseconds)
    const id = setTimeout(function() {
      spinner.style.display = 'none';
      showResult(generatedVariants)
    }, 3000);
    // clearTimeout(id);
    
    return
}

function showResult(generatedVariants){
    console.log({generatedVariants});
    document.getElementById("finalResult").style.display="block"
    const listArea = document.getElementById("selectedList");
    listArea.innerHTML="";
    const mapArea = document.getElementById("mappedList");
    mapArea.innerHTML="";

    for (const instructor in generatedVariants) {
        if (Object.hasOwnProperty.call(generatedVariants, instructor)) {
            const sessionList = generatedVariants[instructor];
            const li = `<li class="list-disc text-white font bold">${instructor}: ${sessionList.join(",  ")} </li>`
            listArea.innerHTML +=li;
        }
    }
    for (const variant in map) {
        console.log({map});
        if (Object.hasOwnProperty.call(map, variant)) {
            const totalSessions = map[variant];
            const li = `<li class="list-disc text-white font bold">${variant}: ${totalSessions} </li>`
            mappedList.innerHTML +=li;
        }
    }

    return;
}

