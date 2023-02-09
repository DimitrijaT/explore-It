package mk.ukim.finki.web.rest;


import mk.ukim.finki.model.*;
import mk.ukim.finki.service.*;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


/**
 * This class provides the REST APIs for location information.
 */
@CrossOrigin
@RestController
@RequestMapping("/api/location")
public class LocationController {

    private final LocationService locationService;

    public LocationController(LocationService locationService) {
        this.locationService = locationService;
    }

    /**
     * Returns a list of locations based on the provided parameters. <br>
     * The method should be mapped on the path '/get-locations'. <br>
     * The arguments that the method takes are optional and can be null. <br>
     * <br>
     * @param type Type of the location <br>
     * @param name Name of the location <br>
     * @return List Locations
     */
    @GetMapping(value = "/get-locations", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Location> getLocation(@RequestParam(required = false) String type,
                                      @RequestParam(required = false) String name
    ) {
        if (type == null && name == null)
            return locationService.listAllLocations();
        else if (type != null && name == null)
            return locationService.listByType(type);
        else if (type == null)
            return locationService.listByName(name);
        else
            return this.locationService.listByTypeOrName(type, name);
    }

    /**
     * Returns locations based on the provided coordinates.
     * @param x1  x coordinate of the first point
     * @param y1  y coordinate of the first point
     * @param x2  x coordinate of the second point
     * @param y2  y coordinate of the second point
     * @param x3  x coordinate of the third point
     * @param y3  y coordinate of the third point
     * @param x4  x coordinate of the fourth point
     * @param y4  y coordinate of the fourth point
     * @return List of Locations
     */
    @GetMapping(value = "/get-locations-with-cords", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Location> getByCoordinates(@RequestParam Double x1,
                                           @RequestParam Double y1,
                                           @RequestParam Double x2,
                                           @RequestParam Double y2,
                                           @RequestParam Double x3,
                                           @RequestParam Double y3,
                                           @RequestParam Double x4,
                                           @RequestParam Double y4) {
        Point p1 = new Point(x1, y1);
        Point p2 = new Point(x2, y2);
        Point p3 = new Point(x3, y3);
        Point p4 = new Point(x4, y4);
        return this.locationService.findByPointOfInterest(p1, p2, p3, p4);
    }

    /**
     * All methods below are deprecated because the
     * new method getLocation() replaces them.
     */
    @GetMapping(value = "/get-types", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<String> getTypes() {
        return this.locationService.listTypes();
    }

    @GetMapping(value = "/atms", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Location> getAtms() {
        return this.locationService.listByType("atm");
    }

    @GetMapping(value = "/caterings", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Location> getCaterings() {
        return this.locationService.listByType("atm");
    }

    @GetMapping(value = "/foodshops", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Location> getFoodShops() {
        return this.locationService.listByType("convenience");
    }

    @GetMapping(value = "/hotels", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Location> getHotels() {
        return this.locationService.listByType("hotel");
    }

    @GetMapping(value = "/pubs", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Location> getPubs() {
        return this.locationService.listByType("pub");
    }
}
