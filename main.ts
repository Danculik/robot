input.onButtonPressed(Button.A, function () {
    TurnRight()
})
input.onButtonPressed(Button.B, function () {
    maqueen.motorStop(maqueen.Motors.All)
})
function TurnRight () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 237)
    basic.pause(500)
    maqueen.motorStop(maqueen.Motors.M1)
    basic.pause(1000)
}
let Red = 0
let LedkaCislo = 0
DFRobotMaqueenPlusV2.init()
basic.showLeds(`
    . . . . .
    . . # . #
    . . . . .
    # . . . #
    . # # # .
    `)
basic.forever(function () {
    LedkaCislo = randint(0, 3)
    Red = randint(0, 16777216)
    DFRobotMaqueenPlusV2.setIndexColor(LedkaCislo, Red)
    basic.pause(500)
})
