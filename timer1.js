let input = process.argv
    .slice(2)
    .filter(time => !isNaN(time))
    .filter(time => time >= 0);
let beepIntervals = [];
for( item of input){
 beepIntervals.push(item * 1000)
}
for (intervals of beepIntervals){
  
    setTimeout(() => {
  
        process.stdout.write('Beep!!')
   
  
    }, intervals);
}

