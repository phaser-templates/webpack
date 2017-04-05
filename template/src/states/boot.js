import Phaser from 'phaser'

class Boot extends Phaser.State {
  create () {
    this.game.stage.backgroundColor = '#000'
    this.game.state.start('preload')
  }
}

export default Boot
