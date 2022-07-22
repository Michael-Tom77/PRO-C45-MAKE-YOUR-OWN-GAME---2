class Player{
    constructor(){
        this.index = 0;

        
    }


    show(){
        
    }

    update(count){
        database.ref("/").update({playerCount: count})
    }
}