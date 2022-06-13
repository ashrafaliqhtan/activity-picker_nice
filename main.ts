let random_number = 0
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    random_number = randint(1, 6)
    if (random_number == 1) {
        basic.showString("my name is ghaid")
    } else if (random_number == 2) {
        basic.showString("watch a movie")
    } else if (random_number == 3) {
        basic.showString("play a board game")
    } else if (random_number == 4) {
        basic.showString("tidy our rooms")
    } else if (random_number == 5) {
        basic.showString("play a card game")
    } else {
        basic.showString("learn a song")
    }
    
})
