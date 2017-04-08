import Phaser from 'phaser'

export default class Boot extends Phaser.State {
  init () {
    // Recommended to leave as 1 unless you need multi-touch support
    this.input.maxPointers = 1

    // Phaser will automatically pause if the browser tab the game is in loses focus
    this.stage.disableVisibilityChange = true

    if (this.game.device.desktop) {
      // Desktop specific settings go here
    } else {
      // Mobile specific settings go here
      this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
      this.scale.setMinMax(480, 260, 1024, 768)
      this.scale.forceLandscape = true
    }
  }

  preload () {
    // Load anything you need for the preloader (e.g. loading bars) here
    this.load.image('loaderBar', 'assets/images/loader-bar.png')
  }

  create () {
    // Set the stage background colour
    this.game.stage.backgroundColor = '#000'

    // Everything from the preload function will have been loaded into cache by
    // this point, so we can now start the preloader
    this.state.start('Preloader')
  }
}
