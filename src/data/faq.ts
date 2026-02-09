export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: "matricula",
    question: "QUANDO POSSO ME MATRICULAR?",
    answer:
      "As matrículas ficam abertas durante todo o ano. Basta acessar o site da FIAP e verificar as turmas disponíveis para o curso desejado.",
  },
  {
    id: "mais-cursos",
    question: "POSSO FAZER DOIS OU MAIS CURSOS AO MESMO TEMPO?",
    answer:
      "Sim! Você pode se matricular em quantos cursos desejar e cursá-los simultaneamente, desde que consiga conciliar os horários.",
  },
  {
    id: "pre-requisitos",
    question: "QUAIS OS PRÉ-REQUISITOS?",
    answer:
      "Os pré-requisitos variam de acordo com o curso escolhido. De modo geral, não é necessário ter formação prévia na área de tecnologia, mas é importante que o aluno tenha interesse e disposição para aprender sobre inovação e mercado digital.",
  },
  {
    id: "duracao",
    question: "QUAL A DURAÇÃO DOS CURSOS?",
    answer:
      "A duração varia conforme o curso. Os cursos de curta duração possuem entre 60 e 120 horas, com duração média de 2 a 4 meses.",
  },
  {
    id: "material",
    question: "PRECISO LEVAR ALGUM MATERIAL PARA AS AULAS?",
    answer:
      "Recomendamos que os alunos tragam um notebook para acompanhar as aulas práticas. Todo o material didático é disponibilizado digitalmente.",
  },
  {
    id: "certificado",
    question: "VOU RECEBER CERTIFICADO DE CONCLUSÃO DE CURSO?",
    answer:
      "Sim! Ao concluir o curso com aprovação, você receberá um certificado digital de conclusão emitido pela FIAP.",
  },
];
