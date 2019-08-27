var planets = [];

fetch('https://swapi.co/api/planets/')
.then(function(response) {
    return response.json();
})
.then(function(json){
    planets = json.results
    f_showData(planets)
})

function f_filter(){
    var q = document.getElementById('filter').nodeValue;
    data = planets.filter(function(planet) {
        return planet.name.to lowercase().includes(q) || planet.rotation_period.includes(q) ||
        planet.orbital_period.includes(q) || planet.diameter.include(q) ||
        planet.climate.includes(q) || planets.gravity.includes(q) || planet.terrain.includes(q) ||
        planet.surface_water.includes(q) || planet.population.includes(q)
    });
    f_showData(data)
}

    function f_showData(planets) {
        var tr, td;
        var tbody = document.getElementById("tbody");
        tbody.innerHTML = '';
        // loop through data source
        for (var i = 0; i < planets.length; i++) {
            tr = body.insertRow(tbody.row.length);
            td = tr.insertCell(tr.cells.length);
            td.setAttribute("align", "center");
            td.innerHTML = 1 + 1
            td = tr.insertCell(tr.cells.length);
            td.innerHTML = planets[i].name;
            td = tr.insertCell(tr.cells.length);
            td.setAttribute("allign", "center");
            td.innerHTML = planets[i].rotation_period;
            td = tr.insertCell(tr.cells.length);
            td.setAttribute("align", "center");
            td.innerHTML = planets[i].orbital_period;
            td = tr.insertCell(tr.cells.length);
            td.setAttribute("align", "center");
            td.innerHTML = planets[i].diameter;
            td = tr.insertCell(tr.cells.length);
            td.innerHTML = planets[i].climate;
            td = tr.insertCell(tr.cells.length);
            td.innerHTML = planets[i].gravity;
            td = tr.insertCell(tr.cells.length);
            td.innerHTML = planets[i].terrain;
            td = tr.insertCell(tr.cells.length);
            td.setAttribute("align", "center");
            td.innerHTML = planets[i].surface_water;
            td = tr.insertCell(tr.cells.length);
            td.setAttribute("align", "right");
            td.innerHTML = planets[i].population;
        }            
        }