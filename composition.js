// Idea taken from Fun Fun Function

// Composition is designing your objects around what they do (has a relationship)

/*
  dog            = pooper + barker
  cat            = pooper + meower
  cleaningRobot  = driver + cleaner
  murderRobot    = driver + killer 
  murderRobotDog = driver + killer + barker
*/

// Step 1: create a barker
const barker = state => ({
  bark: () => console.log("Woof, I am", state.name)
});

const meower = state => ({
  meow: () => console.log("Meow, I am", state.name)
});

const pooper = state => ({
  poop: () => console.log("I took a big 💩, I am", state.name)
});

const cleaner = state => ({
  clean: () => console.log("I cleaned", state.name)
});

const driver = state => ({
  drive: () => (state.position = state.position + state.speed)
});

const killer = state => ({
  kill: () => console.log("I'm", state.name, "and I killed", state.target)
});

const murderRobotDog = name => {
  let state = {
    name,
    target: 'fido',
    speed: 100,
    position: 0
  };
  // Assigns the properties passed into a new object {}
  return Object.assign({}, barker(state), driver(state), killer(state));
};

murderRobotDog('sniffles').kill()