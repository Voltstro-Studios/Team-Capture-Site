const fs = require('fs');

const dir = `${__dirname}/posts/`;
const outPutLocation = `${__dirname}/../public/posts.json`;

function getValue(line, value) {
    if(!line.includes(value)) {
        throw new Error(`Does not contain ${value}!`);
    }

    return line.replace(value, '');
}

class post {
    constructor(dateYear, dateMonth, dateDay, author, title, preview, markdown) {
        this.id = title.replace(/[^\w\s]/gi, '').replace(/ /g, "-").toLowerCase();
        this.dateYear = dateYear;
        this.dateMonth = dateMonth;
        this.dateDay = dateDay;
        this.author = author;
        this.title = title;
        this.preview = preview;
        this.markdown = markdown;
    }
}

const postComparison = (a, b) => {

    //Sort by date
    if(a.dateYear > b.dateYear) {
        if(a.dateMonth > b.dateMonth) {
            if(a.dateDay > b.dateDay) {
                //TODO: We should also compare by name if its the same date
                return 1;
            }
        }
    }

    return -1;
}

try {
    const files = fs.readdirSync(dir);
    const posts = new Array(files.length);

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const data = fs.readFileSync(dir + file, 'utf8');
        const lines = data.split(/\r?\n/);

        //Check that the file is big enough
        if(lines.length < 7)
            throw new Error(`${file} lacks enough metadata!`);

        //Get metadata
        const dateYear = parseInt(getValue(lines[0], 'date_year: '));
        const dateMonth = parseInt(getValue(lines[1], 'date_month: '));
        const dateDay  = parseInt(getValue(lines[2], 'date_day: '));
        const author  = getValue(lines[3], 'author: ');
        const title  = getValue(lines[4], 'title: ');

        const preview  = getValue(lines[5], 'preview: ');

        //Read the rest of the body
        let body = "";
        for (let i = 6; i < lines.length; i++) {
            body += `${lines[i]}`;
            if(i + 1 !== lines.length)
                body += "\n";
        }

        posts[i] = new post(dateYear, dateMonth, dateDay, author, title, preview, body);
    }

    //Sort posts, newest post first, oldest one last
    posts.sort(postComparison);

    //Convert posts to json and write it out
    const jsonData = JSON.stringify(posts);
    fs.writeFileSync(outPutLocation, jsonData, 'utf8');
    console.log('News post.json built!')

} catch (err) {
    console.log(err);
}