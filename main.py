random_number = 0

def on_button_pressed_a():
    global random_number
    random_number = randint(1, 6)
    if random_number == 1:
        basic.show_string("my name is ghaid")
    elif random_number == 2:
        basic.show_string("watch a movie")
    elif random_number == 3:
        basic.show_string("play a board game")
    elif random_number == 4:
        basic.show_string("tidy our rooms")
    elif random_number == 5:
        basic.show_string("play a card game")
    else:
        basic.show_string("learn a song")
input.on_button_pressed(Button.A, on_button_pressed_a)
