function createGreetingFunction(name) {
  return function () {
    console.log(`Hello, ${name}!`);
  };
}

const sayHelloToJohn = createGreetingFunction("John");
sayHelloToJohn();

function luffy() {
  function zoro() {
    console.log("Onigiri...!");
  }
  zoro();
}

luffy();
