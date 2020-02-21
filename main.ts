let binary = ""
let decimal = 0
input.onButtonPressed(Button.AB, function () {
    binary = ""
    decimal = 0
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.B, function () {
    if (binary.length == 4) {
        basic.clearScreen()
        basic.showString(binary)
        basic.showLeds(`
            . # . # .
            # # # # #
            . # . # .
            # # # # #
            . # . # .
            `)
        basic.pause(2000)
        basic.clearScreen()
        basic.showNumber(decimal)
        binary = ""
    } else {
        binary = "" + binary + "1"
        decimal = decimal * 2 + 1
    }
})
input.onButtonPressed(Button.A, function () {
    if (binary.length == 4) {
        basic.clearScreen()
        basic.showString(binary)
        basic.showLeds(`
            . # . # .
            # # # # #
            . # . # .
            # # # # #
            . # . # .
            `)
        basic.pause(2000)
        basic.clearScreen()
        basic.showNumber(decimal)
        binary = ""
    } else {
        binary = "" + binary + "0"
        decimal = decimal * 2
    }
})
