//Task #1
export function totalBirdCount(birdsPerDay) {
  let total = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    total += birdsPerDay[i];
  }
  return total;
}

// Task #2
export function birdsInWeek(birdsPerDay, week) {
  let count = 0;
  for (let i = (week - 1) * 7; i < week * 7; i++) {
    count += birdsPerDay[i]; 
  }
  return count; 
}

//Task #3
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i+= 2) {
    birdsPerDay[i] += 1;
  }
  return birdsPerDay;
}
