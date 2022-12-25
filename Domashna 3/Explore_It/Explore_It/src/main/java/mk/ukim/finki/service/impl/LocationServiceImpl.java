package mk.ukim.finki.service.impl;

import mk.ukim.finki.model.Location;
import mk.ukim.finki.model.Point;
import mk.ukim.finki.repository.jpa.LocationRepository;
import mk.ukim.finki.service.LocationService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * LocationService uses LocationRepository to get the data from the Database.
 */

@Service
public class LocationServiceImpl implements LocationService {
    private final LocationRepository locationRepository;

    public LocationServiceImpl(LocationRepository locationRepository) {
        this.locationRepository = locationRepository;
    }

    @Override
    public List<Location> listAllLocations() {
        return this.locationRepository.findAll();
    }

    @Override
    public List<Location> listByType(String type) {
        return this.locationRepository.findByType(type);
    }

    @Override
    public List<Location> listByName(String name) {
        return this.locationRepository.findByName(name);
    }

    @Override
    public List<Location> listByTypeOrName(String type, String name) {
        return this.locationRepository.findByTypeOrName(type, name);
    }


    //  p1 -------- p2
    //  -           -
    //  -     l     -
    //  -           -
    //  p3 -------- p4

    public List<Location> findByPointOfInterest(Point p1, Point p2, Point p3, Point p4) {
        return this.listAllLocations().stream().filter((l) -> {
            Double lLong = l.getLong();
            Double lLat = l.getLat();
            return lLong <= p1.getLong() && lLong <= p2.getLong() &&
                    lLong >= p3.getLong() && lLong >= p4.getLong()
                    &&
                    lLat >= p1.getLat() && lLat >= p3.getLat() &&
                    lLat <= p2.getLat() && lLat <= p3.getLat();
        }).collect(Collectors.toList());
    }

    @Override
    public List<String> listTypes() {
        return this.listAllLocations().stream().map(Location::getType).distinct().collect(Collectors.toList());
    }
}
