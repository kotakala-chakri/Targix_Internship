import java.util.*;

public class CollectionManager {

    private List<String> list = new ArrayList<>();
    private Set<String> set = new HashSet<>();
    private Map<Integer, String> map = new HashMap<>();

    // LIST METHODS
    public void addToList(String item) {
        list.add(item);
    }

    public void removeFromList(String item) {
        list.remove(item);
    }

    public boolean searchInList(String item) {
        return list.contains(item);
    }

    public List<String> getList() {
        return list;
    }

    // SET METHODS
    public void addToSet(String item) {
        set.add(item);
    }

    public void removeFromSet(String item) {
        set.remove(item);
    }

    public boolean searchInSet(String item) {
        return set.contains(item);
    }

    public Set<String> getSet() {
        return set;
    }

    // MAP METHODS
    public void addToMap(int key, String value) {
        map.put(key, value);
    }

    public void removeFromMap(int key) {
        map.remove(key);
    }

    public boolean searchInMap(int key) {
        return map.containsKey(key);
    }

    public Map<Integer, String> getMap() {
        return map;
    }
}