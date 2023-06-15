const key = 'gGt/iysuaCCUcr9PBsJOeA==xmHHf2zzSTwngt7R'
const trivia_endpoint = "https://api.api-ninjas.com/v1/trivia"

async function getTrivia(amount = 1) {
    const response = await fetch(
        trivia_endpoint + '?limit=' + amount,
        {method: 'GET',
        headers: { 'X-Api-Key': key},
        });
    const json_response = await response.json();
    //strip array
    return json_response[0];
}

async function showTrivia() {
    const triviaResponse = await getTrivia(1);
    const questionTag = document.getElementById("question");
    const answerTag = document.getElementById("answer");
    questionTag.innerText = triviaResponse.question;
    answerTag.innerText = triviaResponse.answer;
}