// Extend String prototype
String.prototype.toBase64 = function () {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    let binary = '';
    let base64 = '';

    // Convert each character to binary
    for (let i = 0; i < this.length; i++) {
        binary += this.charCodeAt(i).toString(2).padStart(8, '0');
    }

    // Split binary into 6-bit chunks
    for (let i = 0; i < binary.length; i += 6) {
        const chunk = binary.slice(i, i + 6);
        const index = parseInt(chunk, 2);
        base64 += characters[index] || '';
    }

    // Return Base64 without padding
    return base64;
};

String.prototype.fromBase64 = function () {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    let binary = '';
    let decoded = '';

    // Convert each Base64 character to 6-bit binary
    for (let i = 0; i < this.length; i++) {
        const index = characters.indexOf(this[i]);
        binary += index.toString(2).padStart(6, '0');
    }

    // Split binary into 8-bit chunks and convert to characters
    for (let i = 0; i < binary.length; i += 8) {
        const chunk = binary.slice(i, i + 8);
        if (chunk.length === 8) {
            decoded += String.fromCharCode(parseInt(chunk, 2));
        }
    }

    return decoded;
};
