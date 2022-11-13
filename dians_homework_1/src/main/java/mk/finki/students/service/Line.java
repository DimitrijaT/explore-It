package mk.finki.students.service;

public class Line {

    private String x;
    private String y;
    private String type;
    private String location;

    public Line(String x, String y, String type, String location) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.location = location;
    }

    public static boolean hasBuildingInfo = false;

    public static void columnSkip(String s) {
        String[] string = s.split(",");
        if (string[3].equals("building")) {
            hasBuildingInfo = true;
            return;
        }
        hasBuildingInfo = false;

    }

    public static Line createLine(String s) {

        String[] string = s.split(",");
        String x = string[0];
        String y = string[1];
        String type = string[2];

        if (string.length < 4 || string[3].equals("")) {
            return null;
        }
        String location = string[3];
        if (hasBuildingInfo) {
            if (string.length < 5 || string[4].equals("")) {
                return null;
            }
            location = string[4];
        }
        return new Line(x, y, type, location);
    }

    @Override
    public String toString() {
        return String.format("%s,%s,%s,%s\n", x, y, type, location);
    }
}
