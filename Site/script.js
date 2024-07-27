const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

// Simulated knowledge base for school subjects
const knowledgeBase = {
    "artes": "Artes é a disciplina que abrange diversas formas de expressão artística, como pintura, escultura, música, teatro e dança.",
    "biologia": "Biologia é o estudo da vida e dos organismos vivos, incluindo sua estrutura, função, crescimento, evolução e distribuição.",
    "ciências": "Ciências é o estudo do mundo natural. Inclui disciplinas como biologia, química, física e geologia.",
    "disciplina": "Disciplina refere-se ao estudo e ao cumprimento das regras e normas em um ambiente educacional.",
    "educação física": "Educação Física é a disciplina que promove a prática de atividades físicas e esportivas para o desenvolvimento físico e mental.",
    "espanhol": "Espanhol é a língua oficial de muitos países na América Latina e Espanha. Estudar espanhol inclui gramática, vocabulário e cultura.",
    "geografia": "Geografia é o estudo das características físicas da Terra e da relação entre o ambiente natural e as atividades humanas.",
    "história": "História é o estudo do passado. Os historiadores usam várias fontes para pesquisar e entender eventos antigos.",
    "inglês": "Inglês é a língua mais falada no mundo e inclui o estudo de gramática, vocabulário, leitura e compreensão.",
    "libras": "Libras é a Língua Brasileira de Sinais, usada pela comunidade surda no Brasil para comunicação.",
    "literatura": "Literatura é o estudo de obras escritas, como romances, poemas e peças, e a análise de seus temas, personagens e estilos.",
    "matemática": "Matemática é a ciência que estuda números, formas, arranjos e padrões. Inclui disciplinas como álgebra, geometria e cálculo.",
    "português": "Português é a língua oficial do Brasil. Inclui o estudo de gramática, literatura, redação e interpretação de texto.",
    "psicologia": "Psicologia é o estudo da mente e do comportamento, explorando como os indivíduos pensam, sentem e se comportam.",
    "química": "Química é a ciência que estuda a composição, estrutura, propriedades e mudanças da matéria.",
    "sociologia": "Sociologia é o estudo das relações sociais, instituições e sociedade, explorando como os indivíduos interagem dentro dos grupos sociais.",
    
    // Exemplos específicos
    "quem descobriu o brasil": "O Brasil foi descoberto por Pedro Álvares Cabral em 22 de abril de 1500.",
    "qual é a capital do brasil": "A capital do Brasil é Brasília.",
    "qual é a fórmula da água": "A fórmula da água é H2O.",
    "o que é um triângulo": "Um triângulo é uma figura geométrica com três lados e três ângulos.",
    "o que é fotossíntese": "Fotossíntese é o processo pelo qual as plantas produzem alimento usando luz solar, dióxido de carbono e água.",
    "quem escreveu os lusíadas": "Os Lusíadas foram escritos por Luís de Camões.",
    "qual é a raiz quadrada de 16": "A raiz quadrada de 16 é 4.",
    "o que é a tabela periódica": "A tabela periódica é uma tabela que organiza todos os elementos químicos conhecidos.",
    "quem foi machado de assis": "Machado de Assis foi um dos maiores escritores brasileiros, conhecido por obras como 'Dom Casmurro' e 'Memórias Póstumas de Brás Cubas'.",
    "o que é energia cinética": "Energia cinética é a energia que um objeto possui devido ao seu movimento.",
    "qual é a fórmula de bhaskara": "A fórmula de Bhaskara é usada para resolver equações quadráticas e é dada por: x = (-b ± √(b²-4ac)) / 2a.",
    "quem foi albert einstein": "Albert Einstein foi um físico teórico conhecido por desenvolver a teoria da relatividade, uma das duas principais teorias da física moderna.",
    "qual é a lei da gravitação universal": "A Lei da Gravitação Universal de Newton afirma que todos os corpos no universo se atraem com uma força proporcional ao produto de suas massas e inversamente proporcional ao quadrado da distância entre eles.",
    "o que é um haicai": "Haicai é uma forma de poesia japonesa que consiste em três versos, com um padrão de sílabas de 5-7-5.",
    "quem pintou a mona lisa": "A Mona Lisa foi pintada por Leonardo da Vinci.",
    "o que é uma célula": "Uma célula é a menor unidade estrutural e funcional dos organismos vivos, que pode realizar todas as funções básicas da vida.",
    "o que é o aquecimento global": "O aquecimento global refere-se ao aumento gradual da temperatura média da Terra devido à concentração crescente de gases de efeito estufa na atmosfera.",
    "o que é um adjetivo": "Um adjetivo é uma classe de palavras que descreve ou modifica um substantivo, fornecendo mais informações sobre ele.",
    "o que é a fotosfera": "A fotosfera é a camada visível do Sol, de onde a maior parte da luz solar que vemos é emitida.",
    "o que é um ângulo reto": "Um ângulo reto é um ângulo que mede 90 graus."
};

// Default responses for unknown questions
const defaultResponses = [
    "Isso é interessante!",
    "Desculpe, não sei a resposta para isso.",
    "Você pode me contar mais?",
    "Essa é uma boa pergunta!",
    "Vamos falar sobre outra coisa.",
    "Estou aqui para ajudar!",
    "Pode reformular a pergunta?",
    "Isso é um fato interessante!",
    "Eu ainda estou aprendendo sobre isso.",
    "O que mais você gostaria de saber?"
];

function getResponse(userMessage) {
    const cleanedMessage = userMessage.toLowerCase().trim();
    for (const key in knowledgeBase) {
        if (cleanedMessage.includes(key)) {
            return knowledgeBase[key];
        }
    }
    // If no specific answer is found, return a random default response
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

function sendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage === "") return;

    addMessage(userInput.value, 'user');
    userInput.value = '';

    setTimeout(() => {
        const botResponse = getResponse(userMessage);
        addMessage(botResponse, 'bot');
    }, 500);
}

function addMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.className = `message ${sender}`;
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

userInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
