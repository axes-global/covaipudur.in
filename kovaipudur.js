;(function () {

  bindEvents = () => {
    document.querySelectorAll('.more-details-link').forEach( element => {
      element.addEventListener('click', (event) => {
        if (event.target.nextElementSibling === null) {
          alert('No further details found');
          return;
        }
        if (typeof event.target.nextElementSibling.showModal === 'function') {
          event.target.nextElementSibling.showModal();
        } else {
          alert("The <dialog> API is not supported by this browser. Please use browsers chrome or edge or opera");
        }
      });
    });
  };

  document.addEventListener('DOMContentLoaded', event => {
    bindEvents();
  });

})();
