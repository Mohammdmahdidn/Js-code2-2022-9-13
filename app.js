function testpass(specialcharacter) {
  let password = "123Jafar Adel123 Hamed";
  let pass = /[A-Z]/g;
  let z = password.match(pass);
  let z_len = z.length;
  let pass1 = /\b123/g;
  let v = password.match(pass1);
  let v_len = v.length;
  let a = password.match(specialcharacter);
  let a_len = a.length;
  if (z_len >= 3 && v_len >= 1 && a_len >= 1) console.log("stronge password");
}

testpass(/\bhamed/i);
