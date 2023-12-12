export default function rgbToHex(rgb) {
    // Extract the RGB values
    const rgbArray = rgb.match(/\d+/g);

    // Convert each component to a hexadecimal value
    const hexArray = rgbArray.map(component => {
        const hex = parseInt(component).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    });

    // Combine the hexadecimal values
    return "#" + hexArray.join('');
}