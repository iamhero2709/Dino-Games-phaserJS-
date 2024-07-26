 
 export class Player extends Phaser.Physics.Arcade.Sprite{ cursor:Phaser.Types.Input.Keyboard.CursorKeys;
    constructor(scene:Phaser.Scene,x:number,y:number){
 super(scene,x,y,'dino-idle');
 scene.add.existing(this);
 scene.physics.add.existing(this);
this.init();
this.scene.events.on(Phaser.Scenes.Events.UPDATE,this.update,this);
    }
    init(){
        this.cursor=this.scene.input.keyboard.createCursorKeys();
        this
        .setOrigin(0,1)
        .setGravityY(5000)
        .setCollideWorldBounds(true)
        .setBodySize(44,92);
        this.registerPlayerControl();
        this.registerAnimation()
    }
    registerPlayerControl(){
        const spaceBar=this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        spaceBar.on('down',()=>{
            this.setVelocityY(-1600);
        })
       
    }
    update(){
       const {space}=this.cursor;
       const isSpaceJustDown=Phaser.Input.Keyboard.JustDown(space);
     const onFloor=(this.body as Phaser.Physics.Arcade.Body).onFloor();
     
       if(space.isDown &&onFloor){
        this.setVelocityY(-1600);
       }
    }
    playRunAnimation(){
        this.play('dino-run-anim',true)
    }
    registerAnimation(){
 this.anims.create({
    key:'dino-run-anim',
    frames:this.anims.generateFrameNumbers('dino-run',{start:2,end:3}),
    frameRate:10,
    repeat:-1,
 });
    }
}
