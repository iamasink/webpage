const fs = require('fs')
const path = require('path')

const getMarkdownFiles = (dir) => {
    const files = fs.readdirSync(dir)
    return files.filter(file => file.endsWith('.md')).map(file => path.join(dir, file))
    // return files.map(file => path.join(dir, file))
}

const getDateFromFrontmatter = (content) => {
    // find the frontmatter

    return null
}



const sanitizeFilename = (filename) => {
    return filename
        .toLowerCase()
        // i love regex
        .replace(/^\d{4}[- ]\d{2}[- ]\d{2}([- ]\d{1,2})?([-_]|\s\-\s| )\s*/, '') // remove dates
        .replace(/\s\-\s/g, "-")    // replace hyphens surrounded with spaces correctly
        .replace(/\s+/g, "-")       // replace spaces with hyphens
        .replace(/\&/g, "and")      // replace &
        .replace(/@/g, "at")        // replace @
        .replace(/#/g, "no ")       // replace #
        .replace(/\+/g, "plus")     // replace +
        .replace(/%/g, "percent")   // replace %
        .replace(/["<>|?*]/g, "")   // remove bad characters
        .replace(/[\/\\:]/g, "-")   // replace / \  : with hyphens
        .replace(/[^\w-]/g, "")     // remove non-alphanumeric characters except hyphens
}

const main = () => {
    const dir = './content/blog'
    const files = getMarkdownFiles(dir)

    // read and parse each file's date, then sort files by date
    const fileData = files.map(file => {
        console.log("file:", file)
        const content = fs.readFileSync(file, 'utf8')
        const frontmatterMatch = content.match(/^---[\r\n]+([\s\S]+?)[\r\n]+---/)
        let frontmatterDate = ""
        if (frontmatterMatch) {
            // check if date already exists in the frontmatter
            const dateMatch = frontmatterMatch[1].match(/^date:\s*(\S+)/m)
            frontmatterDate = dateMatch ? dateMatch[1] : ""
        } else {
            const stats = fs.statSync(file)
            // const modifiedTime = stats.mtime.toISOString() // Format: "2024-11-11T19:53:08.000Z"
            frontmatterDate = stats.mtime.toISOString()
            const newFrontmatter = `---\ntitle: ${path.basename(file, ".md")}\ndescription: \naliases: \ntags: \ndate: ${frontmatterDate}\n---\n`
            fs.writeFileSync(file, newFrontmatter + content)
        }
        return { file: file, frontmatterDate, content }
    })

    // sort by date (oldest to newest)
    fileData.sort((a, b) => new Date(a.frontmatterDate).getTime() - new Date(b.frontmatterDate).getTime())

    // group files by date and rename them accordingly
    const dateGroups = {}

    fileData.forEach(({ file, frontmatterDate, content }) => {
        const filename = path.basename(file, '.md')

        // extract the date in YYYY-MM-DD format (ignores time if present)
        const dateKey = frontmatterDate.split('T')[0]

        // add the date if it doesn't exist
        if (!dateGroups[dateKey]) {
            dateGroups[dateKey] = []
        }

        // add file to the date group
        dateGroups[dateKey].push({ file, filename, dateKey })
    })

    Object.values(dateGroups).forEach(group => {
        group.forEach((item, index) => {
            const sanitizedFilename = sanitizeFilename(item.filename.trim())

            console.log(sanitizedFilename)
            let newFilename

            // if (group.length > 1) {
            // add count 
            const counter = String(index + 1)
            newFilename = `${item.dateKey}-${counter}_${sanitizedFilename}.md`
            // } else {
            // // no count if there's only one file for the date
            // actually, dont do that. good urls dont change or whatever.
            // newFilename = `${item.dateKey}_${sanitizedFilename}.md`
            // }

            const newFilePath = path.join(path.dirname(item.file), newFilename)
            console.log(`Renaming ${item.file} to ${newFilePath}`)
            fs.renameSync(item.file, newFilePath)
        })
    })
}

main()
