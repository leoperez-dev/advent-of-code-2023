import { readFile } from 'fs';

const regex = /(?<first>[0-9]).*(?<last>[0-9](?![0-9]))|(?<unique>[0-9])/;

readFile('1.txt', 'utf-8', (_, file) => {
    const lines = file.split('\r\n');
    const total = lines.reduce((prev, curr) => {
        const res = regex.exec(curr);
        const count = res.groups.unique ? parseInt(res.groups.unique+res.groups.unique) : parseInt(res.groups.first+res.groups.last);
        return prev + count;
    }, 0);
    console.log(total);
});
