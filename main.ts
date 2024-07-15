input.calibrateCompass()
let Bot = 0
if (Bot == 0) {
    motorbit.freestyle(255 - input.compassHeading(), 255 + input.compassHeading())
    if (input.buttonIsPressed(Button.A)) {
        Bot += 1
    }
} else {
    if (Bot == 1) {
        motorbit.freestyle(-255 + input.compassHeading(), -255 - input.compassHeading())
        if (input.buttonIsPressed(Button.A)) {
            Bot += 2
        }
    } else {
        basic.pause(100000)
    }
}
basic.forever(function () {
	
})
