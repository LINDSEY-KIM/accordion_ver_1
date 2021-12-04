(() => {

    const wrapEl = document.querySelector(".wrap");

    const handleClick = (e) => {


        if (e.target.parentNode.classList.contains('active')) {
            e.target.parentNode.classList.remove('active');
        }
        

        if(e.target.classList.contains('item')) {
            e.target.parentNode.classList.add('active');
        }
    };


    wrapEl.addEventListener('click' , handleClick);
    
})();