package mk.finki.students.files;


import mk.finki.students.service.LineCollection;
import mk.finki.students.exceptions.FileExistsException;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;

public interface FileManager {

//    void writeCsv(LineCollection lineCollection) throws IOException, FileExistsException;

    public File createNewFile(String file) throws IOException, FileExistsException;

    void writeToTextFile(File to, LineCollection lineCollection, Boolean append) throws IOException;
    public File[] readCsvInFolder(String dirPath) throws FileNotFoundException;
}
