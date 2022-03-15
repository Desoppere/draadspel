input.onPinPressed(TouchPin.P1, function () {
    game.addScore(-1)
    music.playTone(784, music.beat(BeatFraction.Half))
})
game.setScore(6)
let tijd = 20
loops.everyInterval(1000, function () {
    tijd += -1
})
basic.forever(function () {
    basic.showString("" + (game.score()))
    if (game.score() == 0) {
        game.gameOver()
    }
    if (tijd <= 0) {
        basic.showString("T")
        game.gameOver()
    }
})
