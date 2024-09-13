import React, { useEffect, useState } from 'react'
import "./style.css"
import { Button, Progress } from 'antd'

const Quiz = () => {
    let questions = [
        {
            question: "What is the capital of France?",
            options: [
                'Paris',
                'London',
                'Berlin',
                'Rome'
            ],
            correctAnswer: 'Paris',
        },
        {
            question: "Which country has a population greater than 1 billion people?",
            options: [
                'India',
                'China',
                'United States',
                'Brazil'
            ],
            correctAnswer: 'China',
        },
        {
            question: "Who is the CEO of Tesla, Inc.?",
            options: [
                'Jeff Bezos',
                'Mark Zuckerberg',
                'Elon Musk',
                'Bill Gates'

            ],
            correctAnswer: 'Elon Musk',
        },
        {
            question: "What is the highest mountain in the world?",
            options: [
                'Mount Everest',
                'Mount Kilimanjaro',
                'Mount Fuji',
                'Victorias Secret'
            ],
            correctAnswer: 'Mount Everest',
        },
        {
            question: "What is name of Pakistan national animal?",
            options: [
                'Markhor',
                'Lion',
                'Peacock',
                'Hen'
            ],
            correctAnswer: 'Markhor',
        }
     ]
    // 
    const [currentOption, setCurrentOption] = useState(0)
    const [selectedOpt, setSelectedOpt] = useState('')
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(true)

    const handleOptionChange = (event) => {
        setSelectedOpt(event.target.value);
    };
    function nextQuestion() {
        if(selectedOpt === questions[currentOption].correctAnswer){
            setScore(score + 20)
        }
        setSelectedOpt('')

        if(currentOption + 1 < questions.length){
            setCurrentOption(currentOption +1)
        }else{
            setShowScore(true)
        } 

    }
    function restartQuiz() {
        setCurrentOption(0)
        setSelectedOpt('')
        setScore(0)
        setShowScore(false)
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", height: '100vh' }}>
           
            <div style={{ width: "600px", marginTop: "100px", height: "500px" }} >
                {
                    showScore  ?
                    <>
                     <div style={{height:"100%",textAlign:"center"}}>
                     {
                        score >= 70 ?
                        <div>
                            <Progress style={{marginTop:"50px"}}  type="circle" percent={score} format={(percent) => `${percent}%`} />
                            <p>Congratulations! You passed the quiz.</p>

                        </div>
                        :
                        <div>
                           <Progress strokeColor="red"  style={{marginTop:"50px"}} type="circle" percent={score} format={(percent) => `${percent}%`} />
                           <p>Sorry, you did not pass the quiz. Please try again.</p>
                       </div>
                     }
                     
                    <div>
                       <Button onClick={restartQuiz} type='primary' style={{padding:"10px",marginTop:"20px",fontSize:"22px"}}>Restart Quiz</Button>
                    </div>
                     </div>
                     
                     </>
                    :
                        <>
                            <div className='question'>
                                <h1 style={{ padding: "10px" }}>{questions[currentOption].question}</h1>
                            </div>
                            <div className='answers'>
                                {
                                    questions[currentOption].options.map((v, i) => {
                                        return <div key={i} style={{ display: "flex", gap: "10px" }}>
                                            <input
                                                value={v}
                                                checked={selectedOpt === v}
                                                name="answers"
                                                id={`option${i}`}
                                                onChange={handleOptionChange}
                                                type="radio" />
                                            <label htmlFor={`option${i}`}>{v}</label>
                                        </div>
                                    })
                                }

                            </div>
                            <div>
                                <button onClick={nextQuestion} className='next-btn' >Next</button>
                            </div>
                        </>
                }

            </div>
           
        </div>

    )
}


export default Quiz


