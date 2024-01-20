document.addEventListener("DOMContentLoaded", ()=>{
    AOS.init();
    
    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });      

    const tabButtons = document.querySelectorAll(".tabs-button");

    for(let i = 0; i < tabButtons.length; i++){

        tabButtons[i].addEventListener('click', (event)=>{
            const newTab = event.target.dataset.tab;
            const activeTab = document.querySelector('.tabs-button.active');
            const activeTabContent = document.querySelector('.tab-item.active');
            activeTab.classList.remove('active');
            activeTabContent.classList.remove('active');

            const newTabContent = document.getElementById(newTab);
            newTabContent.classList.add('active');
            event.target.classList.add('active');
            console.log(newTabContent);
        })
    }
})