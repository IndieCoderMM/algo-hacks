export const compareTimes = (time1, time2) => {
  const minutes1 = getMinutes(time1);
  const minutes2 = getMinutes(time2);
  if (minutes1 > minutes2) return 1;
  else if (minutes1 < minutes2) return -1;

  return 0;
};

export const getMinutes = (time) => {
  const [h, m] = time.split(':');

  return parseInt(h, 10) * 60 + parseInt(m, 10);
};

export const mergeTimeblocks = (block1, block2) => {
  // 1st => they're the same block
  if (
    compareTimes(block1[0], block2[0]) === 0 &&
    compareTimes(block1[1], block2[1]) === 0
  )
    return block1;

  // 2nd => the end of first block and the start of next are equal
  if (compareTimes(block1[1], block2[0]) === 0) {
    return [block1[0], block2[1]];
  }

  // 3rd => the first block longer than second
  if (compareTimes(block1[1], block2[0]) === 1) {
    if (compareTimes(block1[1], block2[1]) === 1) {
      return block1;
    } else {
      return [block1[0], block2[1]];
    }
  }
};

export const mergeCalendars = (calendar1, calendar2) => {
  let i = 0;
  let j = 0;
  const merged = [];

  while (i < calendar1.length && j < calendar2.length) {
    const compareResult = compareTimes(calendar1[i][0], calendar2[j][0]);
    if (compareResult === 1) {
      merged.push(calendar2[j]);
      j += 1;
    } else {
      merged.push(calendar1[i]);
      i += 1;
    }
  }

  while (i < calendar1.length) {
    merged.push(calendar1[i]);
    i += 1;
  }

  while (j < calendar2.length) {
    merged.push(calendar2[j]);
    j += 1;
  }

  return merged;
};
