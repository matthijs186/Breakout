var Ball = (function () {

    var draw = function(context) {
        context.fillStyle = '#56b0ff';
        context.beginPath();

        context.arc(ball.x, ball.y, ball.radius, ball.startAngle, ball.endAngle, ball.anticlockwise);
        context.fill();
    };

    var update = function() {
        ball.x += ball.vx;
        ball.y += ball.vy;

        // Use ball radius so the ball bounces from the edge, not center
        if (ball.x > 800 - ball.radius)
            ball.vx *= -1;
        if (ball.y > 500 - ball.radius)
            ball.vy *= -1;

        //if (ball.x > ball.radius)
        //    ball.vx = 0;
        //if (ball.y > )
        draw();
        console.log('Updated canvas.');
    };

    var self = {
        draw: draw,
        update: update
    };
})();
