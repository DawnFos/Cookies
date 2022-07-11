import Cookie from './Cookie';

const messages = [
    'Walking on Water makes you Wet',
    'The sun is Blue',
    'Mars will rise through your coffee',
    'yeeeeeet',
    'makeshift goggles are the future',
    'running through pudding makes tulips',
    'mushrooms frow elephants',
    'Afrikka is my favorite country',
    'laugh the fat away',
    'live once, borrow the 10 spot',
    'make the tortila hat',
    'Sundays are exploding',
    'find love under a rock',
    'listen to the cement',
    'wink at the yard arks',
    'tangle the hose for your lover',
    'ovens be hot',
    'Wash the water',
    'merge your laundry',
    'wack',
    'Wah Wah Wee Wah'
];

const CookiesList = () => {
    return (
        <div className='cookies-container'>
            {messages.map((message, index) => (
                <Cookie key={index} msg={message} />
            ))}
        </div>
    );
};

export default CookiesList;