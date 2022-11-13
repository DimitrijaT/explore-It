package mk.finki.students;


import mk.finki.students.exceptions.FileExistsException;
import mk.finki.students.files.FileManager;
import mk.finki.students.files.Impl.FileManagerImpl;
import mk.finki.students.pipeandfilter.NullLineCollectionFilter;
import mk.finki.students.pipeandfilter.Pipe;
import mk.finki.students.service.Line;
import mk.finki.students.service.LineCollection;

import java.io.File;
import java.io.IOException;
import java.util.List;

public class PipeAndFilterProblem {
    public static void main(String[] args) throws IOException, FileExistsException {

        Pipe<List<Line>> pipeLineCollection = new Pipe<>();
        NullLineCollectionFilter nullFilter = new NullLineCollectionFilter();
        pipeLineCollection.addFilter(nullFilter);

        FileManager fileManager = new FileManagerImpl();
        File[] files = fileManager.readCsvInFolder("src/main/java/mk/finki/students/input");

        LineCollection combinedData = new LineCollection();
        combinedData.addHeadLine();

        for (File file : files) {

            LineCollection collection = new LineCollection();
            collection.readLines(file); //read all lines

            List<Line> filteredLines = pipeLineCollection.runFilter(collection.getLines()); //remove null lines
            combinedData.appendLines(filteredLines);

            LineCollection collectionToPrint = new LineCollection();
            collectionToPrint.addHeadLine();
            collectionToPrint.appendLines(filteredLines);

            File f = fileManager.createNewFile(String.format("src/main/java/mk/finki/students/output/%s", file.getName()));
            fileManager.writeToTextFile(f, collectionToPrint, false);
        }
        File f = fileManager.createNewFile("src/main/java/mk/finki/students/output/combinedData.csv");
        fileManager.writeToTextFile(f, combinedData, false);

    }
}