const modals = () => {
    function binModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]');
              //closeClickOverlay = true => if such data is not transferred, 
              //then automatically clicking on any place not in the form - the modal window is closed

        trigger.forEach(item  => {
            item.addEventListener('click', (e) => {
                if(e.target) {
                    e.preventDefault();
                }
    
                windows.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                // document.body.classList.add('modal-open');// сlass of bootstrap
            });
         
        });

        close.addEventListener('click', (e)  => {
            windows.forEach(item => {
                item.style.display = 'none';
            });

            modal.style.display = "none";
            document.body.style.overflow = "";
            // document.body.classList.remove('modal-open');
        });

        modal.addEventListener('click', (e)  => {
            if(e.target === modal && closeClickOverlay) {
                windows.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = "none";
                document.body.style.overflow = "";
                // document.body.classList.remove('modal-open');        
            }
        });
        
    }

    function showModalByTime(selector, time) {
        setTimeout(function() {
            document.querySelector(selector).style.display = "block";
            document.body.style.overflow = "hidden";
        }, time)
    }

    binModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    binModal('.phone_link', '.popup', '.popup .popup_close');
    binModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    binModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    binModal( '.popup_calc_profile_button', '.popup_calc_end','.popup_calc_end_close', false);
    // showModalByTime('.popup', 60000);
};  

export default modals;