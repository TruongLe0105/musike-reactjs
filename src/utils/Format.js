export const formatTime = (time) => {
    let second = time % 60;
    let minute = Math.floor(time / 60);
    if (second < 10) second = "0" + second;
    if (minute < 10) minute = "0" + minute;
    const timeSong = minute + ":" + second;
    return timeSong;
};

export const sliceText = (text, index, hover) => {
    if (text.length > 15 && index === hover) {
        const newText = text.slice(0, 15) + "...";
        return newText;
    } else {
        return text;
    }
}