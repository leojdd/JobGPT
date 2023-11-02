import ChatGptController from './chatGptController.js'

class JobGptController {
    constructor(area, language)
    {
        // Create properties to use in functions
        this.area = area
        this.language = language
        this.answerAnalysis = `Analyze my answers and my writing level in ${this.language}`
        this.systemMessage = `generate 10 questions in ${this.language} simulating a job interview about ${this.area}, put "<br/>" between each questions, and don't give me the answers`
        //TO-DO improve system message
        //Example: generate 10 questions in english simulating a job interview, i need one question to be related to strengths and weaknesses, one to be about teamwork, three to be about personal development and the other 5 to be about software development
    }

    generateQuestions () {
        // Example to test
        // return new Promise((resolve, reject) => {
        //         resolve({
        //             result: `1. Can you explain your experience with software development? <br/>
        // 2. What programming languages are you proficient in? <br/>
        // 3. Describe a challenging project you have worked on and how you overcame obstacles during its development. <br/>
        // 4. How familiar are you with different software development methodologies such as Agile or Waterfall? <br/>
        // 5. Have you ever worked with a team of developers? If so, describe your role and how you collaborated with others. <br/>
        // 6. Can you provide an example of a software development project where you had to troubleshoot and debug code? <br/>
        // 7. Have you ever worked on a project that required integrating multiple systems or APIs? If so, explain your experience. <br/>
        // 8. Are you familiar with unit testing and test-driven development? How do you ensure the quality of your code? <br/>
        // 10. Can you explain your approach to problem-solving and how you prioritize tasks during software development projects?`
        //         })
        //     })

        let chatGpt = new ChatGptController()

        let messages = [
            {
                role: 'system',
                content: this.systemMessage
            }
        ]

        return chatGpt.run(messages)
    }

    sendAnswers (questions, answers) {
        // Build text of answers and the phrase to analysis

        let answersContent = ""

        for (let i in answers) {
            let answerNumber = parseInt(i) + 1

            answersContent += `${answerNumber}. ${answers[i]}\n`
        }

        answersContent += this.answerAnalysis

        let messages = [
            {
                role: 'system',
                content: this.systemMessage
            },
            {
                role: 'assistant',
                content: questions
            },
            {
                role: 'user',
                content: answersContent
            }
        ]

        let chatGpt = new ChatGptController()

        return chatGpt.run(messages)
    }
}

export default JobGptController