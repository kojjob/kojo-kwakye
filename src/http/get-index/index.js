const Main = require('@architect/views/main.js')
const staticAssetsHelper = require('./static-assets-helper')

// Customize your site by changing the data below
exports.handler = async function Index () {
  let body = Main({
    /**
     * Basic bio
     */
    fullname: 'Kojo Kwakye', // ←  Start by adding your name!
    title: 'My personal site!',
    occupation: 'Software Engineer',
    location: 'West Yorshire, Leeds',
    bio: "Hi! I'm Kojo, a Leeds-based Software Developer. I love the idea, that if I can think it, I can make it a reality and also creating something, to make a difference in peoples’ lives.",

    /**
     * Contact / social
     * - Comment out any item below to remove it from your page
     */
    email: 'your@email.com',
    twitter: 'https://twitter.com/Kojjob',
    linkedin: 'https://www.linkedin.com/in/kojo-kwakye-2ba57011b/',
    instagram: 'yourInsta',
    facebook: 'your-facebook-name',

    /**
     * Layout
     */
    photographer: 'Ivana Cajina',
    service: 'Unsplash',
    credit: 'https://unsplash.com/@von_co',
    image: staticAssetsHelper('background.jpg')
    // or link to an external image URL such as ↓
    // image: 'https://images.unsplash.com/photo-1506535772317-9fdb71c959c6'
  })

  return {
    headers: {
      'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body
  }
}
