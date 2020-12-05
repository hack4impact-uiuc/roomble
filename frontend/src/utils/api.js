export async function putQuizAnswers(quizAnswers) {
    return await fetch('http://localhost:5000/submitQuiz', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "answers": quizAnswers
        })
    });
}
