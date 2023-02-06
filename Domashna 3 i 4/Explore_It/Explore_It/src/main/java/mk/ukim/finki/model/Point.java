package mk.ukim.finki.model;

import lombok.Data;

@Data
public class Point {
    //x
    private Double Long;
    //y
    private Double Lat;

    public Point(Double aLong, Double lat) {
        Long = aLong;
        Lat = lat;
    }
}