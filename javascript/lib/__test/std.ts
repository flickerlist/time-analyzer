import TimeAnalyzer from '../index';

const text = '2021-09-10T10:30';

var parser = new TimeAnalyzer(text);

console.log(`Parser text "${text}" to date: `, parser.value);