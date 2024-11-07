---
title: Quartz
draft: false
aliases: 
tags: 
description: what runs (builds? idk) the place
date: 2024-04-27
---
[quartz](https://quartz.jzhao.xyz/)  is kinda cool. i probably wouldn't have used it if i didn't already use obsidian, but I don't even use obsidian that much!! but it is a nice editor and markdown is cool (except it's weird line breaking stuff but that can be fixed here :3)
and like I would be way too lazy to do anything of the sorts otherwise. html isn't hard, but its more friction than i want for this.
i'm not sure if i'm a fan of folders, there are tags and i don't want to have to classify stuff twice, because knowing me i won't. but also having smaller pages in a folder might be nice? i'm indecisive and it sucks!! i'll figure it out eventually i guess.

for some reason, i'm hesitant to call this a "blog", that seems too professional and not me, but i guess that's what it is. twitter is just "micro-blogging", after all.

this took me like 4 attempts to get working, but for some reason i kept deleting my progress every time, it was more work than necessary. 
eventually i want to move this from q.iamas.ink to something like iamas.ink/blog/, but this part is hosted on github pages because i couldn't figure it out otherwise. for now, there's some redirects ([[Caddy#Redirect a path to a subdomain with path]]) this way, and if i ever do get around to changing it, it should redirect the other way.

i recently also came across [Quarto](https://quarto.org), which i might prefer to quartz.
there's also [Lume](https://lume.land/), which I really like the look of
the awesome thing is, with markdown, i can switch quite easily and wont have to actually modify much (i could even use multiple at once, i guess.)
sigh, so much i want to do, so little ~~time~~ energy. 

# customisation
## attempting (and failing) to add a separate page for explorer
i would like a separate page for the explorer and recent notes sections to rest, but i don't see any way to do that easily.
the `tagPage` and `folderPage` files are probably similar to what i want, but i don't fully understand what's going on. 
I guess i'd need to edit `contentPage` and add something for this?
something in the headmatter is probably the best way to go about it, i'll try follow how drafts work.
actually, this seems really complicated!!
there is some pages at `quartz\components\pages`, including `404.tsx` which seems promising, bad pages are redirected to that 404 page so i should be able to figure out how that works.
i guess i'll just edit `pages\Content.tsx`?

everything seems to get output in `emitters\contentPage.tsx` as:
```js
  const opts: FullPageLayout = {
    ...sharedPageComponents,
    ...defaultContentPageLayout,
    pageBody: Content(),
    ...userOpts,
  }
```
where Content() is the export from `pages\Content.tsx`.. 
i feel like this should be fairly easy to do, but i don't really know what i'm doing lol

it's 5am (though i've only been awake for around 10 hours) so this is where i give up (and this particular idea will probably rot away). 

---

giving up on that, i'd like some other customisation. i'm still not sure if i'll continue to use quartz, but hey.
## explorer stuff

i wanted the explorer to be sorted by date, and to show the description from the headmatter.
in `quartz.layout.ts`, i have a function to do this.
i modified the [example from the quartz documentation](https://quartz.jzhao.xyz/features/explorer#use-sort-to-put-files-first)
```ts
// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.Description(),
    Component.ContentMeta({ showReadingTime: false }),
    Component.TagList(),
    Component.MobileOnly(Component.TableOfContents()),
    Component.MobileOnly(Component.LineSpacer()),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({
      sortFn: (a, b) => {
        if ((!a.file && !b.file) || (a.file && b.file)) {
          // Compare creation dates if both items have files
          if (a.file && b.file && a.file.dates?.created && b.file.dates?.created) {
            const createdA = new Date(a.file.dates.created);
            const createdB = new Date(b.file.dates.created);

            // Sort in ascending order
            if (createdA < createdB) {
              return -1;
            } else if (createdA > createdB) {
              return 1;
            } else {
              return 0;
            }
          } else {
	          return 0
          }
        } 
        if (a.file && !b.file) {
          return 1;
        } else {
          return -1;
        }
      },
      // i decided i didn't really want this.
      // mapFn: (node) => {
      //   if (node.file) {
      //     if (node.file.dates) {
      //       const date = new Date(node.file.dates.created);
      //       const formatteddate = date.toISOString()
      //         .replace(/T.+/, ' ')      // delete the T and everything after
      //       node.displayName = formatteddate + " - " + node.displayName
      //     }
      //   }
      // },

    })),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
    Component.MobileOnly(Component.Explorer()),
  ],
}
```
i also added a MobileOnly explorer to the right of both default layouts, as it isn't there normally.

### description/subtitle in explorer
To display the frontmatter description in the explorer, i just modified the `ExplorerNode.tsx` to include
``` tsx
{node.file.frontmatter?.description ? (<p className="subtitle">{node.file.frontmatter?.description}</p>) : {}}
```
this has the className of subtitle which is styled in `custom.scss` as so
```css
.subtitle {
    opacity: 0.7;
    font-weight: 300;
    line-height: 0.5rem;
    margin-left: 2%;
    margin-top: 0.2rem;
    margin-bottom: 3%;
}
```

### fixing what i broke
interestingly/annoyingly, the explorer is in a different place on mobile vs on a pc, but zoomed in. 
it seemed to be based on the aspect ratio / horizontal width. resizing my window, it looks fine. but zooming in, it makes some titles in the explorer cover two lines, which i'd like to avoid.
here is how it looks on some displays:
![[Pasted image 20240427063639.png]]
i fixed the lines overlapping by changing to line-height: 1rem;.
then went had to figure out how to make the explorer be a new line than the graph view and backlinks.
affecting all children of the right sidebar, i added flex-basis: 40% !important;
this makes it take up more space of the flex i think?
50% didn't seem to work, probably because of margins and padding, but 40% works just fine!
```css
.sidebar.right {
    >* {
        // this makes it so there should be only 2 per row. the explorer should then be the third and take up the entire width.
        flex-basis: 40% !important;
    }

}
```
![[Pasted image 20240427064026.png]]
however, there is a weird gradient covering parts of it. i assume this is because each element is longer than it expects due to my subtitle thing?
![[Pasted image 20240427064112.png]]
this shows up even when there isn't any overflow!
setting position: relative; on the parent..
```css
ol.overflow {
    position: relative;
}
```
seems to move it to the right position.
but, i didn't actually test with more elements.. this currently incorrectly moves when the list is scrolled. 
ok, whatever. ill just make the max-height: none. i kinda wanted it like that anyway (for now, at least.)


### explorer a href click fix
it was a bit hard to click on the links in the explorer, as there were gaps between the title and subtitle. to fix this, i just made the `a` have a full width and height
```css
.folder-outer>ul>li>a {
    display: inline-block;
    width: 100%;
    height: 100%;
}
```

## description
I created my own Component to show the description on each page. this will only display the frontmatter's description, and not the automatically generated one by the default Description plugin
```tsx
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

function Description({ cfg, fileData, displayClass }: QuartzComponentProps) {
    if (!fileData.frontmatter) return <div></div>
    return <p class={classNames(displayClass, "description")}>{fileData.frontmatter.description}</p>
}

Description.css = `
    .description {
        display: block;
        margin-top: 1em;
        margin-bottom: 1em;
        margin-left: 0;
        margin-right: 0;
    }
    `

export default (() => Description) satisfies QuartzComponentConstructor
```


## a spacer, with a line
i created a custom component called LineSpacer, which i currently only use on mobile layout. it is just a `<hr>`. I decided not to give it any special styling so it matches the rest of the page's `<hr>`'s

## other stuff
i modified the pageWidth in `quartz/styles/variables.scss`
so `$pageWidth` is 800px instead of the default of 750, and 
`$sidePanelWidth` is 500px instead of 380x.
this makes the site wider, which is just more comfy to me, and allows for longer titles (and descriptions, using my component) in the explorer.


## date in quartz and obsidian
obsidian and quartz often report the date incorrectly. to combat this, I just added `\<% tp.date.now("YYYY-MM-DD") %>`  to the template's date in the frontmatter. i can change this too if i want. i dont think i made quartz do anything special as the frontmatter gets priority.

