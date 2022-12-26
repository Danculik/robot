input.onSound(DetectedSound.Loud, function () {
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(1000)
})
let distance = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    distance = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (distance < 30 && distance != 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
        basic.pause(1000)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    }
})
