window.addEventListener('DOMContentLoaded', ()=>{(()=> {
        const element = document.querySelector('#gallery-select');
        const choises = new Choices(element, {
            searchEnabled: false,
            itemSelectText: '',
        });
    })();
});