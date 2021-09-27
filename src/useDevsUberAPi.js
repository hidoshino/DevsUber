export default () => ({

    signin: (email, password) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {

                let json = {
                    error: '',
                    token: '12345'
                };

                resolve(json);

            }, 1000);
        });
    },
    signup: (name, email, password) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {

                let json = {
                    error: '',
                };

                if (email == 'erro@hotmail.com') {
                    json.error = 'e-mail e/ou senha errados';
                } else {
                    json.token = '12345',
                        json.name = name
                };

                resolve(json);

            }, 1000);
        });
    },
    getRequestPrice: (distance) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {

                let json = {
                    error: '',
                };

                json.price = distance * 5;

                resolve(json);

            }, 1000);
        });
    },
    findDriver: (endpoint) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {

                let json = {
                    error: ''
                }

                if (!endpoint.to.latitude) {
                    json.error = "Não foi possível encontrar nenhum motorista";
                }

                json.race = {
                    name: 'Diego Fernandes',
                    avatar: 'https://thispersondoesnotexist.com/image',
                    stars: 4.5,
                    races: 2438,

                    board: 'PUX 6660',
                    color: 'Cinza',
                    brand: 'Fiat',
                    model: 'Uno Vivace 1.0'

                }

                resolve(json);

            }, 1500);
        })
    }

});