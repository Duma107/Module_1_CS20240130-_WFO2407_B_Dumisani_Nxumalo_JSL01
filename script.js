function validateSyntax() {
    let input = document.getElementById('petInput').value;
    let result = ''; // Placeholder for validation result

    // Regular expression to match the required syntax
    let regex = /^pet_[a-zA-Z0-9]+$/;

    // Checks if input matches the required syntax
    if (regex.test(input)) {
        result = 'Valid Syntax';
        document.getElementById('statusCircle').style.backgroundColor = 'green';
    } else {
        result = 'Invalid Syntax';
        document.getElementById('statusCircle').style.backgroundColor = 'red';
    }

    // Displays the result
    document.getElementById('result').innerText = result;
}
