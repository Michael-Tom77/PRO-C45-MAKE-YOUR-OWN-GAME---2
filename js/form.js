class Form{
    constructor(){
        this.input = createInput().attribute("placeholder", "Type your Username");
        this.button = createImg("assets/UI/finish_button.png");

        
    }


    show(){
        this.input.position(windowWidth/3 + 100, windowHeight/2- 50);
        this.input.class("customInput");
        this.button.position(windowWidth/3 + 100, windowHeight/2);
        this.button.size(200,100);
    }

    hide(){
        this.button.mousePressed(()=>{
            this.button.hide();
            this.input.hide();
            //playerCount = playerCount + 1;
            player.index = player.index+1;
            player.update(player.index);
        });
    }
}