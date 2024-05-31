let navigation = document.querySelector('.navigation') ;

function pop(e)
{
    navigation.classList.toggle('active');
}




navigation.addEventListener('click',pop);
