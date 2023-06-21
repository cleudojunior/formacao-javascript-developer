document.addEventListener('DOMContentLoaded', async () => {
    const urlNextPrev = 'https://www.figma.com/file/ViaueUUrDA1vC26uTHc2OA/Pok%C3%A9dex-(Community)?type=design&node-id=916-1217&t=cMbVyEoNahsWZOiZ-4'
    const urlSeta = 'https://www.figma.com/file/ViaueUUrDA1vC26uTHc2OA/Pok%C3%A9dex-(Community)?type=design&node-id=916-1214&t=cMbVyEoNahsWZOiZ-4'

    const imgSeta = await Blob(urlSeta)
    const imgNextPrev = await Blob(urlNextPrev)
    console.log(imgSeta)
})

fetch('https://www.figma.com/file/ViaueUUrDA1vC26uTHc2OA/Pok%C3%A9dex-(Community)?type=design&node-id=916-1217&t=cMbVyEoNahsWZOiZ-4')
    .then(function(data) {
        return data.blob()
    }).then(function(result) {
        const img = URL.createObjectURL(result)
        console.log(img)
    })