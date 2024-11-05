console.log('cal hell');

// Callback hell, also known as the "Pyramid of Doom," 
// where multiple nested callbacks function calls.
// difficult to read, understand, and maintain. 
// This typically occurs when dealing with asynchronous operations, such as making several nested asynchronous function calls.
// inversion of control

asyncFunction1(arg1, function(err, result1) {
    if (err) {
      // handle error
    } else {
      asyncFunction2(result1, function(err, result2) {
        if (err) {
          // handle error
        } else {
          asyncFunction3(result2, function(err, result3) {
            if (err) {
              // handle error
            } else {
              // and so on...
            }
          });
        }
      });
    }
  });
  