input.onButtonPressed(Button.A, function () {
    TurnRight()
})
IR.IR_callbackUser(function (message) {
    if (message == 8) {
        message = 0
        maqueen.motorStop(maqueen.Motors.All)
        DFRobotMaqueenPlusV2.showColor(0xff0000)
    } else if (message == 37) {
        message = 0
        DFRobotMaqueenPlusV2.showColor(0x00ff00)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
        basic.pause(1000)
        maqueen.motorStop(maqueen.Motors.All)
    } else if (message == 77) {
        message = 0
        turnleft()
    } else if (message == 70) {
        message = 0
        TurnRight()
    } else {
        basic.showString("" + (message))
    }
})
input.onButtonPressed(Button.AB, function () {
    Blue = 0
    while (Blue == 0) {
        distance = maqueen.Ultrasonic(PingUnit.Centimeters)
        if (distance < 30 && distance != 0) {
            DFRobotMaqueenPlusV2.showColor(0xff0000)
            maqueen.motorStop(maqueen.Motors.All)
            basic.pause(1000)
            Blue = 1
        } else {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
            DFRobotMaqueenPlusV2.showColor(0x00ff00)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    turnleft()
})
function TurnRight () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 237)
    basic.pause(500)
    maqueen.motorStop(maqueen.Motors.M1)
    basic.pause(1000)
}
function turnleft () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 237)
    basic.pause(500)
    maqueen.motorStop(maqueen.Motors.M2)
    basic.pause(1000)
}
let message = 0
let distance = 0
let Blue = 0
DFRobotMaqueenPlusV2.init()
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    # # . # #
    . # . # .
    `)
basic.forever(function () {
    message = IR.IR_read()
})
