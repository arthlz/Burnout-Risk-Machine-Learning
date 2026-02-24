# Burnout Risk Prediction Machine Learning

Este projeto é um MVP (Minimum Viable Product) construído com o intuito de prever o risco de Burnout a partir de dados organizacionais e psicossociais por meio de uma abordagem quantitativa, interpretável e baseada em dados.

# Objetivo:
- Estimar o valor contínuo do Burn Rate por meio de modelos de regressão

- Comparar diferentes algoritmos de aprendizado de máquina

- Classificar o risco de burnout a partir do valor previsto, utilizando um limiar estatístico

# Base de Dados
- Fonte: <a href="https://www.kaggle.com/datasets/blurredmachine/are-your-employees-burning-out/data">Kaggle – Are Your Employees Burning Out?

- Variável alvo: Burn Rate
  - Tipo: Numérica contínua
  - Intervalo: [0, 1]

- Principais variáveis:

  - Mental Fatigue Score
    - Tipo: Numérica discreta
    - Intervalo: [0, 10]
    - Representa o nível de fadiga mental reportado pelo colaborador.


  - Resource Allocation
    - Tipo: Numérica discreta
    - Intervalo: [1, 10]
    - Indica a carga de trabalho atribuída ao colaborador.


  - Designation
    - Tipo: Numérica discreta (ordinal)
    - Intervalo: [0, 5]
    - Representa o nível hierárquico do colaborador na organização.


  - Gender
    - Tipo: Categórica nominal
    - Categorias: Male, Female


  - Company Type
    - Tipo: Categórica nominal
    - Categorias: Service, Product


  - WFH Setup Available (Work From Home Setup Available)
    - Tipo: Categórica nominal
    - Categorias: Yes, No
    - Indica a acessibilidade para trabalho remoto

## Estrutura do Projeto

```text
.
├── 📂 Data/                          # Armazenamento de dados do projeto
│   ├── 📂 Dado_processado/           # Dataset limpo e preparado para treino
│   │   └── 📄 burnout_preprocessed.csv
│   └── 📂 EDA/                       # Análise exploratória dos dados
│       └── 📓 EDA_burnout.ipynb
│
├── 📂 Front-end+Back_end/            # Interface do usuário e integração
│   ├── 📂 CSS/                       # Estilização (style-consultar e style-resultado)
│   ├── 📂 HTML/                      # Estrutura das páginas (consultar e resultado)
│   ├── 📂 JS/                        # Lógica de interação (script.js)
│   └── 📓 Back_End.ipynb             # Integração e lógica de servidor
│
├── 📂 Teste dos modelos/             # Experimentos com diversos algoritmos
│   ├── 📂 Baseline/
│   ├── 📂 Decision Tree Regressor/
│   ├── 📂 KNN/
│   ├── 📂 Linear Regression/
│   ├── 📂 Random Forest/
│   ├── 📂 SVR/
│   └── 📂 Xgboost/                   # Modelo de melhor performance
│
├── 📄 modelo_burnout_final.pkl       # Modelo treinado e salvo (Pickle)
├── 📓 Modelo_burnout.ipynb           # Notebook principal de treinamento
└── 📄 README.md                      # Documentação do projeto
```
# Metodologia
A análise exploratória dos dados indicou distribuição aproximadamente simétrica do Burn Rate e relações predominantemente lineares entre o Burn Rate e as variáveis numéricas, especialmente o Mental Fatigue Score. Com base nessas evidências, o problema foi formulado como uma tarefa de regressão.

No pré-processamento, foram removidos registros com valores ausentes, excluídas variáveis identificadoras e codificadas as variáveis categóricas. Além disso, foi realizada engenharia de features, com a criação da variável sintética Workload_Index, que combina carga de trabalho e nível hierárquico, visando capturar efeitos conjuntos observados durante o EDA.

# Modelos Avaliados
- Baseline (Dummy Regressor)

- Regressão Linear

- Árvore de Decisão

- Random Forest

- XGBoost

- SVR

- KNN

O baseline foi utilizado como referência mínima de desempenho, com todos os modelos comparados com base nas métricas MAE, RMSE e R².

# Resultados:
Os resultados evidenciaram que os modelos lineares foram capazes de superar substancialmente o patamar de referência (baseline). A otimização dos resultados por meio do XGBoost revela que a relação entre as variáveis não é estritamente linear. Portanto, o uso de uma arquitetura de gradient boosting permitiu a identificação de padrões e interações complexas, corroborando a necessidade de métodos de aprendizado de máquina mais robustos para a plena captura da variabilidade presente na amostra.

# Interpretação do Risco:
Após a predição contínua do Burn Rate pelo modelo, é aplicada uma função de decisão baseada no quartil superior da distribuição (0,66). Valores acima desse limiar são classificados como alto risco de burnout, enquanto valores inferiores indicam menor risco, garantindo uma classificação objetiva e interpretável.

# Interface e Arquitetura do Produto:
O projeto foi concebido como um produto preditivo com separação entre backend, responsável pela predição do Burn Rate e classificação do risco, e frontend, destinado à visualização dos resultados. Essa estrutura permite futura integração com interfaces voltadas a ambientes corporativos e de saúde ocupacional.

## Como executar o projeto

   ```
   Todo o código foi produzido e funcionou localmente no python 3.13.5
   ```

Forma 1 (back-end + front_end): 

1. Clone o repositório:

   ```bash
   git clone https://github.com/arthlz/Burnout-Risk-Machine-Learning
   ```

2. Clique na pasta Front_end+Back_end, acesse o arquivo Back_End.ipynb e execute-o:

   ```py
   ├── 📂 Front-end+Back_end/            # Interface do usuário e integração
   │   ├── 📂 CSS/                       # Estilização (style-consultar e style-resultado)
   │   ├── 📂 HTML/                      # Estrutura das páginas (consultar e resultado)
   │   ├── 📂 JS/                        # Lógica de interação (script.js)
   │   └── 📓 Back_End.ipynb             # Integração e lógica de servidor
   ```
3. Clique na pasta HTML e execute o consultar.html (Recomendo baixar a extensão ***live server*** e abrir o html por ela):

   ```py
   ├── 📂 Front-end+Back_end/             
   │   ├── 📂 CSS/                       
   │   ├── 📂 HTML/                      
   │       ├── 📓 consultar.html         # Execute esse arquivo.
   │       ├── 📓 resultado.html   
   │   ├── 📂 JS/                        
   │   └── 📓 Back_End.ipynb            
   ```

Se não funcionar, tente da segunda forma:

Forma 2 (Localmente no terminal):

  1. Clone o repositório:
  
     ```bash
     git clone https://github.com/arthlz/Burnout-Risk-Machine-Learning
     ```
  
  2. Acesse o arquivo modelo_burnout.ipynb
        ```text
      ├── 📂 Data/                          
      ├── 📂 Front-end+Back_end/            
      ├── 📂 Teste dos modelos/                           
      ├── 📄 modelo_burnout_final.pkl       
      ├── 📓 Modelo_burnout.ipynb           # Execute esse arquivo
      └── 📄 README.md                      
      ```  
  
  3. Selecione o kernel Python Environment Python 3.13.5 e clique em run all:
     ```
     Preencha as informações para as perguntas e receba o resultado do burn_rate
     ```
     

# Membros participantes: 
<table align="center">
  <tr>
    <td align="center">
      <a href="https://github.com/arthlz">
        <img src="https://avatars.githubusercontent.com/u/173482833?v=4" width="120px;" alt="Arthur Luz"/><br>
        <sub><b>Arthur Luz</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/DalvanGustavo">
        <img src="https://avatars.githubusercontent.com/u/112284081?v=4" width="120px;" alt="Dalvan Gustavo"/><br>
        <sub><b>Dalvan Gustavo</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/luisaluna841">
        <img src="https://avatars.githubusercontent.com/u/238343757?v=4" width="120px;" alt="Maria Luísa"/><br>
        <sub><b>Maria Luísa</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/juniorcruz7">
        <img src="https://avatars.githubusercontent.com/u/224153797?v=4" width="120px;" alt="Severino João"/><br>
        <sub><b>Severino João</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/thdruid">
        <img src="https://avatars.githubusercontent.com/u/170187832?v=4" width="120px;" alt="Thiago Luiz"/><br>
        <sub><b>Thiago Luiz</b></sub>
      </a>
    </td>
  </tr>
</table>

  
# Tecnologias Utilizadas:
<div align="left"> <img src="https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white" /> <img src="https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white" /> <img src="https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=for-the-badge&logo=Matplotlib&logoColor=black" /> <img src="https://img.shields.io/badge/SciKit_Learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white" /> </div>
