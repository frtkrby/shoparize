const chai = require('chai');
var expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

var app = "http://localhost:3001/api/v1";

describe('/GET products', () => {
    it('it should GET product list', (done) => {
        console.log("apppp", app, '/products');
        chai.request(app)
            .get('/products')
            .end((err, res) => {
                expect(res.status).to.equal(200)
                expect(res).to.be.json
                expect(res.body).to.be.a('object')
                done();
            });
    });
});