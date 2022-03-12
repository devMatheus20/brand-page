const menuList = document.getElementById('list')
menuList.style.maxHeight = '0px'

const containerTop = document.getElementById('section-one')
containerTop.style.paddingTop = '90px'

const showMenu = () => {
    if(menuList.style.maxHeight == '0px') menuList.style.maxHeight = '170px'
    else menuList.style.maxHeight = '0px'
}