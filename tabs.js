window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.content-section.active').style.display = 'block';

    const tabs = document.querySelectorAll('.tab');
    const sections = document.querySelectorAll('.content-section');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            
            tabs.forEach(t => t.classList.remove('active'));
            sections.forEach(sec => {
                sec.classList.remove('active');
                sec.style.display = 'none';   
            });

           
            tab.classList.add('active');
            const section = document.getElementById(tab.dataset.section);
            section.style.display = 'block';  
            requestAnimationFrame(() => {
                section.classList.add('active');  
            });
        });
    });
});
