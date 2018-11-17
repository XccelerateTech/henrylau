describe('test it out a bit', ()=>{
    it('I am the it block one', ()=>{
        expect('I am the it block one').toEqual('I am the it block one')
    })

    it('I am the it block two', ()=>{
        expect('I am the it block two').toEqual('I am the it block two')
    })
    it('I am the it block three', ()=>{
        expect('I am the it block three').toEqual('I am the it block three')
    })

    it('fail', ()=>{
        let fail = ()=>{
            throw new TypeError('I am the it block four but I fail ')
        }
        expect(fail).toThrowError(TypeError,'I am the it block four but I fail ')
    })
})