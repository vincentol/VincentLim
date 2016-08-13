# Vincent Lim
# CSE 3, Monday 1:00pm

available = input("When are you available?")

if ( available == "weekday" ):
    inOrOut = input("Do you prefer indoor or outdoor activities?")

    if (inOrOut == "indoor"):
        print( "Go see a movie!")
    else:
        print( "Go play your favorite sport!")

else: # Available on weekend
    timeOfDay = input("What time of day would you like to go?")

    if (timeOfDay == "morning"):
        print("Go to brunch with your best friend!")

    elif (timeOfDay == "afternoon"):
        print("Go relax at the beach!")

    else:
        age = input("How old are you?")

        if(int(age)>=21):
            print("Go to your favorite bar or club!")

        else:
            print("Go to a concert!")