
function f_cap(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }
  
  function capitilize(sentence) {
    var a = [];
    sentence = sentence.split(' ');
    for (let i = 0; i < sentence.length; i++) {
      a[i] = f_cap(sentence[i]);
    }
    return a.join(" ");
  }
  let input = capitilize(prompt("enter"))
 let result = input;
 alert(result)