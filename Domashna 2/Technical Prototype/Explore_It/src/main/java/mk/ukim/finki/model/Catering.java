package mk.ukim.finki.model;


import lombok.Data;

@Data
public class Catering {
    private Long Id;
    //x
    private Double Long;
    //y
    private Double Lat;

    private String type;

    private String name;

    public Catering(Double aLong, Double lat, String type, String name) {
        this.Id = (long) (Math.random() * 1000);
        Long = aLong;
        Lat = lat;
        this.type = type;
        this.name = name;
    }

    public Catering() {
    }
}
