const featuredImg = document.querySelector('.feature-img')
const otherImgs = document.querySelectorAll('.other-img')

otherImgs.forEach(element => {
    element.addEventListener('click', () =>{
        featuredImg.src = element.src
    })
});
