class Elevator{
    constructor(){
        //abrir e fechar, criando métodos
        this.$elevator = $('.elevator')
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
}