const button = document.querySelector('#button')



const complement = () => {
    alert('You are awesome')
    axios.post('/test', {test: 'test'})
    .then((res) =>{
        console.log('You got it')
    })
    .catch((err) => {
        console.log('you are wrong')
    })
}


button.addEventListener('click', complement)