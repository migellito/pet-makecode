input.onButtonPressed(Button.A, function () {
    // Eating
    basic.showLeds(`
        . # . # .
        . . . . .
        # . # . #
        # . . . #
        # # # # #
        `)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.spring), SoundExpressionPlayMode.UntilDone)
    feeded = 1
    food_timer = 0
    poo_timer = 0
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showIcon(IconNames.Happy)
    food_timer = 0
    mood = 19
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . . #
        # # # # #
        # . . . #
        `)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.yawn), SoundExpressionPlayMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        # . . # #
        # # # # .
        . # . # .
        # # . # .
        `)
    poo_timer = 0
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . . #
        # # # # #
        # . . . #
        `)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.yawn), SoundExpressionPlayMode.UntilDone)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
let mood = 0
let poo_timer = 0
let food_timer = 0
let feeded = 0
music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.UntilDone)
basic.showIcon(IconNames.Target)
basic.forever(function () {
    if (poo_timer == 600) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . # .
            . . # # #
            . # # # #
            `)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 0, 3468, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    }
})
basic.forever(function () {
    if (feeded == 1) {
        basic.pause(1000)
        poo_timer += 1
    }
})
basic.forever(function () {
    basic.pause(1000)
    food_timer += 1
})
basic.forever(function () {
    if (feeded == 0) {
        if (food_timer >= 600) {
            mood = 7
        }
    } else {
        if (food_timer >= 36000) {
            mood = 7
        }
    }
})
basic.forever(function () {
    if (mood == 7) {
        basic.showIcon(IconNames.No)
        basic.pause(1000)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(1000)
    }
})
