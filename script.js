const message = [
    'you will do great!',
    'you should take some rest.',
    'you will find love.',
    'you will be lucky!',
    'you should have a healthy breakfast.'
];

const avoid = [
    'driving a car',
    'staying alone',
    'purple outfits',
    "stranger's call",
    'caffeine'
];

const motivation = [
    'good things will come',
    'mistakes are proof that you are trying',
    'the way to get started is to quit talking and begin doing',
    "you didn't come this far to only come this far",
    "you can't go back and change the beginning, but you can start where you are and change the ending",
    'the secret of your future is hidden in your daily routine',
    'when the why is clear, the how is easy',
    'good things take time'
];

const randomNum = (array) => {
    return Math.floor(Math.random() * array.length);
};

const randomMessage = () => {
    return `Hi! Today ${message[randomNum(message)]}
    You should avoid ${avoid[randomNum(avoid)]}.
    Remember that ${motivation[randomNum(motivation)]}.`;
};

console.log(randomMessage());