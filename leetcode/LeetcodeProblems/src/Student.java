public class Student {
    
    public static int count = 0;

    public String name;
    Student() {
        name="default";
        count++;
    }

    Student(String name) {
        this.name = name;
        count++;
    }
}
