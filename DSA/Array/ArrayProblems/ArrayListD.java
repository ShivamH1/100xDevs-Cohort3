package ArrayProblems;
import java.util.ArrayList;

public class ArrayListD {
    // ArrayList are the dynamic array

    public static void main(String[] args) {
        // ArrayList<Type> arrayList = new ArrayList<>();

        // add elements
        ArrayList<Integer> arrayList = new ArrayList<>();

        arrayList.add(1);
        arrayList.add(2);
        arrayList.add(2);

        System.out.println(arrayList);

        ArrayList<String> languages = new ArrayList<>();

        languages.add("Java");
        languages.add("JavaScript");
        languages.add("Python");

        languages.add(1, "C++"); // adding at index

        System.out.println(languages);

        // access elements
        String str = languages.get(1);
        System.out.println(str);
        Integer one = arrayList.get(0);
        System.out.println(one);

        // change
        languages.set(1, "JS");
        System.out.println(languages);

        // remove
        System.out.println(languages.size());
        languages.remove(2);
        System.out.println(languages);
        System.out.println(languages.size());

        // iteration
        for (String language : languages) {
            System.out.println(language);
        }
    }
}