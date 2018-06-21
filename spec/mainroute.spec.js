var Request = require("request");

describe("Server", ()=>{
        var server;
        beforeAll(()=>{
                server = require("../bin/www");
        });
        afterAll(()=>{
                //server.onClose();
        });
        describe("Get Information", () =>{
                var data={};
                beforeAll((done)=>{
                        Request.get("http://localhost:3000/skeleton/information", (err, res, body)=>{
                                data.status = res.statusCode;
                                data.body = JSON.parse(body);
                                done();
                        });
                });
                it("Status is 200", ()=>{
                        expect(data.status).toBe(200);
                });
                it("Body",()=>{
                        expect(data.body.message).toBe("Information");
                })
        });



});