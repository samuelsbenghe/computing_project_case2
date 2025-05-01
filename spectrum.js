function Spectrum() {
    this.name = "spectrum";

    this.draw = function () {
        push();
        var spectrum = fourier.analyze();
        noStroke();

        for (var i = 0; i < spectrum.length; i++) {
            // Calculate color based on amplitude: green (0,255,0) to red (255,0,0)
            var red = map(spectrum[i], 0, 255, 0, 255);
            var green = map(spectrum[i], 0, 255, 255, 0);
            fill(red, green, 0);

            var y = map(i, 0, spectrum.length, 0, height);
            var w = map(spectrum[i], 0, 255, 0, width);
            rect(0, y, w, height / spectrum.length);
        }

        pop();
    };
}
