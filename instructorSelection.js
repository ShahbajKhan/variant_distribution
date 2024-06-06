console.log(allInstructorsList);
allInstructorsList.forEach((singleInstructor) => {
  const singleCheckBox = `<label class="flex justify-center items-center gap-3 mb-2">
  
    <input type="checkbox" name="selectedInstructor" value=${singleInstructor} class="h-5 w-5 text-blue-600 ">
    <span class="text-white bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold p-2 rounded-md  hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">${singleInstructor}</span>
    <input type="text" name=${singleInstructor} id="" placeholder="Default requirement" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
</label>`;
  document.getElementById("instructorSelection").innerHTML += singleCheckBox;
});
document.getElementById("preferencesForm").addEventListener("submit", function(e){
    e.preventDefault()
    
    console.log({e: e.target});
    const checkboxes = document.querySelectorAll(
      'input[name="selectedInstructor"]:checked'
    );
    const selectedInstructors = Array.from(checkboxes).map(
      (checkbox) => checkbox.value
    );
    let instructorList = {}
    selectedInstructors.forEach(instructor=> {
        const requirementNumber = parseInt(e.target[instructor].value)
        instructorList[instructor]=[requirementNumber];
    })
    console.log({instructorList});
    
    // update the number of total_instructors after selecting
    total_instructors = instructorList?.length||20;
    // initially map the number of sessions generated for each variants.
    mapDistributedVariants(instructorList)
    // console.log({map});
     const generatedVariants = generateSession(instructorList)
     console.log({generatedVariants});
     toggleSpinner(generatedVariants);
    //  showResult(generatedVariants)
  })
