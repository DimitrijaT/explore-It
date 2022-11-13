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

    public void appendLines(List<Line> lines) {
        this.lines.addAll(lines);
    }

    public void addHeadLine() {
        lines.add(new Line("x", "y", "type", "name"));
    }

    public void printLinesCsv() {
        lines.stream().forEach(line -> line.toString());
    }

    public void readLines(File file) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(new FileInputStream(file), "UTF-8"));
        boolean hasBuildingAttribute = Line.columnSkip(bufferedReader.readLine());
        lines.addAll(bufferedReader.lines().map(line -> Line.createLine(line, hasBuildingAttribute)).collect(Collectors.toList()));
    }

}
