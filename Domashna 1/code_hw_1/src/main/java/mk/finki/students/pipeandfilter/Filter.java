package mk.finki.students.pipeandfilter;

import mk.finki.students.exceptions.FileExistsException;

import java.io.FileNotFoundException;
import java.io.IOException;

public interface Filter<T> {

    T execute(T input);

}
