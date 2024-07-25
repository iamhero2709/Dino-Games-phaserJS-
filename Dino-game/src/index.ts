
import Phaser from "phaser";
import PreloadScene from "./scenes/PreloadScene";
import PlayScene from "./scenes/PlayScene";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO, //what graphics library default webgl
  width: 1000,
  height: 340,
  pixelArt:true, //make game pixel art 
  transparent:true, // make background transparent 
  physics: {
    default: 'arcade',
    arcade: {
     debug:true
    }
  },
  scene: [PreloadScene,PlayScene]

};

new Phaser.Game(config);
