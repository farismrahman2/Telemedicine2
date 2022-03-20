const backendUrl = 'http://localhost:5555/app/'

const postContact =(data)=>{
  fetch(backendUrl+'contact', {
    method : 'POST',
    headers : {
      'Content-Type': 'application/json'
    },
    body: data
  })
  .then(res=>{
    console.log( 'success')
  })
}

const getContact = () =>{
  return fetch(backendUrl+'contact')
  .then(res=>res.json())
}

const deleteContactById = (id) => {
  return fetch(backendUrl+'contact/'+id, {method:'DELETE'})
}
const postAppointment =(data)=>{
  fetch(backendUrl+'appointment', {
    method : 'POST',
    headers : {
      'Content-Type': 'application/json'
    },
    body: data
  })
  .then(res=>{
    console.log('success')
  })
}
const getAppointment = () =>{
  return fetch(backendUrl+'appointment')
  .then(res=>res.json())
}

const deleteAppointmentById = (id) => {
  return fetch(backendUrl+'appointment/'+id, {method:'DELETE'})
}
module.exports = {
  postContact, postAppointment,
  getContact, getAppointment,
  deleteContactById, deleteAppointmentById
}