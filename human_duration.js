function formatDuration (seconds) {
  var y = 0;
  var d = 0;
  var h = 0;
  var m = 0;
  var s = 0;

  if(seconds >= 31536000){
  y = parseInt( seconds / (86400*365) );
  }
  d = parseInt( (seconds - (y*31536000))/ 86400 );
  h = parseInt( (seconds - (y*31536000) - (d*86400)) / 3600);
  m = parseInt( (seconds - (y*31536000) - (d*86400) - (h*3600))/ 60 );
  s = (seconds - (y*31536000) - (d*86400) - (h*3600) - (m*60) );

  var arr = [];
  if(y === 1){arr.push(y + " year");}
  if(y > 1){arr.push(y + " years");}
  if(d === 1){arr.push(d + " day");}
  if(d > 1){arr.push(d + " days");}
  if(h === 1){arr.push(h + " hour");}
  if(h > 1){arr.push(h + " hours");}
  if(m === 1){arr.push(m + " minute");}
  if(m > 1){arr.push(m + " minutes");}
  if(s === 1){arr.push(s + " second");}
  if(s > 1){arr.push(s + " seconds");}

  if (arr.length === 5){
    return arr[0] + ", " + arr[1] + ", " + arr[2] + ", " + arr[3] + " and " + arr[4];
  }
  if (arr.length === 4){
    return arr[0] + ", " + arr[1] + ", " + arr[2] + " and " + arr[3];
  }
  if (arr.length === 3){
    return arr[0] + ", " + arr[1] + " and " + arr[2];
  }
  if (arr.length === 2){
    return arr[0] + " and " + arr[1];
  }
  if (arr.length === 1){
    return arr[0];
  }
  if (arr.length === 0){
    return "now";
  }
}