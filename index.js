const _sodium = require('libsodium-wrappers');
const dummy = require("./dummy")



 var respuesta = dummy.read(2,"edad");
 var respuesta_2 = dummy.read(2,"color");


(async() => {
  await _sodium.ready;
  const sodium = _sodium;

  let key = sodium.crypto_secretstream_xchacha20poly1305_keygen();

  let res = sodium.crypto_secretstream_xchacha20poly1305_init_push(key);
  let [state_out, header] = [res.state, res.header];
  let c1 = sodium.crypto_secretstream_xchacha20poly1305_push(state_out,
    sodium.from_string(respuesta), null,
    sodium.crypto_secretstream_xchacha20poly1305_TAG_MESSAGE);
  let c2 = sodium.crypto_secretstream_xchacha20poly1305_push(state_out,
    sodium.from_string(respuesta_2), null,
    sodium.crypto_secretstream_xchacha20poly1305_TAG_FINAL);

  let state_in = sodium.crypto_secretstream_xchacha20poly1305_init_pull(header, key);
  let r1 = sodium.crypto_secretstream_xchacha20poly1305_pull(state_in, c1);
  let [m1, tag1] = [sodium.to_string(r1.message), r1.tag];
  let r2 = sodium.crypto_secretstream_xchacha20poly1305_pull(state_in, c2);
  let [m2, tag2] = [sodium.to_string(r2.message), r2.tag];

  console.log(m1);//incrip
  console.log(m2);//incrip
  console.log(c1);//des
  console.log(c2);//des
})();





function desplegar() {
    var boton1 = document.getElementById("opcion1");
    boton1.classList.r
    
}