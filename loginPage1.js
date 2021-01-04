class LoginPage1 {
constructor (){
    this.startButton = createImg("startButton1.png")  
}
display(){
    background(bgIMg);
    this.startButton.position(width / 2 - 120, height / 2 + 105)
    this.startButton.size(230, 120)
    this.startButton.mousePressed(()=>{
      this.startButton.hide()
      // gameState = "loginPage2"
      login2 = new LoginPage2();
  login2.display()
     
    })
}







}