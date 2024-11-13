const fs = require('fs')
const path = require('path')


const main = () => {
    const dir = './content/blog'
    const files = fs.readdirSync(dir).filter(file => file.endsWith('.md')).map(file => path.join(dir, file))

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
        }
        return { file, frontmatterDate, content }
    })

    // sort by date (oldest to newest)
    fileData.sort((a, b) => new Date(a.frontmatterDate).getTime() - new Date(b.frontmatterDate).getTime())

    // group files by date
    const dateGroups = {}

    fileData.forEach(({ file, frontmatterDate, content }) => {
        const filename = path.basename(file, '.md')

        // update contents

        // replace unnamed wikilinks with title
        fs.writeFileSync(path.join(process.cwd(), 'content', 'blog', filename + ".md"),
            content.replace(/\[\[(\d{4}[-]\d{2}[-]\d{2}[-]\d{1,2}_[a-zA-Z0-9-_]+)\]\]/g, (match, p1) => {
                const fileLinkPath = path.join(process.cwd(), 'content', 'blog', p1 + ".md")
                console.log("replacing in", filename, ": ", fileLinkPath)
                // console.log(p1)

                // If the file exists
                if (fs.existsSync(fileLinkPath)) {
                    const otherfilecontents = fs.readFileSync(fileLinkPath, 'utf8')
                    console.log("exists")
                    const frontmatterMatch = otherfilecontents.match(/^---[\r\n]+([\s\S]+?)[\r\n]+---/)
                    // console.log(frontmatterMatch)
                    let frontmatterTitle = ""
                    if (frontmatterMatch) {
                        const titleMatch = frontmatterMatch[1].match(/^title:\s*(.*)\s*/m)
                        frontmatterTitle = titleMatch ? titleMatch[1] : ""
                        const newTitle = `[[${p1}|${frontmatterTitle.trim()}]]`
                        console.log(`title: '${frontmatterTitle}' to : '${newTitle}'`)
                        return newTitle
                    }
                }
                console.log("nah nvm")
                return match
            })
        )


        //

    })

}

main()
