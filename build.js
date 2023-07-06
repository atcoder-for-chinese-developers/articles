const fs = require('fs');
const util = require('util');
const yamlFront = require('yaml-front-matter');
const MarkdownIt = require('markdown-it');
const tex = require('markdown-it-texmath');
const MarkdownItAnchor = require('markdown-it-anchor');

const Prism = require('prismjs');
const loadLanguages = require('prismjs/components/');
const { enableLineNumbers } = require('./plugins/prism/line-numbers');
const { JSDOM } = require('jsdom');

let dom = new JSDOM();

enableLineNumbers(Prism, dom.window);

function highlight(str, lang) {
	if (lang) loadLanguages([ lang ]);
	let document = dom.window.document;
	document.body.innerHTML = `<pre class="language-${ lang } line-numbers"><code>${ require('escape-html')(str) }</code></pre>`;
	Prism.highlightAllUnder(document);
	return document.body.innerHTML.trim();
}

let md = MarkdownIt({
	highlight: highlight
});
md.use(tex, {
	engine: require('katex'),
	delimiters: 'dollars'
});
md.use(MarkdownItAnchor);

function deleteDirectory(path) {
	if (fs.existsSync(path)) {
		let list = fs.readdirSync(path);
		list.forEach(file => {
			let filePath = path + '/' + file;
			if (fs.statSync(filePath).isFile()) fs.unlinkSync(filePath);
			else deleteDirectory(filePath);
		});
		fs.rmdirSync(path);
	}
}

function makeDist() {
	deleteDirectory('dist');
	fs.mkdirSync('dist');
}

const typeList = ['translations', 'solutions'];

function build() {
	let dirList = fs.readdirSync('src');
	let siteList = dirList.filter(name => name != 'pages');
	siteList.forEach(site => {
		fs.mkdirSync('dist/' + site);
		let contestList = fs.readdirSync('src/' + site);
		let availableList = {};
		contestList.forEach(contest => {
			fs.mkdirSync('dist/' + site + '/' + contest);
			let problemList = fs.readdirSync('src/' + site + '/' + contest);
			problemList.forEach(problem => {
				fs.mkdirSync('dist/' + site + '/' + contest + '/' + problem);
				let problemPath = site + '/' + contest + '/' + problem;
				let problemArticleList = {'translations': {}, 'solutions': {}};
				availableList[contest + '/' + problem] = [0, 0];
				typeList.forEach(type => {
					fs.mkdirSync('dist/' + site + '/' + contest + '/' + problem + '/' + type);
					if (!fs.existsSync('src/' + problemPath + '/' + type)) return;
					let articleList = fs.readdirSync('src/' + problemPath + '/' + type);
					articleList.forEach(article => {
						try {
							let articlePath = problemPath + '/' + type + '/' + article;
							let articleInfo = {};
							let articleObject = {};
							let loaded = yamlFront.loadFront(fs.readFileSync('src/' + articlePath + '/README.md'));
							let lastCommit = JSON.parse(fs.readFileSync('commitInfo/src/' + articlePath + '/commitInfo.json'));
							let source = loaded.__content.trim();
							articleObject.rendered = md.render(source);
							articleInfo = loaded;
							delete articleInfo.__content;
							articleInfo.lastCommit = lastCommit;
							articleObject.articleInfo = articleInfo;
							fs.mkdirSync('dist/' + site + '/' + contest + '/' + problem + '/' + type + '/' + article);;
							fs.writeFileSync('dist/' + articlePath + '/source.md', source);
							fs.writeFileSync('dist/' + articlePath + '/data.json', JSON.stringify(articleObject));
							problemArticleList[type][article] = articleInfo;
							if (type == 'translations') availableList[contest + '/' + problem][0]++;
							if (type == 'solutions') availableList[contest + '/' + problem][1]++;
						} catch (e) {
							console.log('Failed to compile %s/%s/%s/%s/%s', site, contest, problem, type, article);
							console.log(e);
						}
					});
				});
				fs.writeFileSync('dist/' + problemPath + '/list.json', JSON.stringify(problemArticleList));
			});
		});
		fs.writeFileSync('dist/' + site + '/list.json', JSON.stringify(availableList));
	});
	let list = {};
	for (site of siteList) {
		let commitInfo = JSON.parse(fs.readFileSync(`commitInfo/src/${site}/commitInfo.json`));
		list[site] = commitInfo;
	}
	fs.writeFileSync('dist/list.json', JSON.stringify(list));
	fs.writeFileSync('dist/commitInfo.json', fs.readFileSync('commitInfo/commitInfo.json'));
}

makeDist();
build();
