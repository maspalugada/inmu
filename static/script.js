document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/wifi-scan')
        .then(response => response.json())
        .then(data => {
            const ctx = document.getElementById('wifiChart').getContext('2d');

            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data.map(item => `Channel ${item.channel}`),
                    datasets: [{
                        label: 'Signal Strength (dBm)',
                        data: data.map(item => item.signal_strength),
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: false,
                            min: -100,
                            max: -20
                        }
                    }
                }
            });
        });
});
