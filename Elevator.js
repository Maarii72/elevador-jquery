class Elevator{
    constructor(){
        //abrir e fechar, criando métodos
        this.$elevator = $('.elevator')
        this.floorQtd = 3;
    }

    openDoor(){
        if(this.isDoorOpen()){
            return true
        }else {
            this.$elevator.find('.door').removeClass('open')
        }
    }

    closeDoor(){
        if(this.isDoorOpen()){
            this.$elevator.find('.door').removeClass('open')
        }else {
            return true;
        }
        
    }

    isDoorOpen(){
        let doors = this.$elevator.find('.door')
        //if ternario
        return (doors.hasClass('open'))
        /*
        if(doors.hasClass('open')){
            return true;
        }else{
            return false;
        }
        */
    }
    //mudando de andar
    goToFloor(number){
        this.removeFloorClasses()
        this.$elevator.addClass(`floor${number}`)
        this.$elevator.data('floor', number)
    }

    removeFloorClasses(){
        for(let i = 1; i <= this.floorQtd; i++){
            this.$elevator.removeClass(`floor${i}`)
        }
    }
}