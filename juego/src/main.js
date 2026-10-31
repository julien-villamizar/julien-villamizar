import Phaser from 'phaser';
import { Fase01_Entrada } from './scenes/Fase01_Entrada.js';

const config = {
  type: Phaser.AUTO,
  parent: 'game',
  backgroundColor: '#000000',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 960,
    height: 540,
  },
  scene: [Fase01_Entrada],
};

new Phaser.Game(config);