class Elevator{
    constructor(){
        //abrir e fechar, criando métodos
        this.$elevator = $('.elevator');
        this.floorQtd = 3;
    }

    openDoors(){
        if(this.isDoorsOpen()){
            return true
        }else {
            this.$elevator.find('.door').removeClass('open')
        }
    }

    closeDoors(){
        if(this.isDoorsOpen()){
            this.$elevator.find('.door').removeClass('open')
        }else {
            return true;
        }

    }

    isDoorsOpen(){
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

        this.closeDoor();

        this.removeFloorClasses()
        let currentfloor = this.$elevator.data('floor')
        let diff =number - currentfloor;

        let time = diff * 2;

        this.$elevator.addClass(`floor${number}`)
        this.$elevator.data('floor', number)
        this.$elevator.css('-webkit-transition-duration', `${time}s`)

        this.closeDoor();
    }

    removeFloorClasses(){
        for(let i = 1; i <= this.floorQtd; i++){
            this.$elevator.removeClass(`floor${i}`)
        }
    }
}