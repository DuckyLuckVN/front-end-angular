export let alertService = function() {

    let services = {};

    services.num = 0;

    services.alert = (title, msg, icon = 'info', delay, onClose) => {
        Swal.fire({
            icon: icon,
            title: title,
            text: msg,
            showConfirmButton: false,
            timer: delay,
            onClose: onClose
          });
    };

    services.success = (title, msg, delay = 2500, onClose) => {
        service.alert(this.title, this.msg, 'success', this.delay, this.onClose);
    }
    
    services.error = (title, msg, delay = 2500, onClose) => {
        service.alert(this.title, this.msg, 'error', this.delay, this.onClose);
    }

    return services;

}