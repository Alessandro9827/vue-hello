const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Obi Wan Kenobi',
            source: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKs61XhicMhRM5uVSgdikynOYhHAt5omdOXA&usqp=CAU"
        }
    }
}).mount('#app')