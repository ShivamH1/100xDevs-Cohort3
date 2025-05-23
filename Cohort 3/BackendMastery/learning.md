### Java is interpreted and compiled language
![Java is interpreted and compiled](image.png)

### JVM is Java Virtual Machine - gives us platform independencies and thread safety
The Java Virtual Machine (JVM) is an abstract computing machine that enables a computer to run Java programs. It provides a runtime environment to execute Java bytecode, which is the intermediate representation of Java code, compiled from the source code. The JVM performs several critical functions:

1. **Class Loader**: Loads class files into memory and performs verification, preparation, and resolution of classes.
2. **Bytecode Verifier**: Ensures that the bytecode is valid and adheres to Java’s security constraints.
3. **Execution Engine**: Converts bytecode into machine code and executes it. There are three main execution strategies:
   - **Interpreter**: Interprets bytecode instructions one at a time.
   - **Just-In-Time (JIT) Compiler**: Compiles parts of the bytecode into native machine code for better performance.
4. **Garbage Collector**: Manages memory by automatically reclaiming memory occupied by objects that are no longer in use.
5. **Runtime Environment**: Provides core libraries and system resources necessary for running Java applications.

JIT(Just-In-Time) is a technique used by the JVM to compile bytecode to native machine code, which can improve performance. It can be enabled by setting the -XX:+UnlockExperimentalVMOptions flag in the JVM options.

The JVM is platform-independent, meaning that the same Java program can run on any device that has a JVM implementation, making Java a "write once, run anywhere" language.

- A Running Program is a Process. Program is set of Instructions.
### Heap and Stack in JVM, RAM, and Threads

In the context of the JVM, RAM, and threads, the heap and stack are two distinct memory areas used for different purposes:

1. **Heap:**
   - **JVM Usage:** The heap is a shared memory area used by the JVM for dynamic memory allocation. All Java objects and their instance variables are allocated memory on the heap. It is managed by the garbage collector, which reclaims memory used by objects that are no longer accessible or needed.
   - **RAM Usage:** The heap resides in the RAM and is a part of the memory allocated to the JVM process. Its size can be adjusted using JVM options such as `-Xmx` to specify the maximum heap size.
   - **Threads Usage:** The heap is shared among all threads in a Java application. This shared usage requires synchronization mechanisms to prevent concurrent access issues, ensuring thread safety when multiple threads interact with objects on the heap.

2. **Stack:**
   - **JVM Usage:** The stack is a memory area used for storing method call details, including local variables, method parameters, and the call stack itself. Each thread in a Java application has its own stack, which is created at the thread's inception.
   - **RAM Usage:** The stack is a part of the RAM allocated to the JVM, but it is distinct from the heap. The size of each thread's stack can be adjusted with the `-Xss` JVM option.
   - **Threads Usage:** Since each thread has its own stack, there is no need for synchronization when accessing stack data. The stack is used for managing function calls and execution context, allowing threads to operate independently and efficiently.

In summary, the heap and stack serve different purposes: the heap is for dynamic object storage shared among threads, while the stack is for method execution and local variable storage, unique to each thread. Managing these memory areas efficiently is crucial for optimal JVM performance and application stability.

### Static means directly loaded on memory. Static function doesn't depend on instance of class (creation of object) to be called. It can be called without creating object of that class.

### ArrayList and List in Java

- **List:** A List is a collection of objects which is ordered and may contain duplicates. It is an interface in Java and provides methods to manipulate and traverse the list. It is a part of Java Collections Framework.

- **ArrayList:** An ArrayList is a resizable array implementation of the List interface. It is a class in Java and provides methods to add, remove, and traverse elements. It is a part of Java Collections Framework. It is similar to an array but provides more functionality. The size of the ArrayList can be increased or decreased as elements are added or removed.
Example of using ArrayList in Java:

```java
List<String> list = new ArrayList<>();
list.add("Item 1");
list.add("Item 2");
list.add("Item 3");

for (String item : list) {
    System.out.println(item);
}
```

### Map and HashMap in Java

- **Map:** A Map is an interface in Java which is part of the Java Collections Framework. It stores key-value pairs. It is a collection of key-value pairs where each key is unique and maps to a specific value. It provides methods to add, remove, and traverse elements. It does not allow duplicate keys but it allows duplicate values.

- **HashMap:** A HashMap is a class in Java which is an implementation of the Map interface. It stores key-value pairs using a hash table for storage. It uses the hash code of the key for inserting and retrieving values. It is a part of Java Collections Framework. It allows null keys and null values.

Example of using Map and HashMap in Java:

```java
Map<Integer, String> map = new HashMap<>();
map.put(1, "Value 1");
map.put(2, "Value 2");
map.put(3, "Value 3");

for (Map.Entry<Integer, String> entry : map.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}
```

### Optional in Java

- **Optional:** An Optional is a container that may or may not contain a non-null value. It is a way to represent the possibility of a missing value. It is a part of Java 8 and later versions. It is useful when you need to handle null values.

example of optional:

```java
Optional<String> optional = Optional.ofNullable("Hello");
optional.ifPresent(System.out::println);

Optional<String> emptyOptional = Optional.empty();
System.out.println(emptyOptional.orElse("Default Value"));
```

### Streams in Java

- **Streams:** A Stream is a sequence of elements supporting parallel and functional-style operations. It is a part of Java 8 and later versions. It is useful for processing collections and arrays.

- **Map:** In streams, the map() method is used to transform each element of a stream into a new element. It takes a lambda expression as an argument. The lambda expression takes an element of the stream and returns a new element.

- **Filter:** In streams, the filter() method is used to filter elements from a stream. It takes a predicate as an argument. The predicate is a lambda expression that takes an element of the stream and returns a boolean. The filter() method returns a new stream with only the elements that satisfy the predicate.

- **forEach:** In streams, the forEach() method is used to iterate over each element of a stream. It takes a lambda expression as an argument. The lambda expression takes an element of the stream as an argument and performs an action with it.

Example of using streams in Java:
```java
List<String> list = List.of("Apple", "Banana", "Orange");
list.stream()
    .filter(fruit -> fruit.length() > 5)
    .map(fruit -> fruit.toUpperCase())
    .forEach(System.out::println);
```

### Interface in Java

- **Interface:** An interface in Java is an abstract class that contains only constants and abstract methods. It cannot be instantiated and is used to define a contract that must be implemented by any class that implements it.

- **Abstract Class:** An abstract class is a class that cannot be instantiated and is used to provide a basic implementation that can be shared by multiple subclasses. It can contain both abstract and concrete methods.

- **Abstract Method:** An abstract method is a method that does not have an implementation and must be implemented by any class that extends the class containing the abstract method.

- **Concrete Method:** A concrete method is a method that has an implementation and can be called like any other method.

- **Implements:** The implements keyword is used to indicate that a class implements an interface.

Example of using interface in Java:
```java
interface Animal {
    void makeSound();
}

class Dog implements Animal {
    public void makeSound() {
        System.out.println("Woof!");
    }
}

class Cat implements Animal {
    public void makeSound() {
        System.out.println("Meow!");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        Cat cat = new Cat();
        
        dog.makeSound();
        cat.makeSound();
    }
}
