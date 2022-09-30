

// const searchText = document.getElementById('search-text');
// const searchButton = document.getElementById('search-button');

// export function searchTriggered(fn) {
//     searchButton.addEventListener('click', () => {
//         if(searchText.value){
//             fn(searchText.value);
//         }
// });
//     searchText.addEventListener('keypress', () => {
//         if(event.keyCode === 13 && searchText.value){
//             fn(searchText.value);
//         }
// });
// }

   

export default handler => {
    const searchText = document.getElementById('search-text');
    const searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', () => {
        if(!searchText.value.length){
            return;
        }
        handler(searchText.value);
        
    });
    searchText.addEventListener('keypress', (e) =>{
        if(!searchText.value.length || e.keyCode !== 13){
            return;
        }
        handler(searchText.value);
    });
};



