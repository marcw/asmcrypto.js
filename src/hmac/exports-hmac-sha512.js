/**
 * HMAC-SHA512 exports
 */

function hmac_sha512_bytes ( data, password ) {
    if ( data === undefined ) throw new SyntaxError("data required");
    if ( password === undefined ) throw new SyntaxError("password required");
    return get_hmac_sha512_instance().reset( { password: password } ).process(data).finish().result;
}

function hmac_sha512_hex ( data, password ) {
    var result = hmac_sha512_bytes( data, password );
    return bytes_to_hex(result);
}

function hmac_sha512_base64 ( data, password ) {
    var result = hmac_sha512_bytes( data, password );
    return bytes_to_base64(result);
}

exports.HMAC_SHA512 = {
    bytes: hmac_sha512_bytes,
    hex: hmac_sha512_hex,
    base64: hmac_sha512_base64
};
