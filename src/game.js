'use strict';

/**
 * Generate a random color
 *
 * @returns {string}
 */
function getRandomColor() {
    var chars = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 3; i++) {
        color += chars[Math.floor(Math.random() * 16)];
    }
    return color;
}

/**
 * Gets the context from the game canvas
 *
 * @returns {CanvasRenderingContext2D}
 */
function getContext() {
    var canvas = document.getElementById('gameCanvas');
    return canvas.getContext('2d');
}

/**
 * Initialises the game
 */
function init() {
    draw();
    setInterval(update, 1000 / 240);
}

// Define ball properties
var ball = {
    x: 400,
    y: 320,
    vx: 1,
    vy: 1,
    radius: 10,
    startAngle: 0,
    endAngle: Math.PI * 2,
    anticlockwise: false
};

/**
 * Draws the shapes onto the canvas
 */
function draw() {
    // Get the canvas context first
    var context = getContext();

    /* Draw the bricks
     * Brick x is 80
     * Brick y is 20
     */
    for (var y = 0; y < 160; y += 20) {
        for (var x = 0; x < 800; x += 80) {
            context.fillStyle = getRandomColor();
            context.fillRect(x + 1, y + 1, 78, 18);
            // console.log(x + ', ' + y);
        }
    }

    // Draw the ball
    context.fillStyle = '#56b0ff';
    context.beginPath();
    context.arc(ball.x, ball.y, ball.radius, ball.startAngle, ball.endAngle, ball.anticlockwise);
    context.fill();
    context.closePath();

    // Draw the paddle
    context.fillStyle = '#3235ff';
    context.fillRect(350, 460, 100, 20);

    console.log('Game initialised.');
}

/**
 * Updates the canvas
 */
function update() {
    ball.x += ball.vx;
    ball.y += ball.vy;

    // Use ball radius so the ball bounces from the edge, not center
    if (ball.x > 800 - ball.radius)
        ball.vx *= -1;
    if (ball.y > 500 - ball.radius)
        ball.vy *= -1;

    if (ball.x < ball.radius)
        ball.vx /= -1;
    if (ball.y < ball.radius)
        ball.vy /= -1;
        draw();
    console.log('Updated canvas.');
}

// Let's go!
init();
