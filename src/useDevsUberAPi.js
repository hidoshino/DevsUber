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

                if(email == 'erro@hotmail.com'){
                    json.error = 'e-mail e/ou senha errados';
                }else{
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

});