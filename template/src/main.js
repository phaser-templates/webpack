import 'pixi'
import 'p2'
import Phaser from 'phaser{{#community}}-ce{{/community}}'

import Boot from './states/boot'
import Play from './states/play'
import Preload from './states/preload'

class Game extends Phaser.Game {
  constructor () {
    super(800, 600, Phaser.AUTO, 'game', null)

    this.state.add('boot', Boot)
    this.state.add('preload', Preload)
    this.state.add('play', Play)

    this.state.start('boot')
  }
}

window.game = new Game()
