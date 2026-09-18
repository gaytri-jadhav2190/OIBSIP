function convertTemperature() {

    const temperatureInput =
        document.getElementById("temperature").value;

    const temperature = parseFloat(temperatureInput);

    const unit =
        document.getElementById("unit").value;

    const result =
        document.getElementById("result");


    // Validation

    if (temperatureInput === "" || isNaN(temperature)) {

        result.innerHTML = `
            <div class="result-icon">⚠️</div>
            <p>Please enter a valid temperature.</p>
        `;

        return;
    }


    let celsius;
    let fahrenheit;
    let kelvin;


    // Convert input to Celsius

    if (unit === "celsius") {

        celsius = temperature;

    } else if (unit === "fahrenheit") {

        celsius = (temperature - 32) * 5 / 9;

    } else if (unit === "kelvin") {

        celsius = temperature - 273.15;
    }


    // Absolute zero validation

    if (celsius < -273.15) {

        result.innerHTML = `
            <div class="result-icon">⚠️</div>
            <p>Temperature cannot be below absolute zero.</p>
        `;

        return;
    }


    // Convert Celsius to other units

    fahrenheit = (celsius * 9 / 5) + 32;

    kelvin = celsius + 273.15;


    // Display result

    result.innerHTML = `
        <div class="result-icon">🌡️</div>

        <p>
            <strong>Converted Temperature</strong>
        </p>

        <p>
            ${celsius.toFixed(2)} °C
            &nbsp; | &nbsp;
            ${fahrenheit.toFixed(2)} °F
            &nbsp; | &nbsp;
            ${kelvin.toFixed(2)} K
        </p>
    `;
}
