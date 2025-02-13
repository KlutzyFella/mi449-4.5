
// The export statement makes these settings available to other files in 11ty
module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("styles");

    eleventyConfig.addShortcode(
        "circle",
        function (size, color) {
            return `<div style="width:${size}px; height:${size}px; background-color:${color}; border-radius:50%;"></div>`;
        });

    eleventyConfig.addShortcode(
        "card",
        function (name, distance, color) {
            return `<div class="card"><div class="logo" style="background: #${color};"></div>${name}<div class="distance">${distance} AU</div></div>`;
        }
    );
};