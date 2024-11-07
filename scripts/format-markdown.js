const fs = require('fs');
const path = require('path');

const getMarkdownFiles = (dir) => {
    const files = fs.readdirSync(dir);
    return files.filter(file => file.endsWith('.md')).map(file => path.join(dir, file));
};

const addDateToFrontmatter = (file, date) => {
    const content = fs.readFileSync(file, 'utf8');

    // find the frontmatter
    const frontmatterMatch = content.match(/^---\n([\s\S]+?)\n---/);

    if (frontmatterMatch) {
        // Check if date already exists in the front matter
        if (!frontmatterMatch[1].includes('date:')) {
            // Prepend date if not found
            const updatedContent = content.replace(/^---\n/, `---\ndate: ${date}\n`);
            fs.writeFileSync(file, updatedContent, 'utf8');
        }
    } else {
        // // No front matter, add it with the date
        // const updatedContent = `---\ndate: ${date}\n---\n${content}`;
        // fs.writeFileSync(file, updatedContent, 'utf8');
    }
};

// Main function
const main = () => {
    const files = getMarkdownFiles('./content/blog');
    const currentDate = new Date().toISOString().split('T')[0]; // Get the current date in YYYY-MM-DD format

    files.forEach(file => {
        // Extract date from filename if available
        const filenameDate = path.basename(file).match(/^\d{4}-\d{2}-\d{2}/);
        const date = filenameDate ? filenameDate[0] : currentDate;

        addDateToFrontmatter(file, date);
    });
};

main();
