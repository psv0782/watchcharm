document.addEventListener('DOMContentLoaded', function () {
            const openModalButton = document.getElementById('openModalButton');
            const closeModalButton = document.getElementById('closeModalButton');
            const modalOverlay = document.getElementById('modalOverlay');

            openModalButton.addEventListener('click', function () {
                modalOverlay.style.display = 'flex';
            });

            closeModalButton.addEventListener('click', function () {
                modalOverlay.style.display = 'none';
            });

            modalOverlay.addEventListener('click', function (event) {
                if (event.target === modalOverlay) {
                    modalOverlay.style.display = 'none';
                }
            });

            const openMenuButton = document.getElementById('openMenuButton');
            const closeMenuButton = document.getElementById('closeMenuButton');
            const menuMobile = document.getElementById('menuMobile');

            openMenuButton.addEventListener('click', function () {
                menuMobile.classList.add('is-open');
            });

            closeMenuButton.addEventListener('click', function () {
                menuMobile.classList.remove('is-open');
            });

            menuMobile.addEventListener('click', function (event) {
                if (event.target === menuMobile) {
                    menuMobile.classList.remove('is-open');
                }
            });
        });