
const toggleButton = document.querySelector('#toggle-button')
const sidebar = document.querySelector('#sidebar')

function toggleSidebar(){
    sidebar.classList.toggle('close');
    toggleButton.classList.toggle('rotate')

    Array.from(sidebar.getElementsByClassName('show')).forEach(ul=> {
        ul.classList.remove('show')
        ul.previousElementSibling.classList.remove('rotate')
    });
}

function toggleSubMenu(button){
    if (sidebar.classList.contains('close')) {
        sidebar.classList.toggle('close');
        toggleButton.classList.toggle('rotate');
        
        setTimeout(() => {
            button.nextElementSibling.classList.toggle('show');
            button.classList.toggle('rotate');
        }, 300); 
    } else {
        button.nextElementSibling.classList.toggle('show');
        button.classList.toggle('rotate');
    }
    

}
