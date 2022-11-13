package mk.finki.students.service;

import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

public class LineCollection {

    private List<Line> lines;

    public List<Line> getLines() {
        return lines;
    }

    public LineCollection() {
        this.lines = new ArrayList<>();
    }

    public void addLine(Line line) {
        lines.add(line);
    }

    public void printLinesCsv() {
//        StringBuilder stringBuilder = new StringBuilder();
        lines.stream().forEach(line -> line.toString());
    }

    public void readLines(String path) throws IOException {

        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(new FileInputStream(path), "UTF-8"));
        Line.columnSkip(bufferedReader.readLine());
        List<Line> lineList = bufferedReader.lines().map(line -> Line.createLine(line)).filter(Objects::nonNull).collect(Collectors.toList());
        lines.add(new Line("x", "y", "type", "name"));
        lines.addAll(lineList);
    }

}
