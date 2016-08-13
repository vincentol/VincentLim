# <Vincent Lim> <Monday 1pm>
# <10/26/15> Homework 5

print("Hello World!")                   # Print Hello World

name = input("What is your name?")      # Ask the user what their name is and save in the name variable

major = input("What is your major?")    # Ask the user what their major is and save in the major variable

yearBorn = input("When were you born?") # Ask the user when they were born and save in the yearBorn variable

age = 2015 - int(yearBorn)              # Calculate the user's age
                                        # we need to cast yearBorn to an int in order to subtract

print("Hello " + name + "!" + " You are " + str(age) + " years old and are studying " + major)  # Print Users Info

fun = input("Are you having fun? yes or no?")      # Asks user if they are having fun

if fun == "yes":
    print(fun+" you are! That's great!")
else:
    print(fun+"? Well you will be soon!")