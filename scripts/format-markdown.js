const fs = require('fs')
const path = require('path')

const getMarkdownFiles = (dir) => {
    const files = fs.readdirSync(dir)
    return files.filter(file => file.endsWith('.md')).map(file => path.join(dir, file))
}

const getDateFromFrontmatter = (content) => {
    // find the frontmatter
    const frontmatterMatch = content.match(/^---[\r\n]+([\s\S]+?)[\r\n]+---/m)
    if (frontmatterMatch) {
        // Check if date already exists in the frontmatter
        const dateMatch = frontmatterMatch[1].match(/^date:\s*(\d{4}-\d{2}-\d{2})/m)
        return dateMatch ? dateMatch[1] : null
    }
    return null
}

const sanitizeFilename = (filename) => {
    return filename
        .toLowerCase()
        .replace(/\s+/g, "-")       // Replace spaces with hyphens
        .replace(/\&/g, "and")      // replace ampersand
        .replace(/[^\w-]/g, "")    // Remove non-alphanumeric characters except hyphens
}

const main = () => {
    const files = getMarkdownFiles('./content/blog')

    files.forEach(file => {
        const content = fs.readFileSync(file, 'utf8')
        const filename = path.basename(file, '.md')
        let newFilename
        let newFilePath

        const frontmatterDate = getDateFromFrontmatter(content)
        if (frontmatterDate) {
            // check if filename already contains the date
            const filenameDateMatch = filename.match(/^\d{4}-\d{2}-\d{2}/)

            // if the filename doesn't contain the date or the date doesn't match frontmatter
            if (!filenameDateMatch || filenameDateMatch[0] !== frontmatterDate) {
                const sanitizedFilename = sanitizeFilename(filename.replace(/^\d{4}-\d{2}-\d{2}-/, ''))
                newFilename = `${frontmatterDate}-${sanitizedFilename}.md`
                newFilePath = path.join(path.dirname(file), newFilename)
                console.log(`Renaming ${file} to ${newFilePath}`)
            } else {
                // if date matches the frontmatter, just sanitize the filename
                const sanitizedFilename = sanitizeFilename(filename)
                newFilename = `${sanitizedFilename}.md`
                newFilePath = path.join(path.dirname(file), newFilename)
                console.log(`Filename already contains date, renaming ${file} to ${newFilePath}`)
            }


            fs.renameSync(file, newFilePath)
        } else {
            console.log(`No date found in front matter for ${file}`)
        }
    })
}

main()
