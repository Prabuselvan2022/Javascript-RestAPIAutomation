import supertest from 'supertest';
const request =  supertest("https://gorest.co.in/public-api/");

import {expect} from 'chai';

const TOKEN='f3138f305f6e84619669cc5a429ccd3702207b0e66a1c35be28a984dc44fd0ca';

describe('User- First Test', () => {
    it('GET/Users', () => {
        request.get(`users?access-token=${TOKEN}`).end((err, res)=> {
            console.log('error is ',err);
            console.log('response is ', res.body);

            expect(res.body.data).to.not.be.empty;
        })

    });
});
