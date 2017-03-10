var Brick = (function () {
    function getRandomColor() {
        var chars = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 3; i++) {
            color += chars[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
