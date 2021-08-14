const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const beep = () => process.stdout.write('Beep!');

stdin.on('data', key => {
  if(key === 'b'){
    beep();
  }
  if(key >= 1 || key <= 9){
    process.stdout.write(`setting timer for ${key} seconds`);
    setTimeout(() => {
      beep();
    }, key * 1000);
  }
  if(key === '\u0003'){
    process.stdout.write('Thanks for using me, Ciao!\n');
    process.exit();
  }
});