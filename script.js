// Exemplo de gráfico usando Chart.js para impactos ambientais
document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('impactoGrafico').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Solar', 'Eólica', 'Hidrelétrica', 'Petróleo', 'Carvão'],
            datasets: [{
                label: 'Emissões de CO2 (em toneladas)',
                data: [50, 30, 10, 500, 600],
                backgroundColor: ['#ffcc00', '#00cc66', '#3399ff', '#ff5733', '#c70039'],
                borderRadius: 8,
            }]
        }
    });

    // Função do Quiz
    const quizForm = document.getElementById('quizForm');
    quizForm.addEventListener('submit', (event) => {
        event.preventDefault();
        Swal.fire('Parabéns!', 'Você completou o quiz!', 'success');
    });
});

