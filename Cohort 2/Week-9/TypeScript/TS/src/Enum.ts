//use case in express
// const app = express();

// enum ResponseStatus {
//   Success = 200,
//   ServerError = 500,
//   NotFound = 404,
// }

// app.get("/", (req, res) => {
//   if (!req.query.key) {
//     res.status(ResponseStatus.NotFound).send();
//   }
//   res.json({
//     status: ResponseStatus.Success,
//   });
// });

// type Key = "Up" | "Down" | "Left" | "Right"; //One way to get rid of problem

//Better way to get rid of problem - enum
enum Direction {
    // Up,              // by default value = 0
    // Down,            // by default value = 1
    // Left,            // by default value = 2
    // Right            // by default value = 3

    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right"
}

function doSomething(keyPressed: Direction){
    if (keyPressed === Direction.Up){
        console.log("Going up");
    }
    else if (keyPressed === Direction.Down){
        console.log("Going down");
    }
    // else if (keyPressed === Direction.Left){
    //     console.log("Going left");
    // }
    // else if (keyPressed === Direction.Right){
    //     console.log("Going right");
    // }
    else if (keyPressed === Direction.Left || keyPressed === Direction.Right){
        
    }
}

// doSomething("up") //This will cause error
//doSomething("ArrowUp"); //This will cause error because "ArrowUp" is not a valid Direction value
//This are valids
doSomething(Direction.Up);
doSomething(Direction.Down);
doSomething(Direction.Left);
doSomething(Direction.Right);
