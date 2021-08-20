import TimeAnalyzer from '../index';

// const text = 'Call me 2021-09-10T10:30';
const text = 'Do it when 2021-09-10 10:30~11:30';

var parser = new TimeAnalyzer(text);

console.log(`Parser text "${text}" to date: `, JSON.stringify(parser.value, null, 4));