$(function() {


  function getBlocks()
  {
    bloques = [];

    bloques.push(createBlock(0,0,14,34))
    bloques.push(createBlock(16,2,31,7))
    bloques.push(createBlock(16,11,31,23))
    bloques.push(createBlock((16+31+2),2,5,32))
    bloques.push(createBlock((56),2,33,32))
    bloques.push(createBlock(0,0,3,70))
    bloques.push(createBlock((5),38,6,28))
    bloques.push(createBlock(42,37,36,18))
    bloques.push(createBlock(80,37,9,18))
    bloques.push(createBlock(16,37,24,8))
    bloques.push(createBlock(16,47,24,8))
    bloques.push(createBlock(16,58,24,8))
    bloques.push(createBlock(42,58,36,8))
    bloques.push(createBlock(81,58,12,11))
    bloques.push(createBlock(8,69,85,9))

    return bloques;
  }

  function createBlock(x,y,width,height)
  {
    var block = {};
    block.x = Math.floor(x);
    block.y = Math.floor(y);
    block.height = Math.floor(height);
    block.width = Math.floor(width);

    return block;
  }


  /*Este metodo cacula las dimensiones del mapa de acuerdo al tamanio de la cuadricula y las dimenciones de cada cuadrito*/
  function getSvgSize(gridSize, squareLength) {
    var width = gridSize.x * squareLength;
    var height = gridSize.y * squareLength;
    return { width:width, height:height };
  }

  /*Funcion que corrobora si las coordenadas dadas al metodo son parte del borde*/
  function isBorder(x, y, gridSize) {
    return x==0 || y == 0 || x == (gridSize.x-1) || y == (gridSize.y-1);
  }

  /**/
  function buildMap(gridSize, ratios) {
    /*map es un objeto que contiene cuatro arreglos los cuales guardan los valores 
    de la cuadricula en general, los cuadros que son pasto, los cuadros que son piedra
    y los cuadros que son lava*/
    var map = { grid:[], grass:[], rock:[], lava:[] };

    /*Este for recorre todos los valores del eje x de la cuadricula uno por uno*/
    for (x = 0; x < gridSize.x; x++) {
        /*crea en cada instancia del objeto map, en su atributo "grid" un arreglo vacio, haciendo entonces
        al atributo grid un arreglo bidimencional*/
        map.grid[x] = [];
        /*De forma anidada otro for recorre cada casilla del eje y de la cuadricula casilla por casilla(como ya sabes quien)*/
        for (y = 0; y < gridSize.y; y++) {
            /*Dentro de la variable local rock se guarda un valor boleano que depende de un numero random generado de
            0 a 1 el cual debera ser menor que el ratio indicado al momento de llamar al metodo para poder ser true
            y sera false si es mayor que dicho ratio*/
            var rock = Math.random() < ratios.rock;
            /*Dentro de la variable local lava se guarda otro booleano con la misma metodologia de la variable rock*/
            var lava = Math.random() < ratios.lava;
            /*Dentro de la variable type sera igual a rock si es un borde, caso contrario sera grass*/
            var type = isBorder(x, y, gridSize)?"rock":"grass";
            /*Si no era borde y se le asigno tipo grass pero la posibilidad de rock fue true, entonces se asignara tipo rock*/
            if(rock) {
              type = "rock";
            }
            /*Aun cuando no haya sido borde, haya sido rock, si fue tipo lava, este sera el tipo asignado*/
            if(lava) {
              type = "lava";
            }
            /*En la variable cel, se guardara un objeto el cual tiene 3 atributos llamados x, y y type a los cuales se les asignan
            los valores de sus respectivas variables*/
            var cell = { x:x, y:y , type:type };
            /*dentro del objeto map en el atributo grid que es un arreglo bidimencional se guardara el objeto cell correspondiente*/
            map.grid[x][y] = cell;
            /*De acuerdo al tipo de la celda, se guardara en el atributo correspondiente dentro del objeto map la celda por medio 
            de la llamada al metodo push*/
            map[type].push(cell);
        }
    }
    /*Al finalizar la insercion y generacion de todas las celdas se regresara el objeto mapa*/
    return map;
    //******************************************************************************************************
    //***CONCLUSION*****************************************************************************************
    //******************************************************************************************************
    /*El objeto retornado map, contiene 4 atributos, todos se llenan con objetos cell, los objetos cell estan
    conformados por medio de coordenadas "x" y "y" asi como el tipo correspondiente a la celda

    Los 4 atributos que tiene el objeto retornado son:
      - grid: este arreglo 2D guarda todas las celdas de manera ordenada con sus coordenadas y su tipo
      - grass: este arreglo 1D guarda todas las celdas tipo grass
      - rock: este arreglo 1D guarda todas las celdas tipo rock
      - lava: este arreglo 1D guarda todas las celdas tipo lava*/

  }

  function buildMap2(gridSize, ratios) {
    /*map es un objeto que contiene cuatro arreglos los cuales guardan los valores 
    de la cuadricula en general, los cuadros que son pasto, los cuadros que son piedra
    y los cuadros que son lava*/
    var map = { grid:[], grass:[], rock:[], lava:[] };

    /*Este for recorre todos los valores del eje x de la cuadricula uno por uno*/
    for (x = 0; x < gridSize.x; x++) {
        /*crea en cada instancia del objeto map, en su atributo "grid" un arreglo vacio, haciendo entonces
        al atributo grid un arreglo bidimencional*/
        map.grid[x] = [];
        /*De forma anidada otro for recorre cada casilla del eje y de la cuadricula casilla por casilla(como ya sabes quien)*/
        for (y = 0; y < gridSize.y; y++) {
            /*Dentro de la variable local rock se guarda un valor boleano que depende de un numero random generado de
            0 a 1 el cual debera ser menor que el ratio indicado al momento de llamar al metodo para poder ser true
            y sera false si es mayor que dicho ratio*/
            //var rock = Math.random() < ratios.rock;
            /*Dentro de la variable local lava se guarda otro booleano con la misma metodologia de la variable rock
            var lava = Math.random() < ratios.lava;*/
            /*Dentro de la variable type sera igual a rock si es un borde, caso contrario sera grass*/
            var type = isBorder(x, y, gridSize)?"rock":"grass";
            /*Si no era borde y se le asigno tipo grass pero la posibilidad de rock fue true, entonces se asignara tipo rock
            if(rock) {
              type = "rock";
            }
            /*Aun cuando no haya sido borde, haya sido rock, si fue tipo lava, este sera el tipo asignado
            if(lava) {
              type = "lava";
            }
            /*En la variable cel, se guardara un objeto el cual tiene 3 atributos llamados x, y y type a los cuales se les asignan
            los valores de sus respectivas variables*/

            bloques = getBlocks();

            for(var i = 0;i<bloques.length;i++)
            {
              if(x>bloques[i].x && x<=bloques[i].x+bloques[i].width && y>bloques[i].y && y<=bloques[i].y+bloques[i].height)
              {
                console.log("x: "+x+", y: "+y);
                type = "rock";
              }
            }

            var cell = { x:x, y:y , type:type };
            /*dentro del objeto map en el atributo grid que es un arreglo bidimencional se guardara el objeto cell correspondiente*/
            map.grid[x][y] = cell;
            /*De acuerdo al tipo de la celda, se guardara en el atributo correspondiente dentro del objeto map la celda por medio 
            de la llamada al metodo push*/
            map[type].push(cell);
        }
    }
    /*Al finalizar la insercion y generacion de todas las celdas se regresara el objeto mapa*/
    return map;
    //******************************************************************************************************
    //***CONCLUSION*****************************************************************************************
    //******************************************************************************************************
    /*El objeto retornado map, contiene 4 atributos, todos se llenan con objetos cell, los objetos cell estan
    conformados por medio de coordenadas "x" y "y" asi como el tipo correspondiente a la celda

    Los 4 atributos que tiene el objeto retornado son:
      - grid: este arreglo 2D guarda todas las celdas de manera ordenada con sus coordenadas y su tipo
      - grass: este arreglo 1D guarda todas las celdas tipo grass
      - rock: este arreglo 1D guarda todas las celdas tipo rock
      - lava: este arreglo 1D guarda todas las celdas tipo lava*/

  }


  /*Esta funcion retorna un objeto con el valor de dos escalas por medio de algunos metodos de D3*/
  function getScale(gridSize, svgSize) {
    /*En esta funcion se generan dos objetos scale, los cuales tienen como funcion 
    pasar de un valor a otro con base a cierta funcion, en este caso es un scale lineal.
    domain, es el rango en el cual se pueden mover los valores de enrada
    range, es el rango de valores de salida.

    P/E:
      DOMAIN: 0 - 10
      RANGE:  0 - 100

     INPUT: 5 -> OUTPUT: 50
    */

    var xScale = d3.scale.linear().domain([0,gridSize.x]).range([0,svgSize.width]);
    var yScale = d3.scale.linear().domain([0,gridSize.y]).range([0,svgSize.height]);
    return { x:xScale, y:yScale };
  }



  function drawCells(svgContainer, scales, data, cssClass) {
    
    var gridGroup = svgContainer.append("g");
    var cells = gridGroup.selectAll("rect")
                .data(data)
                .enter()
                .append("rect");
    var cellAttributes = cells
             .attr("x", function (d) { return scales.x(d.x); })
             .attr("y", function (d) { return scales.y(d.y); })
             .attr("width", function (d) { return squareLength; })
             .attr("height", function (d) { return squareLength; })
             .attr("class", cssClass);
  }

  function drawMowerHistory(groups, scales, path) {
    // path
    groups.path.selectAll(".path").remove();
    var lineFunction = d3.svg.line()
               .x(function(d) { return scales.x(d.x + 0.5); })
               .y(function(d) { return scales.y(d.y + 0.5); })
               .interpolate("linear");

    var lineGraph = groups.path.append("path")
                              .attr("d", lineFunction(path))
                              .attr("class", "path")
                              .attr("fill", "none");

    // position
    var circleData = groups.position.selectAll("circle").data(path);
    circleData.exit().remove();
    var circles = circleData.enter().append("circle");
    var circleAttributes = circles
             .attr("cx", function (d) { return scales.x(d.x + 0.5); })
             .attr("cy", function (d) { return scales.y(d.y + 0.5); })
             .attr("r", function (d) { return circleRadius; })
             .attr("class", "position");

    // position number
    var textData = groups.position.selectAll("text").data(path);
    textData.exit().remove();
    var texts = textData.enter().append("text");
    var textAttributes = texts
             .attr("x", function (d) { return scales.x(d.x + 0.5); })
             .attr("y", function (d) { return scales.y(d.y + 0.5); })
             .attr("dy", ".31em")
             .text(function(d,i) { return i; })
             .attr("class", "positionNumber");
  }

  function pickRandomPosition(map) {
    var grass = map.grass;
    var i = Math.ceil(Math.random() * grass.length);
    return grass[i];
  }

  function getNext(map, current, command) {
    switch(command) {
      case "U":
        return map.grid[current.x][current.y-1];
      case "D":
        return map.grid[current.x][current.y+1];
      case "R":
        return map.grid[current.x+1][current.y];
      case "L":
        return map.grid[current.x-1][current.y];
      default:
        throw "Unexpected command : "+command;
      }
  }

  function executeCommands(e) {
    var content = $('#commands').val();
    content = content.toUpperCase().replace(/[^UDRL]/g, "");
    $('#commands').val(content);
    var path = [start];
    var current = start;
    for(i = 0; i < content.length; i++) {
      var next = getNext(map, current, content[i]);
      switch(next.type) {
        case "grass":
          path.push(next);
          current = next;
          break;
        case "rock":
          // stay at the same place
          break;
        case "lava":
          drawMowerHistory(groups, scales, path);
          alert("The mower turned into ashes, as predicted.", "Start again.");
          $('#commands').val("");
          drawMowerHistory(groups, scales, [start]);
          return;
        default:
          throw "Unexpected terrain type "+next.type;
      }
    }
    drawMowerHistory(groups, scales, path);
  }



  var squareLength = 15;
  var circleRadius = 5;
  var ratios = { rock:0.05, lava:0.05 };

  var layoutSize = {x:95 ,y: 80};

  var gridSize;
  var windowSize;
  var svgSize;
  var map;
  var start;
  var svgContainer;
  var scales;
  var groups;

  function initEverything()
  {
    gridSize = { x:layoutSize.x, y:layoutSize.y};

    windowSize = {x:window.innerWidth ,y: window.innerHeight};

    squareLength = (gridSize.x/gridSize.y)>(windowSize.x/windowSize.y) ? Math.floor(windowSize.x*.95)/gridSize.x:Math.floor(windowSize.y*.95)/gridSize.y;

    svgSize = getSvgSize(gridSize, squareLength);
    map = buildMap2(gridSize, ratios);
    start = pickRandomPosition(map)

    svgContainer = d3.select(".display")
                            .append("svg")
                              .attr("width", svgSize.width)
                              .attr("height", svgSize.height);
    scales = getScale(gridSize, svgSize);

    drawCells(svgContainer, scales, map.grass, "grass");
    drawCells(svgContainer, scales, map.rock, "rock");
    drawCells(svgContainer, scales, map.lava, "lava");

    groups = { path:svgContainer.append("g"),
                    position:svgContainer.append("g") };
  }

  initEverything();

  $('#commands').on('input', executeCommands);

  $(function (){
    var socket = io();
    

    socket.on('chat message',function(msg){
        var valorActual = $('#commands').val();
        $('#commands').val(valorActual+msg);
        console.log("LLEGO UN MENSAJE")
        executeCommands();
      });

      return false;
    });

  drawMowerHistory(groups, scales, [start]);

  $(window).resize(function(){
    
    initEverything();

    console.log("WINDOW CHANGE SIZE");
  });

  $('#commands').focus();
  
});