const imagemin = require('imagemin')
const imageminWebp = require('imagemin-webp')

const argv = process.argv
const src = argv[2]
const target = argv[3]

;(async () => {
  const files = await imagemin([`${src}*.{jpg,png}`], {
    destination: target,
    plugins: [imageminWebp()]
  })
  console.log(
    `Images optimized: \n${files
      .map((item) => item.destinationPath)
      .join('\n')}`
  )
})()
