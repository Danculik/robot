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
            maqueen.motorStop(maqueen.Motors.All)
            basic.pause(1000)
            Blue = 1
        } else {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    turnleft()
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    Blue = 0
    while (Blue <= 5) {
        distance = maqueen.Ultrasonic(PingUnit.Centimeters)
        if (distance < 30) {
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 200)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 200)
            basic.pause(1000)
            maqueen.motorStop(maqueen.Motors.All)
            Blue += 1
        } else {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
        }
    }
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
let Red = 0
let LedkaCislo = 0
let message = 0
let distance = 0
let Blue = 0
DFRobotMaqueenPlusV2.init()
basic.showLeds(`
    . # # # .
    # . . . #
    # # . # #
    # . . . #
    . # # # .
    `)
basic.forever(function () {
    message = IR.IR_read()
    LedkaCislo = randint(0, 3)
    Red = randint(0, 16777216)
    DFRobotMaqueenPlusV2.setIndexColor(LedkaCislo, Red)
    basic.pause(500)
})
