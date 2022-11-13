package mk.finki.students.service;

import mk.finki.students.pipeandfilter.FilterUnnamed;
import mk.finki.students.pipeandfilter.LocationTypeNameFilter;
import mk.finki.students.pipeandfilter.Pipe;

public class Line {

    private String x;
    private String y;
    private String type;
    private String location;

    public static Pipe<String> pipe = new Pipe<>();

    public Line(String x, String y, String type, String location) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.location = location;
    }

    // return true if the csv file has building data as 4th column
    public static boolean columnSkip(String s) {
        String[] string = s.split(",");
        if (string[3].equals("building")) {
            return true;
        }
        return false;
    }

    public Line(String[] strings) {
        this(strings[0], strings[1], strings[2], strings[3]);
    }

    public static Line createLine(String s, boolean hasBuildingInfo) {
        pipe.clearFilters();
        pipe.addFilter(new FilterUnnamed(hasBuildingInfo));  // return null if the string has no info for name or type
        pipe.addFilter(new LocationTypeNameFilter(hasBuildingInfo)); // return only the 4 properties x, y, type and name

        String filteredString = pipe.runFilter(s);
        if (filteredString == null) {
            return null;
        }

        String[] strings = filteredString.split(",");
        return new Line(strings);
    }

    @Override
    public String toString() {
        return String.format("%s,%s,%s,%s\n", x, y, type, location);
    }
}
