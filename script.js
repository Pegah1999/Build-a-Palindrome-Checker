const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");
const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
    const text = textInput.value.trim();

    const cleanedText = text.toLowerCase().replace(/[^a-z0-9]/gi, '');
    const reversedText = cleanedText.split('').reverse().join('');

    if (text === "") {
        alert("Please input a value.");
    } else if (cleanedText == reversedText) {
        resultDiv.textContent = `${text} is a palindrome`;
    } else if (cleanedText != reversedText) {
        resultDiv.textContent = `${text} is not a palindrome`;
    }
});