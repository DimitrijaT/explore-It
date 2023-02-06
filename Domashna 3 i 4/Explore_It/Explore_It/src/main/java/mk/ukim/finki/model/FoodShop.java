package mk.ukim.finki.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity
public class FoodShop {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    //x
    private Double Long;
    //y
    private Double Lat;
    private String type;
    private String name;

    public FoodShop() {
    }
}