let tl =  [
    "English", "English", "French", "German", "English", 
    "Hungarian", "Spanish", "French", "German", "Hungarian", 
    "French", "German", "English", "Spanish", "French"
  ];
  let th = {};
  for (let i = 0; i < tl.length; i++) {
    let t = tl[i];
    if (th[t]) {
      th[t]++; 
    } else {
      th[t] = 1; 
    }
  }