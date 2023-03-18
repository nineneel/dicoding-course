// TODO: tampilkan teks pada notes.txt pada console.
const fs = require("fs");
const path = require("path");

const fileReadCallback = (error, data) => {
    if (error) {
        console.log("error: " + error);
        return;
    }

    console.log(data);
};

fs.readFile("note.txt", "UTF-8", fileReadCallback);
path.resolve(__dirname, "note.txt");
