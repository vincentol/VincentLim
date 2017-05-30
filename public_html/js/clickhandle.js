$("li.dom-explosion-item").click(function() {
  if (hasClass(this, 'dei-1')) {
    $("#class_title").find("span").animate({opacity:0}, function(){
      $(this).text("(CSE 11) Intro to CS & OOP: Java (Accelerated Pace)")
        .animate({opacity:1});
    })
    $("#class_info").find("span").animate({opacity:0}, function(){
      $(this).text("In this class, I learned the basics of Object Oriented Programming through Java. We did 10 projects throughout the quarter varying from animating 'critters' to drawing triangles on the terminal. Everything was done in a UNIX environment using VIM.")
        .animate({opacity:1});
    })
  }
  else if (hasClass(this, 'dei-2')) {
    $("#class_title").find("span").animate({opacity:0}, function(){
      $(this).text("(CSE 12) Basic Data Structures and Object-Oriented Design")
        .animate({opacity:1});
    })
    $("#class_info").find("span").animate({opacity:0}, function(){
      $(this).text("The most important thing in Object Oriented Programming is the objects. This class gave me an introduction to objects in detail by having me design a few basic ones (eg. Stack, Deque, Linked List, Argument Parser)")
        .animate({opacity:1});
    })
  }
  else if (hasClass(this, 'dei-3')) {
    $("#class_title").find("span").animate({opacity:0}, function(){
      $(this).text("(CSE 30) Computer Organization and Systems Programming")
        .animate({opacity:1});
    })
    $("#class_info").find("span").animate({opacity:0}, function(){
      $(this).text("A good programmer can write code, but a great programmer understands how that code is being run by the machine. CSE 30 taught me how code is translated to Assembly language. This class made me more appreciative of higher level languages such as Java, C, and C++ that have compilers that translate code to assembly for me.")
        .animate({opacity:1});
    })
  }
  else if (hasClass(this, 'dei-4')) {
    $("#class_title").find("span").animate({opacity:0}, function(){
      $(this).text("(CSE 100) Advanced Data Structures")
        .animate({opacity:1});
    })
    $("#class_info").find("span").animate({opacity:0}, function(){
      $(this).text("Simple data structures are useful, but can create complicated code because they are inefficient. That is why we must learn about advanced data structures. By building more complex data structures (eg. Huffman Tree, Multiway Tries), I learned how to design data structures based on what my program needs.")
        .animate({opacity:1});
    })
  }
  else if (hasClass(this, 'dei-5')) {
    $("#class_title").find("span").animate({opacity:0}, function(){
      $(this).text("(CSE 101) Design and Analysis of Algorithms")
        .animate({opacity:1});
    })
    $("#class_info").find("span").animate({opacity:0}, function(){
      $(this).text("This class helped me understand why we need programmers. Programmers solve problems, and we do so by using algorithms. In this class, I learned how to design algorithms for different problems, including NP-complete problems. I now use what I learned in this class as a basis for creating algorithms to solve problems and optimize my code.")
        .animate({opacity:1});
    })
  }
  else if (hasClass(this, 'dei-6')) {
    $("#class_title").find("span").animate({opacity:0}, function(){
      $(this).text("(CSE 105) Theory of Computability")
        .animate({opacity:1});
    })
    $("#class_info").find("span").animate({opacity:0}, function(){
      $(this).text("This course taught me what kinds of problems can be solved and how fast thoses solutions can run. Thanks to this knowledge, I am able to determine how long a program will run and how I can make a program run faster.")
        .animate({opacity:1});
    })
  }
  else if (hasClass(this, 'dei-7')) {
    $("#class_title").find("span").animate({opacity:0}, function(){
      $(this).text("(CSE 110) Software Engineering")
        .animate({opacity:1});
    })
    $("#class_info").find("span").animate({opacity:0}, function(){
      $(this).text("This class was designed to prepare students for industry. We practiced the agile process in making an android application throughout the quarter. We also learned about different techniques that software companies put to practice for producing code. We used git, android studio, and firebase in this class.")
        .animate({opacity:1});
    })
  }
  else if (hasClass(this, 'dei-8')) {
    $("#class_title").find("span").animate({opacity:0}, function(){
      $(this).text("(CSE 120) Principles of Computer Operating Systems")
        .animate({opacity:1});
    })
    $("#class_info").find("span").animate({opacity:0}, function(){
      $(this).text("Learning about operating systems made me appreciate the things that are done in the background. By implementing process switching, deadlock handling, and synchronization, I learned how to appreciate, and utilize, everything an operating system offers.")
        .animate({opacity:1});
    })
  }
  else if (hasClass(this, 'dei-9')) {
    $("#class_title").find("span").animate({opacity:0}, function(){
      $(this).text("(CSE 130) Programming Languages: Principles and Paradigms")
        .animate({opacity:1});
    })
    $("#class_info").find("span").animate({opacity:0}, function(){
      $(this).text("This class has to be my favorite class I've taken so far. I utilized the theories I learned in my theory classes (not listed, feel free to contact me about those courses). This class exposed me to functional programming, first class functions, hoisting, and many other features that different programming languages offer. By understanding the strengths and weaknesses of different languages, I can now make informed decisions about which languages is best suited for a specific job.")
        .animate({opacity:1});
    })
  }
  else if (hasClass(this, 'dei-10')) {
    $("#class_title").find("span").animate({opacity:0}, function(){
      $(this).text("(CSE 131) Compiler Construction")
        .animate({opacity:1});
    })
    $("#class_info").find("span").animate({opacity:0}, function(){
      $(this).text("Throughout the span of this class, we implemented many compilers for custom languages. We used OCaml (a functional programming language) and C (as an interface) to translate our 'snake' languages into x86 assembly. In addition to writing compilers for these simple languages, we also wrote a simple garbage collector (heap memory management) which our output assembly code can use at runtime.")
        .animate({opacity:1});
    })
  }
  else if (hasClass(this, 'dei-11')) {
    $("#class_title").find("span").animate({opacity:0}, function(){
      $(this).text("(CSE 140/141) Computer Architecture")
        .animate({opacity:1});
    })
    $("#class_info").find("span").animate({opacity:0}, function(){
      $(this).text("These two classes taught me how computers run our code: How code gets translated multiple times until it is binary, then the machine reads it using different circuits. Some might think that programmers don't need to know how the machine runs the code, they just have to make the code. But by learning how the machine works, I now understand that my programs can be optimized for speed by how you write them, what ISA you are using, and what Hardware(processor) model the machine is running.")
        .animate({opacity:1});
    })
  }
  else if (hasClass(this, 'dei-12')) {
    $("#class_title").find("span").animate({opacity:0}, function(){
      $(this).text("(CSE 170) Interactive Design")
        .animate({opacity:1});
    })
    $("#class_info").find("span").animate({opacity:0}, function(){
      $(this).text("In this class, we had a quarter long group project that was based on a theme. My team got 'collaboration' as a theme, so we created a collaborative note-taking app. This course taught me how to use different api's, AJAX, and express to create a functional node-based web application. I also took Cogs 121, which is the continuation of this course. This continuation class was very similar in the sense that we made a quarter long project based on a theme. The theme I had for Cogs 121 was 'maps', so my team created an app that visualizes Uber's surge pricing regions on a map.")
        .animate({opacity:1});
    })
  }
});

function hasClass(element, cls) {
  return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}
