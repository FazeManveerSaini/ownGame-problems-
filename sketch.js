var gameState = "loginPage1"
var startButton, login1, login2;
var spaceship, alien, hero, ufo;
function preload() {
  bgIMg = loadImage("spacewarsBg.jpg")
  bgIMg1 = loadImage("spaceBg.jpg")
  heroImg = loadImage("playerShip1.png")
  alienImg = loadImage("alien1.png")
  ufoImg = loadImage("ufo1.png")


}

function setup() {
  createCanvas(750, 500);
  login1 = new LoginPage1();
  login1.display()
  hero = createSprite(300, 450, 50, 50)
  hero.addImage(heroImg)
  bulletsGrp = new Group
  ufoGrp = new Group

}

function draw() {

  if (gameState === "playGame") {
    clear()
    background(bgIMg1);
    game()

  }


}
function game() {
  // edeges = createEdgeSprites
  drawSprites();

  if (keyDown(LEFT_ARROW)) {
    hero.x = hero.x - 10
  }
  if (keyDown(RIGHT_ARROW)) {
    hero.x = hero.x + 10
  }
  if (frameCount % 80 === 0) {
    ufo = createSprite(200, -10, 100, 100)
    ufo.x = Math.round(random(102, 700))
    ufo.velocity.y = 3
    ufo.addImage(ufoImg)
    ufo.scale = 0.17
    ufoGrp.add(ufo)

  }
  if (frameCount % 120 === 0) {
    alien = createSprite(200, 100, 100, 100)
    alien.addImage(alienImg)
    alien.scale = 0.17
    alien.x = Math.round(random(102, 700))
    if (alien.y > 0 && alien.y <= 100) {
      alien.velocity.y = 3
      alien.velocity.x = 3
    }
    if (alien.y > 100 && alien.y < 300) {
      alien.velocity.y = 3
      alien.velocity.x = -3
    }
    if (keyDown("up")) {
      bullets = createSprite(300, 450, 10, 10)
      bullets.x = hero.x
      bullets.velocity.y = -4
      bullets.shapeColor = "white"
      bulletsGrp.add(bullets)
    }
    if (bulletsGrp.isTouching(ufoGrp)) {
      ufoGrp.destroyEach()
      bulletsGrp.destroyEach()
      console.log("isTouching")
    }
  }
}