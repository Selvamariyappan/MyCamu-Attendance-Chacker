document.getElementById('attendance-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'none'; // Hide before calculation
    showResult();
});

function showResult() {
    const totalPeriods = parseFloat(document.getElementById('total-periods').value);
    const periodsPresent = parseFloat(document.getElementById('periods-present').value);
    const resultDiv = document.getElementById('result');

    if (!isNaN(totalPeriods) && totalPeriods !== 0 && !isNaN(periodsPresent)) {
        if (periodsPresent > totalPeriods) {
            resultDiv.textContent = 'Periods present cannot be greater than total periods.';
            resultDiv.style.display = 'inline-block';
            return;
        }
        const result = (periodsPresent / totalPeriods) * 100;
        const roundedResult = Math.round(result);
        resultDiv.textContent = `Overall percentage: ${roundedResult}%`;
        resultDiv.style.display = 'inline-block';
    } else {
        resultDiv.textContent = 'Please enter valid numbers (total periods must not be zero).';
        resultDiv.style.display = 'inline-block';
    }
}
