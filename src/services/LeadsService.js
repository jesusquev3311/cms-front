import Api from '@/services/Api'

export default {
  Leads (url = 'leads') {
    return {
      getAll: () => Api().get(url),
      getOne: (id) => Api().get(`${url}/${id}`),
      createOne: (lead) => Api().post(url, lead),
      updateOne: (id) => Api().put(`${url}/${id}`, lead),
      deleteOne: (id) => Api().delete(`${url}/${id}`),
      //Leads Notes Method
      getNotes: (leadId) => Api().get(`${url}/${leadId}/notes`),
      getNote: (leadId, id) => Api().get(`${url}/${leadId}/notes/${id}`),
      addNote: (leadId, note) => Api().post(`${url}/${leadId}/notes`, note),
      deleteNote: (leadId, id) => Api().delete(`${url}/${leadId}/notes/${id}`)
    }
  }
}
