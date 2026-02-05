function searchMedicinal(){
  let input = document.getElementById("medSearch").value.toLowerCase().replace(/\s+/g,"");
  let res = document.getElementById("medResult");
  let found = false;
  res.innerHTML = "";

  for(let key in medicinalPlants){
    let p = medicinalPlants[key];
    let name = p.name.toLowerCase().replace(/\s+/g,"");
    let sci = p.scientific.toLowerCase().replace(/\s+/g,"");

    if(name.includes(input) || sci.includes(input) || key.includes(input)){
      res.innerHTML += `
        <div class="card">
          <h3>${p.name}</h3>
          <p><b>Scientific Name:</b> ${p.scientific}</p>
          <p><b>Uses:</b> ${p.uses}</p>
          <p><b>Benefits:</b> ${p.benefits}</p>
          <p><b>Used Part:</b> ${p.part}</p>
        </div>`;
      found = true;
    }
  }

  if(!found){
    res.innerHTML = "<p>❌ Plant not found</p>";
  }
}

nutritionPlants.forEach(p=>{
  nutritionList.innerHTML += `
  <div class="card">
    <h3>${p[0]}</h3>
    <p><b>Main Nutrient:</b> ${p[1]}</p>
    <p><b>Health Benefit:</b> ${p[2]}</p>
    <p><b>Calories:</b> ${p[3]}</p>
    <p><b>Best Use:</b> ${p[4]}</p>
  </div>`;
});
