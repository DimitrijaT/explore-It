package mk.finki.students;


import mk.finki.students.exceptions.FileExistsException;
import mk.finki.students.files.FileManager;
import mk.finki.students.files.Impl.FileManagerImpl;
import mk.finki.students.service.LineCollection;

import java.io.File;
import java.io.IOException;
import java.util.Scanner;

public class PipeAndFilterProblem {
    public static void main(String[] args) throws IOException, FileExistsException {

        FileManager fileManager = new FileManagerImpl();
        File[] files = fileManager.readCsvInFolder("C:\\Users\\Public\\Documents\\Explore_It\\dians_homework_1\\src\\main\\java\\mk\\finki\\students\\input");

        int i = 1;
        for (File s : files) {

            LineCollection collection = new LineCollection();
            collection.readLines(s.getAbsolutePath());
            collection.printLinesCsv();

            File f = fileManager.createNewFile(String.format("C:\\Users\\Public\\Documents\\Explore_It\\dians_homework_1\\src\\main\\java\\mk\\finki\\students\\output\\%s", s.getName()));
            fileManager.writeToTextFile(f, collection, false);
        }


//        Pipe<String> pipe = new Pipe<>();
//
//        Filter readCsvInFolder = new ReadCsvsToFiles();
//        Filter readFilesToLineCollections = new ReadFilesToLineCollections();
//
//        pipe.addFilter(readCsvInFolder);
//        pipe.addFilter(readFilesToLineCollections);
//
//        pipe.runFilter("C:\\Users\\Public\\Documents\\dians_homework_1\\src\\main\\java\\mk\\finki\\students\\input");

    }
}