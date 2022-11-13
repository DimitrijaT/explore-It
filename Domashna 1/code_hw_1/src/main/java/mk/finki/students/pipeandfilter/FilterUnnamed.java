package mk.finki.students.pipeandfilter;

public class FilterUnnamed implements Filter<String>{
    boolean hasBuildingInfo;

    public FilterUnnamed(boolean hasBuildingInfo) {
        this.hasBuildingInfo = hasBuildingInfo;
    }

    @Override
    public String execute(String input) {
        String[] string = input.split(",");
        if (string.length < 4 || string[3].equals("")) {
            return null;
        }
        if(hasBuildingInfo && (string.length<5 || string[4].equals(""))){
            return null;
        }
        return input;
    }
}
