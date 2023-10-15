

console.log(document.querySelector('.nav-links'))

document.querySelector('.hamburger')?.addEventListener('click', () => {
    document.querySelector('.nav-links')?.classList.toggle('expanded');
});