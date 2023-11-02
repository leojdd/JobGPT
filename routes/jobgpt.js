import express from 'express';
import JobGptController from '../controllers/jobGptController.js'

var router = express.Router();

router.post('/generate_questions', (req, res) => {
    const area = req.body.area
    const language = req.body.language

    let jobGpt = new JobGptController(area, language)

    let questions = jobGpt.generateQuestions()

    questions.then((result) => {
        console.log(result)

        return res.status(200).send(result)
    })
});

router.post('/send_answers', (req, res) => {
    const area = req.body.area
    const language = req.body.language
    const questions = req.body.questions
    const answers = req.body.answers

    let jobGpt = new JobGptController(area, language)

    let analysis = jobGpt.sendAnswers(questions, answers)

    analysis.then((result) => {
        console.log(result)

        return res.status(200).send(result)
    })
});

export default router;