const getConselho = async () => {
    let response = await fetch('https://api.adviceslip.com/advice')
    let data = await response.json()
    return data
}

const advice = document.querySelector('#conselho')
getConselho()
    .then(data => {advice.innerText = data.slip.advice})
    .catch(() => {advice.innerText = 'ERROR'})
