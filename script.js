function showResult() {
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Result: ${input1} ${input2}`;
}
