function highlight() {
    //Write your code here
  var boldWords = document.querySelectorAll('b');
  for (var i = 0; i < boldWords.length; i++) {
    boldWords[i].style.color = 'green';
  }

}


function return_normal() {
    //Write your code here
  var boldWords = document.querySelectorAll('b');
  for (var i = 0; i < boldWords.length; i++) {
    boldWords[i].style.color = 'black';
  }
    
}
