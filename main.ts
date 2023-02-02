radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 2) {
        basic.showString("Number 2 has been received")
    }
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(2)
})
basic.forever(function () {
    radio.setGroup(4)
})
