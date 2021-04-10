//Create a stage by getting a reference to the canvas
const stage = new createjs.Stage("fractal");

stage.canvas.width = window.innerWidth;
stage.canvas.height = window.innerHeight;

const fibonacci = (initialTheta, dotRadius = 40, scale = 400, iterations = 500, color = "#523f5f") => {
    let dotOpacity = 0.4

    const canvasCenterX = stage.canvas.width / 2
    const canvasCenterY = stage.canvas.height / 2

    for(let i = 0; i < iterations; i++) {
        let theta = initialTheta * i
        let radius = Math.sqrt(i / iterations)

        let x = scale * radius * Math.cos(theta) + canvasCenterX
        let y = scale * radius * Math.sin(theta) + canvasCenterY
        
        console.log(i, x, y)

        const circle = new createjs.Shape();
        circle.graphics.beginFill(color).drawCircle(x, y, dotRadius);
        circle.set({alpha: dotOpacity})

        stage.addChild(circle);

        if(dotOpacity <= 0) break
        
        dotOpacity -= 0.008
        dotRadius += 0.01
    }
}

// circle.graphics.beginFill("red").drawCircle(0, 0, 3);
// circle.graphics.beginFill("red").drawCircle(80, 0, 3);
// circle.graphics.beginFill("red").drawCircle(40, 40, 3);

//Add Shape instance to stage display list.


//Set position of Shape instance.
// circle.x = stage.canvas.width / 2
// circle.y = stage.canvas.height / 2

//Update stage will render next frame
createjs.Ticker.addEventListener("tick", (e) => {
    stage.removeAllChildren();
    const theta = 1 + e.time * 0.000003

    var text = new createjs.Text("Theta: " + theta + ", Time: " + e.time, "20px Arial", "#523f5f");
    stage.addChild(text)

    fibonacci(theta, 100, 600, 300, "#523f5f")

    stage.update();
});




// const aSymmetricSet = () => {
// 	let c1r = -MID;
// 	let c1center = new Complex(MID, MID);
// 	let c1 = new Circle(c1r, c1center);

// 	let c2r = 160;
// 	let c2center = new Complex(c2r, MID);
// 	let c2 = new Circle(c2r, c2center);

// 	let c3r = Math.abs(c1.r) - c2.r;
// 	let c3x = c2.center.re + c2.r + c3r;
// 	let c3y = c2.center.im;
// 	let c3center = new Complex(c3x, c3y);
// 	let c3 = new Circle(c3r, c3center);

// 	return [[c1, c2, c3]];
// }

// // returning 2 sets
// const nestedSet = () => {
// 	let c1r = -MID;
// 	let c1center = new Complex(MID, MID);
// 	let c1 = new Circle(c1r, c1center);

// 	let c2r = 160;
// 	let c2center = new Complex(MID, c2r);
// 	let c2 = new Circle(c2r, c2center);

// 	let c3r = MID - 160;
// 	let c3center = new Complex(MID, DIM - c3r);
// 	let c3 = new Circle(c3r, c3center);

// 	// nested gasket
// 	let ci1r = -c2r;
// 	let ci1center = new Complex(MID, Math.abs(ci1r));
// 	let ci1 = new Circle(ci1r, ci1center);

// 	let ci2r = Math.abs(ci1r) / 2;
// 	let ci2center = new Complex(MID, ci2r);
// 	let ci2 = new Circle(ci2r, ci2center);

// 	let ci3r = Math.abs(ci1r) - ci2.r;
// 	let ci3x = ci2.center.re;
// 	let ci3y = ci2r + ci2r + ci3r;
// 	let ci3center = new Complex(ci3x, ci3y);
// 	let ci3 = new Circle(ci3r, ci3center);

// 	return [[c1, c2, c3], [ci1, ci2, ci3]];

// }