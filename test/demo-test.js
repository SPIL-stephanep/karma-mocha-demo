describe('demo', function(){
    it('should be able to add to numbers', function() {
        var a = 1,
            b = 2,
            c = a + b;

        //expect(c).to.equal(3);
        expect(c).to.eql(3);
    });
})