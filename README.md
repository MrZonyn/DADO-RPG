🎲 **DADO-RPG**

Um simulador de rolagem de dados simples e eficiente, desenvolvido em C#, ideal para mestres e jogadores de RPG de mesa que buscam agilidade durante as sessões.

🛠️ **Funcionalidades**

O projeto permite a rolagem dos dados mais comuns em sistemas de RPG (D20, D6, D10, etc.), oferecendo:

  - Interface Intuitiva: Seleção rápida do tipo de dado.

  - Sorteio Aleatório: Algoritmo baseado na classe Random do C# para garantir imparcialidade.

  - Leveza: Execução rápida sem consumo excessivo de recursos.

💻 **Estrutura do Código**

O coração da lógica reside na geração de números pseudo-aleatórios. Em termos matemáticos, a probabilidade de qualquer face n cair em um dado de x lados é representada por:
P(n)=x1​

Onde x∈{4,6,8,10,12,20,100}.
