

    import {useEffect, useState} from "react";
    import API from "../services/api";
    import ItemCard from "../components/ItemCard";
    import AddItemForm from "../components/AddItemForm";

    function Home() {

        const [items, setItems] = useState([]);

        useEffect(() => {
            fetchItems();
        }, []);

        async function fetchItems() {

            try {

                const response = await API.get("/items");

                setItems(response.data);

            } catch (error) {
                console.log(error);
            }
        }

        return (
            <div>

                <h1>Lost & Found Items</h1>
                <AddItemForm />
                {
                    items.map((item) => (

                        <ItemCard
                            key={item.id}
                            item={item}
                            fetchItems={fetchItems}

                        />
                    ))
                }

            </div>
        )
    }

    export default Home;
