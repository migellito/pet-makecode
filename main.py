def on_button_pressed_a():
    global feeded, food_timer, poo_timer
    # Eating
    basic.show_leds("""
        . # . # .
                . . . . .
                # . # . #
                # . . . #
                # # # # #
    """)
    music.play_sound_effect(music.builtin_sound_effect(soundExpression.spring),
        SoundExpressionPlayMode.UNTIL_DONE)
    feeded = 1
    food_timer = 0
    poo_timer = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_logo_up():
    basic.show_icon(IconNames.HAPPY)
input.on_gesture(Gesture.LOGO_UP, on_gesture_logo_up)

def on_gesture_tilt_left():
    basic.show_leds("""
        . . . . .
                . . . . #
                . . . . #
                # # # # #
                # . . . #
    """)
    music.play_sound_effect(music.builtin_sound_effect(soundExpression.yawn),
        SoundExpressionPlayMode.UNTIL_DONE)
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)

def on_button_pressed_b():
    basic.show_leds("""
        . . . . .
                # . . # #
                # # # # .
                . # . # .
                # # . # .
    """)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_tilt_right():
    basic.show_leds("""
        . . . . .
                . . . . #
                . . . . #
                # # # # #
                # . . . #
    """)
    music.play_sound_effect(music.builtin_sound_effect(soundExpression.yawn),
        SoundExpressionPlayMode.UNTIL_DONE)
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

poo_timer = 0
food_timer = 0
feeded = 0
music.play_sound_effect(music.builtin_sound_effect(soundExpression.hello),
    SoundExpressionPlayMode.UNTIL_DONE)
basic.show_icon(IconNames.TARGET)

def on_forever():
    global food_timer
    basic.pause(1000)
    food_timer += 1
    if feeded == 1:
        if food_timer == 120:
            basic.show_icon(IconNames.ANGRY)
            music.play_sound_effect(music.create_sound_effect(WaveShape.NOISE,
                    988,
                    1,
                    247,
                    0,
                    4758,
                    SoundExpressionEffect.NONE,
                    InterpolationCurve.LINEAR),
                SoundExpressionPlayMode.UNTIL_DONE)
    else:
        if food_timer == 10:
            basic.show_icon(IconNames.ANGRY)
            music.play_sound_effect(music.create_sound_effect(WaveShape.NOISE,
                    988,
                    1,
                    247,
                    0,
                    4758,
                    SoundExpressionEffect.NONE,
                    InterpolationCurve.LINEAR),
                SoundExpressionPlayMode.UNTIL_DONE)
basic.forever(on_forever)

def on_forever2():
    global poo_timer
    basic.pause(1000)
    poo_timer += 1
    if poo_timer == 20:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . # .
                        . . # # #
                        . # # # #
        """)
        music.play_sound_effect(music.create_sound_effect(WaveShape.SQUARE,
                200,
                1,
                255,
                0,
                3468,
                SoundExpressionEffect.NONE,
                InterpolationCurve.CURVE),
            SoundExpressionPlayMode.UNTIL_DONE)
basic.forever(on_forever2)
