QUnit.test( "Operations", function( assert ) {
    var op = new Operations();

    assert.equal( typeof op, "object", "Operations is an object" );
    assert.equal( op.subtract(5, 2), 3, "Minus operation working" );
    assert.equal( op.sum(5, 2), 7, "Sum operation working" );
    assert.equal( op.multiply(5, 2), 10, "Multiplication operation working" );
    assert.equal( op.divide(14, 2), 7, "Division operation working" );
});
