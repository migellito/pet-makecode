input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    //  Eating
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
input.onGesture(Gesture.LogoUp, function on_gesture_logo_up() {
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.TiltLeft, function on_gesture_tilt_left() {
    basic.showLeds(`
        . . . . .
                . . . . #
                . . . . #
                # # # # #
                # . . . #
    `)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.yawn), SoundExpressionPlayMode.UntilDone)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    basic.showLeds(`
        . . . . .
                # . . # #
                # # # # .
                . # . # .
                # # . # .
    `)
})
input.onGesture(Gesture.TiltRight, function on_gesture_tilt_right() {
    basic.showLeds(`
        . . . . .
                . . . . #
                . . . . #
                # # # # #
                # . . . #
    `)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.yawn), SoundExpressionPlayMode.UntilDone)
})
let poo_timer = 0
let food_timer = 0
let feeded = 0
music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.UntilDone)
basic.showIcon(IconNames.Target)
basic.forever(function on_forever() {
    
    basic.pause(1000)
    food_timer += 1
    if (feeded == 1) {
        if (food_timer == 120) {
            basic.showIcon(IconNames.Angry)
            music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 988, 1, 247, 0, 4758, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        }
        
    } else if (food_timer == 10) {
        basic.showIcon(IconNames.Angry)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 988, 1, 247, 0, 4758, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    }
    
})
basic.forever(function on_forever2() {
    
    basic.pause(1000)
    poo_timer += 1
    if (poo_timer == 20) {
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
