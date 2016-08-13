# < Vincent Lim > < Monday 1:00pm >
# CSE 3, Fall 2015, Homework 6

myFavFoods = ["steak", "pasta", "pizza", "chicken", "burritos", "ramen"]

print("My favorite foods are:")
for x in myFavFoods:
    print("\t" + x)

userAnswer = input("Which one of the above is your favorite? ")
for x in myFavFoods:
    if (userAnswer == x):
        print("I like " + x + " too!")

myList = ["Marianas Trench", "One Republic", "Maroon 5"]
print("My favorite bands are:")
for x in myList:
    print("\t" + x)

userBand = input("Which band from above is your favorite? ")
for x in myList:
    if (userBand == x):
        print("I like " + x + " too! They are a great band.")