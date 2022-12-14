/*
 *
 * @param {string} value: Is string for the value search bar
 * @param {array} arrayFilter: Is array original values for the state redux
 * @param {string} entity: to differentiate the module from the browser, this makes it reusable
 */

export const filterSearch = (value, arrayFilter, entity) => {

     if(entity === 'cameraTypes'){

          const filteredRows = arrayFilter.filter((row) => {
               return row.name.toLowerCase().includes(value.toLowerCase()) || row.description.toLowerCase().includes(value.toLowerCase());
             });

          return filteredRows
     }
 
     if(entity === 'cameras'){

          if(value){

               const response = arrayFilter.filter( item => {
     
                    return item.name.toLowerCase().includes(value.toLowerCase()) ||
                    item.model.toLowerCase().includes(value.toLowerCase()) ||
                    item.brand.toLowerCase().includes(value.toLowerCase());
               })

               return response;
          }else{
               return arrayFilter;
          }


     }

}