document.addEventListener('DOMContentLoaded', () => {
    
    // Lógica Formulário: Pág 1
    const form = document.getElementById('formConsultar');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = document.getElementById('btn-consultar');
            btn.innerText = "Calculando...";

            const formData = {
                genero: document.getElementById('genero').value,
                tipo_empresa: document.getElementById('tipo_empresa').value,
                home_office: document.getElementById('home_office').value,
                nivel_cargo: parseFloat(document.getElementById('nivel_cargo').value) || 0,
                horas_trabalho: parseFloat(document.getElementById('horas_trabalho').value) || 0,
                fadiga_mental: parseFloat(document.getElementById('fadiga_mental').value) || 0
            };

            try {
                const response = await fetch("https://maryalice-anthropometric-rufina.ngrok-free.dev/predict", {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });

                if (!response.ok) throw new Error("Erro no servidor");

                const result = await response.json();
                
                // Salva o resultado para usar na próxima página
                localStorage.setItem('burnout_score', result.burnout_level);
                
                // Redireciona para a págian de resultado
                window.location.href = "resultado.html";

            } catch (error) {
                alert("Erro ao processar consulta.");
                btn.innerText = "Consultar";
            }
        });
    }

    // Lógica de exibição do resultado: Pág 2
    const valorRes = document.getElementById('valor-burnout');
    if (valorRes) {
        const score = localStorage.getItem('burnout_score');
        const statusRisco = document.getElementById('status-risco');

        if (score !== null) {
            const valorPorcentagem = (parseFloat(score) * 100).toFixed(2);
            let cor, texto;

            if (valorPorcentagem < 30) {
                texto = "Risco Baixo";
                cor = "#00ffd5";
            } else if (valorPorcentagem < 70) {
                texto = "Risco Médio";
                cor = "#ffeb3b";
            } else {
                texto = "Risco Alto";
                cor = "#ff2770";
            }

            valorRes.innerText = valorPorcentagem + "%";
            valorRes.style.color = cor;
            valorRes.style.textShadow = `0 0 15px ${cor}`;
            
            statusRisco.innerText = texto;
            statusRisco.style.color = cor;
            statusRisco.style.textShadow = `0 0 10px ${cor}`;
        }
    }

    // Lógica dos selects
    const selects = document.querySelectorAll('.box select');
    selects.forEach(select => {
        const abrir = () => { try { select.showPicker(); } catch(e){} };
        select.addEventListener('focus', abrir);
        select.addEventListener('mousedown', (e) => {
            e.preventDefault();
            abrir();
            select.focus();
        });
    });
});