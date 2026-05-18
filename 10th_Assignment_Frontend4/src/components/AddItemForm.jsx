import { useState } from "react";
import API from "../services/api";

function AddItemForm() {

    const [formData, setFormData] = useState({
        itemName: "",
        description: "",
         location: "",
        type: "",
         contact: ""
    });

    function handleChange(event) {

        setFormData({
            ...formData,
             [event.target.name]: event.target.value
        });
    }

    async function handleSubmit(event) {

        event.preventDefault();

        try {

            await API.post("/items", formData);

            fetchItems();

            alert("Item Added Successfully");

            setFormData({
                itemName: "",
                description: "",
                location: "",
                type: "",
                contact: ""
            });

        } catch (error) {
            console.log(error);
        }
    }

    return (

        <div style={{
             backgroundColor: "white",
             padding: "20px",
              margin: "20px",
            borderRadius: "10px"
        }}>

            <h2>Add Item</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="itemName"
                    placeholder="Item Name"
                    value={formData.itemName}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="text"
                    name="type"
                    placeholder="LOST or FOUND"
                    value={formData.type}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="text"
                    name="contact"
                    placeholder="Contact Number"
                    value={formData.contact}
                    onChange={handleChange}
                />

                <br /><br />

                <button type="submit">
                    Add Item
                </button>

            </form>

        </div>
    )
}

export default AddItemForm;