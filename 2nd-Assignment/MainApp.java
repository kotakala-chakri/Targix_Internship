public class MainApp {

    public static void main(String[] args) {

        CollectionManager manager = new CollectionManager();

        // LIST Example
        
        manager.addToList("Apple");
        manager.addToList("Banana");
        manager.addToList("Apple"); // duplicate allowed

        System.out.println("List Elements: " + manager.getList());

        manager.removeFromList("Banana");
        System.out.println("List After Removal: " + manager.getList());

        System.out.println("Search Apple in List: " + manager.searchInList("Apple"));


        // SET Example
        manager.addToSet("Car");
        manager.addToSet("Bike");
        manager.addToSet("Car"); // duplicate ignored

        System.out.println("\nSet Elements: " + manager.getSet());

        manager.removeFromSet("Bike");
        System.out.println("Set After Removal: " + manager.getSet());

        System.out.println("Search Car in Set: " + manager.searchInSet("Car"));


        // MAP Example
        manager.addToMap(1, "chakri");
        manager.addToMap(2, "mahi");

        System.out.println("\nMap Elements: " + manager.getMap());

        manager.removeFromMap(2);
        System.out.println("Map After Removal: " + manager.getMap());

        System.out.println("Search Key 1 in Map: " + manager.searchInMap(1));
    }
}