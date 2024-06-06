document.getElementById("criteriaSelection").addEventListener("submit",function(e){
    e.preventDefault();
    total_variants = parseInt(e.target.variants.value)
    max_variant_each = parseInt(e.target.maxVariants.value)
    highest_repetition = parseInt(e.target.repetition.value)
    console.log({total_variants,max_variant_each,highest_repetition});

    // display the instructor selection field and hide the criteria selection form
    document.getElementById("preferencesForm").style.display="block"
    document.getElementById("criteriaSelection").style.display="none"
})