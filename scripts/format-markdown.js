const fs = require('fs');
const path = require('path');

const getMarkdownFiles = (dir) => {
    const files = fs.readdirSync(dir);
    return files.filter(file => file.endsWith('.md')).map(file => path.join(dir, file));
};

const getDateFromFrontmatter = (content) => {
    // find the frontmatter
    const frontmatterMatch = content.match(/^---\n([\s\S]+?)\n---/);
    if (frontmatterMatch) {
        // Check if date already exists in the frontmatter
        const dateMatch = frontmatterMatch[1].match(/^date:\s*(\d{4}-\d{2}-\d{2})/m);
        return dateMatch ? dateMatch[1] : null;
    }
    return null;
};

const sanitizeFilename = (filename) => {
    return filename
        .toLowerCase()
        .replace(/\s+/g, '-')       // Replace spaces with hyphens
        .replace(/[^\w-]/g, '');    // Remove non-alphanumeric characters except hyphens
};

const main = () => {
    const files = getMarkdownFiles('./content/blog');

    files.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');

        const frontmatterDate = getDateFromFrontmatter(content);
        if (frontmatterDate) {
            // checl if filename already contains the date
            const filename = path.basename(file, '.md');
            const filenameDateMatch = filename.match(/^\d{4}-\d{2}-\d{2}/);

            if (!filenameDateMatch || filenameDateMatch[0] !== frontmatterDate) {
                const sanitizedFilename = sanitizeFilename(filename.replace(/^\d{4}-\d{2}-\d{2}-/, ''));
                const newFilename = `${frontmatterDate}-${sanitizedFilename}.md`;
                const newFilePath = path.join(path.dirname(file), newFilename);

                fs.renameSync(file, newFilePath);
                console.log(`Renamed ${file} to ${newFilePath}`);
            } else {
                console.log(`Filename already contains date for ${file}`);
            }
        } else {
            console.log(`No date found in front matter for ${file}`);
        }
    });
};

main();
