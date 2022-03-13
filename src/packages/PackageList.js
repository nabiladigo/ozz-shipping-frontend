import { useState } from 'react'

const PackageList = (props) => {
    const id = props.match.params.id
  const packages = props.packages
  const  order = packages.find(p => p._id === id)

  const [editForm, setEditForm] = useState(order)

  // handleChange function for form
  const handleChange = event => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    props.updatePeople(editForm)
    props.history.push("/")
  }

  return (
    <div>PackageList</div>
  )
}

export default PackageList