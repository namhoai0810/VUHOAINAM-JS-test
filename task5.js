function countChar(val) {
    var len = val.value.length;
    if (len >= 200) {
        $('#charNum').text("You have typed more than the allowed characters!");
    } else {
      $('#charNum').text(len);
    }
}