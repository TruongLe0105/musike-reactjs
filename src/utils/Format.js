export const formatTime = (time) => {
  let second = time % 60;
  let minute = Math.floor(time / 60);
  if (second < 10) second = "0" + second;
  if (minute < 10) minute = "0" + minute;
  const timeSong = minute + ":" + second;
  return timeSong;
};

export const sliceText = (text, index, hover, num) => {
  if (text.length > num && index === hover) {
    const newText = text.slice(0, num) + "...";
    return newText;
  } else {
    const newText = text.length > 20 ? text.slice(0, 20) + "..." : text;
    return newText;
  }
}

export const sliceTextRankWeek = (text) => {
  if (text.length > 8) {
    const newText = text.slice(0, 8) + "...";
    return newText;
  } else {
    return text;
  }
};