function TurnRight () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 237)
    basic.pause(500)
    maqueen.motorStop(maqueen.Motors.M1)
    basic.pause(1000)
}
DFRobotMaqueenPlusV2.init()
basic.showIcon(IconNames.Asleep)
basic.forever(function () {
    TurnRight()
})
