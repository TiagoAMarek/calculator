QUnit.test( "Operations", function( assert ) {
    var op = new Operations();

    assert.equal( typeof op, "object", "Operations is an object" );
    assert.equal( op.minus(5, 2), 3, "Minus operation working" );
    assert.equal( op.sum(5, 2), 7, "Sum operation working" );
    assert.equal( op.multiplication(5, 2), 10, "Multiplication operation working" );
    assert.equal( op.division(5, 2), 2.5, "Division operation working" );
});
