// @ts-check
import { read } from "./afdReader.js";

const fileInput = document.querySelector('input');

fileInput.addEventListener('change', () => {
    const reader = new FileReader;
    reader.onload = () => {
        read(reader.result);
    };

    reader.readAsText(fileInput.files[0]);

});