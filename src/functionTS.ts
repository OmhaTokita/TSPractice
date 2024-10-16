const userDetails = {
    name : "Lars",
    email: "lars@lars.com"
}



async function getFavoriteNumber(): Promise<number> {
    return 26;
  }

  getFavoriteNumber ();

//? is optional 

  function printName(obj: { first: string; last?: string }) {
    // ...
  }
  // Both OK
  printName({ first: "Bob" });
  printName({ first: "Alice" });


  //Union Types - TypeScript’s type system allows you to build new 
  //types out of existing ones using a large variety of operators. 
  //Now that we know how to write a few types, it’s time to start 
  //combining them in interesting ways.

  function printId(id: number | string | any) {
    console.log("Your ID is: " + id);
  }
  // OK
  printId(101);
  // OK
  printId("202");
  // Error
  printId({ myID: 22342 }); // ths will return error since this is not a str


  