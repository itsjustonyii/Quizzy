import angola from './assets/angola.png'
import whatsapp from './assets/whatsapp.jpg'

export const trivia = {

  Questions: [
    {
      Question: whatsapp,
      Choices: [
        "Instagram",
        "Whatsapp",
        "Linkedin",
        "Tiktok",
      ],
      correctAnswer: "Whatsapp", 
    },
    {
      Question: angola,
      Choices: [
        "Rwanda",
        "Niger",
        "Angola",
        "India",
      ],
      correctAnswer: "Angola", 
    },

    {
      Question: angola,
      Choices: [
        "Rwanda",
        "Niger",
        "Angola",
        "India",
      ],
      correctAnswer: "Angola", 
    },
    {
      Question: whatsapp,
      Choices: [
        "Instagram",
        "Whatsapp",
        "Linkedin",
        "Tiktok",
      ],
      correctAnswer: "Whatsapp", 
    },
    {
      Question: whatsapp,
      Choices: [
        "Instagram",
        "Whatsapp",
        "Linkedin",
        "Tiktok",
      ],
      correctAnswer: "Whatsapp", 
    },
   
  ]
}

export const resultInitialState = {
  score: 0,
  correctAnswers: 0,
  BadComment: "Common sense is truly not common",
  AverageComment: "You're neither here nor there",
  GoodComment: "Impressive! You're the real deal",
  BestComment: "Super impressive! Take your crown!"
};