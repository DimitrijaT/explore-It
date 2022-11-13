package mk.finki.students.pipeandfilter;

import java.util.ArrayList;
import java.util.List;

public class LocationTypeNameFilter implements Filter<String> {
    boolean hasBuildingInfo;

    public LocationTypeNameFilter(boolean hasBuildingInfo) {
        this.hasBuildingInfo = hasBuildingInfo;
    }

    @Override
    public String execute(String input) {
        if (input == null) {
            return null;
        }
        String[] string = input.split(",");

        List<String> output = new ArrayList<>();
        output.add(string[0]);
        output.add(string[1]);
        output.add(string[2]);
        if (!hasBuildingInfo) {
            output.add(string[3]);

        } else {
            output.add(string[4]);
        }
        return String.join(",", output);
    }
}
