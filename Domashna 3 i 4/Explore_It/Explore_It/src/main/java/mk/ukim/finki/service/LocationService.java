package mk.ukim.finki.service;

import mk.ukim.finki.model.Location;
import mk.ukim.finki.model.Point;
import mk.ukim.finki.model.Pub;

import java.util.List;
import java.util.Optional;

public interface LocationService {

    List<Location> listAllLocations();

    List<Location> listByType(String type);

    List<Location> listByName(String name);

    List<Location> listByTypeOrName(String type,String name);

    public List<Location> findByPointOfInterest(Point p1, Point p2, Point p3, Point p4);

    List<String> listTypes();

}
