import API from "../services/api";

function ItemCard({ item, fetchItems }) {

    async function deleteItem() {

        try {

            await API.delete(`/items/${item.id}`);

            fetchItems();

        } catch (error) {
            console.log(error);
        }
    }

    return (

        <div style={{
            backgroundColor: "white",
            padding: "15px",
            margin: "15px",
            borderRadius: "10px",
            boxShadow: "0px 2px 5px rgba(0,0,0,0.2)"
        }}>

            <h2>{item.itemName}</h2>

            <p>
                <strong>Description:</strong>
                {" "}
                {item.description}
            </p>

            <p>
                <strong>Location:</strong>
                {" "}
                {item.location}
            </p>

            <p>
                <strong>Type:</strong>
                {" "}
                {item.type}
            </p>

            <p>
                <strong>Contact:</strong>
                {" "}
                {item.contact}
            </p>

            <button onClick={deleteItem}>
                Delete
            </button>

        </div>
    )
}

export default ItemCard;