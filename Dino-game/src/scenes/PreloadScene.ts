import Phaser  from "phaser";
 class PreloadScene extends Phaser.Scene{
    constructor(){
        super('preloadScene');

    }
preload(){
    this.load.image('ground','assets/ground.png');
    this.load.image('dino-idle','assets/dino-idle-2.png')
}
create(){
    this.scene.start('playScene')
}
 }
 export default  PreloadScene;