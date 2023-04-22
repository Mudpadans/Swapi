let residentButton = document.querySelector('button');
let residentList = document.querySelector('body')

const buttonClicker = (event) => {
    event.preventDefault();
    getResidents();
    console.log('button has been clicked');
}

residentButton.addEventListener('click', buttonClicker)

let residents = [];

const getResidents = () => {
    axios.get('https://swapi.dev/api/planets/2/')
        .then(response => {
            for (i = 0; i < response.data['residents'].length; i++) {
                axios.get(response.data['residents'][i])
                    .then(res => {
                        residents.push(res.data.name)
                        let h2Residents = document.createElement('h2')
                        h2Residents.textContent = res.data.name
                        residentList.append(h2Residents)
                    })
            }

        })
        .catch(error => {
            console.log(error)
        })
}

