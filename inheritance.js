// Idea taken from Fun Fun Function

// Inheritance is designing your objects around what they are (is a relationship)

/*
  dog            = pooper + barker
  cat            = pooper + meower
  cleaningRobot  = driver + cleaner
  murderRobot    = driver + killer 
  murderRobotDog = driver + killer + barker
*/

// Step 1: Cat and Dog 
class Cat {
  meow() {}
}

class Dog {
  bark() {}
}

// Step 2: each have to poop

class Cat {
  meow() {}
  poop() {}
}

class Dog {
  meow() {}
  poop() {}
}

// Step 3: Now we have duplications so we split

class Animal {
  poop() {}
}

class Cat extends Animal {
  meow() {}
}

class Dog extends Animal {
  bark() {}
}

// Step 4: Now we have all this poop and need a Cleaning Robot

class CleaningRobot {
  drive() {}
  clean() {}
}

// Step 5: Now we have too many cats and dogs so we need to kills some off

class MurderRobot {
  drive() {}
  kill() {}
}

// Step 6: Now we're duplicating our robot methods so we create a Robot class

class Robot {
  drive() {}
}

class CleaningRobot extends Robot {
  clean() {}
}

class MurderRobot extends Robot {
  kill() {}
}

// Step 7: Your product owner comes along and says they want a Murder Robot Dog that only drives, kills, and barks. 
//         But now the inheritance based design we've gone down does not work -- enter composition

class MurderRobotDog {
  drive() {}
  kills() {}
  barks() {}
}