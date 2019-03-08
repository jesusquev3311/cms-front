import Api from '@/services/Api'

export default {
  Leads (url = 'leads') {
    return {
      getAll: () => Api().get(url),
      getOne: (id) => Api().get(`${url}/${id}`),
      createOne: (lead) => Api().post(url, lead),
      updateOne: (id, lead) => Api().put(`${url}/${id}`, lead),
      deleteOne: (id) => Api().delete(`${url}/${id}`),
      addNote: (leadId, note) => Api().post(`${url}/${leadId}/notes`, note),
      deleteNote: (leadId, id) => Api().delete(`${url}/${leadId}/notes/${id}`)
    }
  }
}
