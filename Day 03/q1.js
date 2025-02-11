/*
● Visit any page on the browser, and replace the content of all the p tags with the phrase
“How’s the Josh?” using Javascript
*/
const paragraphs = document.querySelectorAll('p');

paragraphs.forEach(p => {
    p.textContent = "How’s the Josh?";
});
