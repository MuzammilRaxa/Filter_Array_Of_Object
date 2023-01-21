// To filter JavaScript array elements with multiple criteria or conditions,
// you need to call the Array object's filter() method and write multiple validations in its callback function.
// Different methods  can be used here, An easy way:

 const data = [
     {
     _id: 1,
     name: 'mohsin',
     site_id: 1,
     department_id: 1,
     status: 'inactive'
 },
 {
     _id: 2,
     name: 'Raza',
     site_id: 5,
     department_id: 3,
     status: 'active'
 },
 {
     _id: 3,
     name: 'Ahmed',
     site_id: 7,
     department_id: 1,
     status: 'active'
 },
 
 {
     _id: 4,
     name: 'Ahmed Ali',
     site_id: 9,
     department_id: 2,
     status: 'inactive'
 },
 
 {
     _id: 1,
     name: 'Ahmed Raza',
     site_id: 1,
     department_id: 4,
     status: 'active'
 },
 ]
 
 
 const filters = { department_id: 1, status: 'inactive', name: 'mohsin',};
 
 function filterFunc(professionals, filters) {
     return professionals.filter(professional => {
         let match = true;
         if ('site_id' in filters) {
             match = match && professional.site_id === filters.site_id;
         }
         if ('department_id' in filters) {
             match = match && professional.department_id === filters.department_id;
         }
         if ('status' in filters) {
             match = match && professional.status === filters.status;
         }
         return match;
     });
 }
 
 const filteredData = filterFunc(data, filters);
 
 console.log(filteredData)


 