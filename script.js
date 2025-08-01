function showResult() {
    const input1 = parseFloat(document.getElementById('input1').value);
    const input2 = parseFloat(document.getElementById('input2').value);
    const resultDiv = document.getElementById('result');
    if (!isNaN(input1) && input1 !== 0 && !isNaN(input2)) {
        const result = (input2 / input1) * 100;
        const roundedResult = (result % 1 >= 0.5) ? Math.ceil(result) : Math.floor(result);
        resultDiv.textContent = `Overall percentage : ${roundedResult}%`;
        resultDiv.style.display = 'inline-block';
    } else {
        resultDiv.textContent = 'Please enter valid numbers (input 1 must not be zero).';
        resultDiv.style.display = 'inline-block';
    }
}
