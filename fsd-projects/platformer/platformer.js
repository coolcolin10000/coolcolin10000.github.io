$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
  
    createPlatform(1100, 300, 25, 450, "red");
  createPlatform(900, 625, 300, 25, "red", 800, 2000, 1);
  createPlatform(500, 500, 350, 25, "red");
  createPlatform(100, 400, 350, 25, "red");
  createPlatform(300, 275, 600, 25, "red");
  createBadPlatform(100, 100, 25, 300, "black")




    // TODO 3 - Create Collectables
createCollectable("database", 1200, 700,)
createCollectable("max", -1000, 450, 0, 0, -1000, 800)
createCollectable("steve", 100, 200, 1, 1)



    
    // TODO 4 - Create Cannons

createCannon("right", 750, 1000)
//createCannon("top", 350, 800)
createCannon("top", 1000, 2000, 200, 200, 100, 1000, 3) 
createCannon("left", 425, 1000)
createCannon("right", 300, 1000)
createProjectile("left", 425, 1000, 100, 100);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
