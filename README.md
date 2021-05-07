RAQUEL CRISTINA DA SILVA COELHO BARBOSA
DANILO SOUZA


Equipe: trabalhar em duplas ou até trios (no máximo)
Objetivo: escrever a documentação (negócio/requisitos) e implementar o código de um sistema que permite o cálculo da área e perímetro de 
circunferências (área PI.R^2. perímetro 2.PI.R) 
retângulos (área BASE.ALTURA. perímetro 2.(BASE+ALTURA)).

Cada membro da equipe deverá ficar responsável por uma parte da documentação e do código e deverá ser usado um repositório Git remoto compartilhado via GitHub.

O repositório deverá ser informado ao professor.
Use microcommits e branches para novas funcionalidades.



Documentação - Negócio/Requisitos

Negócio

Desenvolvedores freelancers que desenvolvem páginas na internet para gerar renda passiva com visitas e Google Ads

Problema 

Pessoas leigas em matemática ou em processo de aprendizagem precisam de uma ferramenta online para fazer cálculos.

Vocabulário
Perímetro:valor encontrado quando se soma os quatro lados da figura;
Área: A área de uma figura é a medida equivalente a sua superfície;
Circunferência: Circunferência é uma figura geométrica com formato circular;
pi: Na matemática, o número pi  é uma proporção numérica definida pela relação entre o perímetro de uma circunferência e seu diâmetro (3.14159265359);
r: raio da circunferência (medida do centro à extremidade);
C: comprimento da circunferência ou perímetro.

Atividades

AT01 Cálculo de Área - Retângulo
AT02 Cálculo de Perímetro - Retângulo
AT03 Cálculo de Área - Circunferência
AT04 Cálculo de Perímetro - Circunferência

Processos
AT01 Cálculo de Àrea - Retângulo

O cálculo da área do retângulo é obtido por meio da multiplicação da base pela altura. A partir de exemplos é possível observar melhor a aplicação da fórmula.
 
Exemplo 1: Dado o retângulo a seguir, medindo 40 cm de base e 4 cm de altura. Calcule a área do retângulo. Para realizar o cálculo, basta aplicar a fórmula apresentada acima:
 
A = b . h A = 40 . 4 --> A = 160 cm²
 
Logo, o retângulo tem uma área igual 160 cm².
 
Exemplo 2: Dado o retângulo a seguir, medindo 10 cm de base e 2 cm de altura. Calcule a área do retângulo. Para realizar o cálculo, basta aplicar a fórmula mostrada acima:
 
A = b . h --> A = 10 . 2 --> A = 20 cm²
 
 
Conclui-se, portanto, que a área do retângulo é igual a 20 cm².

AT02 Cálculo de Perímetro - Retângulo

O perímetro do retângulo é obtido somando todas as medidas dos quatro lados das da figura geométrica. Logo, tem-se a seguinte a fórmula:
 
P = b + b+ h + h
 
Considerando que o retângulo possui lados congruentes, ou seja, com medidas equivalentes, a fórmula acima pode ser simplificada:
 
P = 2 (b + h)
 
Exemplo 1 - Calcule o perímetro do retângulo cujas medidas equivalem a: 
 
base (b): 7 cm
altura (h): 3 cm
 
Resolução: Neste caso, basta aplicar na fórmula vista acima os valores pertencentes a altura e a base.
 
P = 2 (b + h)
P = 2 (7+3)
P = 2 . (10)
P = 20 cm
 
O mesmo resultado também poderia ser obtido somando todos os valores indicados no problema em questão. 
 
P= 7 + 7 + 3 + 3 =20 cm

AT03 Cálculo da Área - Circunferência

A área de um círculo é dada pelo produto de π e do quadrado do raio. Seja A a área do círculo, temos a seguinte fórmula:
A = π·r²
Se o comprimento da circunferência for dado em cm, a área do círculo será dada em cm²; se o comprimento da circunferência for dado em m, a área do círculo será dada em m² e assim sucessivamente.

AT04 Cálculo de Perímetro - Circunferência
Para determinarmos o comprimento da circunferência ou seu perímetro, utilizamos uma expressão única, sempre dependendo do tamanho do raio, observe:

C = 2 * π * r, onde:

C = comprimento da circunferência ou perímetro.
π = 3,14 (aproximadamente)
r = raio da circunferência (medida do centro à extremidade)


Exemplo 1

Determine quantos metros, aproximadamente, uma pessoa percorrerá se der 8 voltas completas em torno de um canteiro circular de 2 m de raio.

Resolução:
Calcular quantos metros essa pessoa percorre em uma volta e depois multiplicar por 8.

C = 2 * π * r
C = 2 * 3,14 * 2
C = 12,56

Comprimento do percurso
C = 12,56 * 8
C = 100,48 metros

Regras de Negócio 
	
	Fórmula do cálculo da área do retângulo:  BASE.ALTURA
Fórmula do cálculo do perímetro do retângulo: 2.(BASE+ALTURA)
Fórmula do cálculo da área de uma circunferência: PI.R^2
Fórmula do cálculo do perímetro de uma circunferência: 2.PI.R

Stakeholders
Desenvolvedores
	Danilo Souza - Back End
	Raquel Barbosa - UI Design e Front End

Usuários - Proto Persona

Nome: Lucas
Idade: 14
Hobbies: jogar video game, assistir séries, ler HQ de super heróis
Descrição: Lucas é um estudante do Ensino Médio em escola pública. Está começando a se preparar para o vestibular, mas tem muita dificuldade em matemática, principalmente geometria, e disciplinas de exatas em geral. Por isso ele busca uma ferramenta online para auxiliar nos seus estudos.

Dores: 
Longo prazo:
Não passar no vestibular ou Enem por causa da dificuldade em matemática e física;
Curto Prazo:
Tirar notas ruins em atividades e trabalhos de matemática;
Não conseguir resolver exercícios de geometria.

Ganhos
Longo Prazo:
Tirar uma nota boa em matemática no Enem
Curto Prazo:
Tirar notas boas;
Entender como são feitos os cálculos;

Documentação de Requisitos	 

8.1 Funcionais

RF01 - Calcular área retângulo;
RF02 - Calcular perímetro retângulo;
RF03 - Calcular área circunferência;
RF04 - Calcular perímetro circunferência;
RF05 - O formulário só pode ser enviado quando todos os itens necessários para o cálculo da função estiverem devidamente preenchidos;
RF06 - Botão de limpar dados do formulário;

8.2 Não Funcionais

RNF01 - O projeto de interface deve ser feito antes do código seguindo recomendações de usabilidade e heurísticas de Jacob Nielsen;
RNF02 - O site deve ser responsivo;
RNF03 - O site não deverá exigir autenticação de usuário;
RNF04 - O site deve possuir 3 páginas (Home, Calculadora e Sobre).


8.3 Requisitos de Projeto

RP01 - Duração de uma semana;
RP02 - Utilização da metodologia Sprint;
RP03 - Hospedagem no GitHub;
RP04 - Utilização da linguagem JavaScript para as funções;
RP05 - Utilização de HTML5 e CSS para esqueleto e estilização das páginas.


Tarefas

Documentação Negócio e Requisitos (Raquel e Danilo)
Protótipo da interface do site (Raquel)
Front End: Página Inicial
Front End: Página da Calculadora;
Front End: Página Sobre
Front End: Responsividade
Back End: Função areaRetangulo()
Back End: Função areaCircunferencia()
BackEnd: Função perimetroCirfunferencia()
Back End: Função perimetroRetangulo()
Back End: Função validaFormulario()
Back End: Função limparFormulario()

ou Função calcularRetangulo() e função calcularCircunferência

À Fazer
Em progresso
Finalizadas


