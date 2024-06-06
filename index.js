const allInstructorsList = [
  "yeasin",
  "contentTeam",
  "probir",
  "sagor",
  "faisal",
  "raju",
  "Aruzu",
  "HossainShahriar",
  "Alam",
  "Jasim",
  "Jakariya",
  "Moniruzzaman",
  "Saki",
  "Farhan",
  "Shakil",
  "Mosharrof",
  "Rokib",
  "Hasib",
  "Zihad",
  "Samiul",
  "Gias",
  "Linkon",
  "Salman"
];

let total_variants = 10;
let total_instructors = 0;
let max_variant_each = 3;
let highest_repetition = 3;
let map = {};
document.getElementById("preferencesForm").style.display="none"
document.getElementById("spinner").style.display="none"
document.getElementById("finalResult").style.display="none"
function mapDistributedVariants(instructorList) {
  map={}
  for (const instructor in instructorList) {
    if (Object.hasOwnProperty.call(instructorList, instructor)) {
      const element = instructorList[instructor];
      if (map[element[0]]) {
        map[element[0]] += 1;
      }else map[element[0]]=1;
    }
  }
  return;
}

function showFormAgain(){
  document.getElementById("finalResult").style.display="none";
  document.getElementById("preferencesForm").style.display="block";
}


