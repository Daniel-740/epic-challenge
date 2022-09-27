import Swal from "sweetalert2"

export const deleteAlert = () => {

     const alert = Swal.fire({
          title: 'Do you want to delete record?',
          showDenyButton: true,
          confirmButtonText: 'Yes',
          confirmButtonColor: '#3085d6',
          denyButtonText: `No`,
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire('Deleted!', '', 'success')
             return true;
          } else{
               return false;
          }
        })

     return alert
}

export const addAlert = () => {

     const alert = Swal.fire({
          icon: 'success',
          title: 'the record has been added successfully',
          showConfirmButton: false,
          timer: 1500
        })

     return alert
}

export const editAlert = () => {

     const alert = Swal.fire({
          icon: 'success',
          title: 'the record has been edited successfully',
          showConfirmButton: false,
          timer: 1500
        })

     return alert
}

export const checkAlert = (val) => {
     if (val){
          Swal.fire({
               icon: 'error',
               title: 'Oops...',
               text: 'This record is associated with a camera!',
             })

          return false;
     }

     return true;
}