public class CollectionManagerTest {

    public static void main(String[] args) {
        CollectionManagerTest test = new CollectionManagerTest();

        test.testAddToList();
        test.testRemoveFromList();
        test.testSearchInList();

        test.testAddToSet();
        test.testRemoveFromSet();

        test.testAddToMap();
        test.testRemoveFromMap();

        System.out.println("All tests passed.");
    }

    private void assertTrue(boolean condition, String message) {
        if (!condition) {
            throw new AssertionError("Assertion failed: " + message);
        }
    }

    private void assertFalse(boolean condition, String message) {
        assertTrue(!condition, message);
    }


    // LIST TEST
    public void testAddToList() {
        CollectionManager manager = new CollectionManager();
        manager.addToList("Apple");
        assertTrue(manager.getList().contains("Apple"), "List should contain Apple after adding");
    }

    public void testRemoveFromList() {
        CollectionManager manager = new CollectionManager();
        manager.addToList("Banana");
        manager.removeFromList("Banana");
        assertFalse(manager.getList().contains("Banana"), "List should not contain Banana after removal");
    }

    public void testSearchInList() {
        CollectionManager manager = new CollectionManager();
        manager.addToList("Mango");
        assertTrue(manager.searchInList("Mango"), "Search should find Mango in list");
    }

    // SET TEST
    public void testAddToSet() {
        CollectionManager manager = new CollectionManager();
        manager.addToSet("Car");
        assertTrue(manager.getSet().contains("Car"), "Set should contain Car after adding");
    }

    public void testRemoveFromSet() {
        CollectionManager manager = new CollectionManager();
        manager.addToSet("Bike");
        manager.removeFromSet("Bike");
        assertFalse(manager.getSet().contains("Bike"), "Set should not contain Bike after removal");
    }

    // MAP TEST
    public void testAddToMap() {
        CollectionManager manager = new CollectionManager();
        manager.addToMap(1, "chakri");
        assertTrue(manager.getMap().containsKey(1), "Map should contain key 1 after adding");
    }

    public void testRemoveFromMap() {
        CollectionManager manager = new CollectionManager();
        manager.addToMap(2, "mahi");
        manager.removeFromMap(2);
        assertFalse(manager.getMap().containsKey(2), "Map should not contain key 2 after removal");
    }
}