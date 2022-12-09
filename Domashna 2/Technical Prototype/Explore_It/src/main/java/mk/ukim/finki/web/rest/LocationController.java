package mk.ukim.finki.web.rest;


import mk.ukim.finki.model.*;
import mk.ukim.finki.service.*;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


/**
 * This is where you are supposed to write the apis <br>
 * The communication is done purely with the interface LocationService. <br>
 * The old calls still exist to retain functionality of the app <br>
 */

@RestController
@RequestMapping("/api/location")
public class LocationController {

    private final LocationService locationService;


    public LocationController(LocationService locationService) {
        this.locationService = locationService;
    }


    /**
     *
     * USAGE:
     * <p>
     * /api/location/get-locations <br>
     * return List all Locations
     * <p>
     * /api/location/get-locations?name=x <br>
     * return list of all Locations with x name
     * <p>
     * /api/location/get-locations?type=x<br>
     * return list of all Locations with x type
     * <p>
     * /api/location/get-locations?type=x&name=y<br>
     * return list of all Locations with x type OR y name
     *
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



    /*
    All methods below you can consider deprecated as getLocation() is replaces them.
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
