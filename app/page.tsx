"use client";

import { useState } from 'react';
import { questions } from "../app/QuisQuestions/index";
import { BackgroundGame, ContentContainer } from './style';

// Função auxiliar para verificar se a resposta está correta
const checkAnswer = (questionId: number, selectedOption: string): boolean => {
  const question = questions.find(q => q.id === questionId);
  return question ? question.correctAnswer === selectedOption : false;
};

export default function Home() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  const [helpUsed, setHelpUsed] = useState({
    skip: 2,
    eliminate: 1,
    audience: 1,
  });

  const [options, setOptions] = useState(questions[currentQuestionIndex].options);

  const currentQuestion = questions[currentQuestionIndex];

  const controlCheckBox = (optionValue: string) => {
    setSelectedOption(optionValue);
  };

  const handleSubmit = () => {
    if (selectedOption) {
      const correct = checkAnswer(currentQuestion.id, selectedOption);
      setIsAnswerCorrect(correct);
      if (correct) {
        setCorrectAnswersCount(prevCount => prevCount + 1);
      }
      //next question
      const nextIndex = currentQuestionIndex + 1;
      if (nextIndex < questions.length) {
        setCurrentQuestionIndex(nextIndex);
        setSelectedOption(null);
        setIsAnswerCorrect(null);
        setOptions(questions[nextIndex].options);
      } else {
        // Mostra o número total de respostas corretas quando o quiz terminar
        alert(`Quiz terminado! Você acertou ${correctAnswersCount} de ${questions.length} perguntas.`);
      }
    }
  };

  const handleSkip = () => {
    if (helpUsed.skip > 0) {
      setHelpUsed(prev => ({ ...prev, skip: prev.skip - 1 }));
      const nextIndex = currentQuestionIndex + 1;
      if (nextIndex < questions.length) {
        setCurrentQuestionIndex(nextIndex);
        setSelectedOption(null);
        setIsAnswerCorrect(null);
        setOptions(questions[nextIndex].options);
      } else {
        alert(`Quiz terminado! Você acertou ${correctAnswersCount} de ${questions.length} perguntas.`);
      }
    } else {
      alert('Você não tem mais ajudas de pular.');
    }
  };

  const handleEliminate = () => {
    if (helpUsed.eliminate > 0) {
      setHelpUsed(prev => ({ ...prev, eliminate: prev.eliminate - 1 }));
      const correctOptionIndex = options.findIndex(option => option.value === currentQuestion.correctAnswer);
      const newOptions = options.filter((_, index) => index === correctOptionIndex || Math.random() < 0.5);
      setOptions(newOptions);
    } else {
      alert('Você não tem mais ajudas de eliminar.');
    }
  };

  const handleAudience = () => {
    if (helpUsed.audience > 0) {
      setHelpUsed(prev => ({ ...prev, audience: prev.audience - 1 }));
      alert('O público acha que a resposta correta é a opção C.');
    } else {
      alert('Você não tem mais ajudas de pergunta ao público.');
    }
  };

  return (
    <BackgroundGame>
      <ContentContainer>
        <div className='title-and-sub'>
          <h1>Game-Dev do Milhão</h1>
          <h3>Aqui você tem a chance de testar seus conhecimentos na área de desenvolvimento!</h3>
        </div>
        
        <div className='questionsContent'>
          <h3>Questão {currentQuestionIndex + 1}.</h3>
        
          <div className='input-questions'>
            <h4>{currentQuestion.question}</h4>

            <div className='questions'>
              {options.map(option => (
                <div className='span-color' key={option.value}>
                  <input 
                    type="checkbox" 
                    checked={selectedOption === option.value}
                    onChange={() => controlCheckBox(option.value)}
                    value={option.label}
                  />
                  <span id={option.value}>{option.label}</span>
                </div>
              ))}
              <br />
              {isAnswerCorrect !== null && (
                <p>{isAnswerCorrect ? "Resposta correta!" : "Resposta errada!"}</p>
              )}
              <br />
            </div>
                <div className='help-buttons'>
                  <button onClick={handleSkip} disabled={helpUsed.skip <= 0}>Pular Pergunta ({helpUsed.skip})</button>
                  <button onClick={handleEliminate} disabled={helpUsed.eliminate <= 0}>Eliminar Opções ({helpUsed.eliminate})</button>
                  <button onClick={handleAudience} disabled={helpUsed.audience <= 0}>Perguntar ao Público ({helpUsed.audience})</button>
                </div> <br />
              <button className="btn-submmit" onClick={handleSubmit}>Enviar</button>
          </div>
        </div>
      </ContentContainer>
    </BackgroundGame>
  );
}
