class LoginPage2 {
    constructor (){
        this.playButton = createImg("playButton1.png")  
        this.input = createInput("name")
    }
    display(){
        background(bgIMg1);
        this.input.position(width/2-100,height/2)
        this.input.addClass("inputStyle")
        this.playButton.position(width / 2 - 120, height / 2 + 105)
        this.playButton.size(230, 120)
        this.playButton.mousePressed(()=>{
            this.input.hide()
          this.playButton.hide()
        //   gameState = "loginPage2"
        var playerName = this.input.value()
        var greetings = createElement("h3")
        greetings.position(width/2-100,height/2-20)
        greetings.style('color', "red");
        greetings.style('font-size', "30px");
        
        greetings.html("Hello "+playerName)
        var enterButton = createImg("enterButton1.png")
        enterButton.position(width / 2 -140 , height / 2 +100 )
        enterButton.size(230, 120)
        enterButton.mousePressed(()=>{
            gameState = "playGame"
            greetings.hide()
            enterButton.hide()
        })
         
        })
    }
}