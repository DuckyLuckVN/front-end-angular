export let alertHelper = {};

    alertHelper.alert = (title, msg, icon = 'info', delay, onClose) => {
        Swal.fire({
            icon: icon,
            title: title,
            html: msg,
            showConfirmButton: false,
            timer: delay,
            onClose: onClose
          });
    };



    alertHelper.confirm = (title, msg, onConfirm) => {
        Swal.fire({
            title: title,
            html: msg,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#4caf50',
            cancelButtonColor: '#ff5722',
            confirmButtonText: 'Xác nhận',
            cancelButtonText: 'Hủy'
          }).then((result) => {
            if (result.value) {
                onConfirm();
            }
          })
    }

    alertHelper.success = (title, msg, delay = 2500, onClose) => {
        alertHelper.alert(title, msg, 'success', delay, onClose);
    }
    
    alertHelper.error = (title, msg, delay = 2500, onClose) => {
        alertHelper.alert(title, msg, 'error', delay, onClose);
    }
    alertHelper.info = (title, msg, delay = 2500, onClose) => {
        alertHelper.alert(title, msg, 'info', delay, onClose);
    }
    
    alertHelper.simpleSuccess = (title, msg, onClose) => {
        alertHelper.alert(title, msg, 'success', 2500, onClose);
    }
    
    alertHelper.simpleError = (title, msg, onClose) => {
        alertHelper.alert(title, msg, 'error', 2500, onClose);
    }

    alertHelper.simpleInfo = (title, msg, onClose) => {
        alertHelper.alert(title, msg, 'info', 2500, onClose);
    }