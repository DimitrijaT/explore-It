package mk.finki.students.exceptions;

public class FileExistsException extends Exception{
    public FileExistsException() {
        super("File already exists!");
    }
}
