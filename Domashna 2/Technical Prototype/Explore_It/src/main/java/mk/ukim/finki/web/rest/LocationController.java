package mk.ukim.finki.web.rest;


import mk.ukim.finki.model.*;
import mk.ukim.finki.service.*;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

// TODO: Remove in production
// CORS Temp fix
@CrossOrigin
@RestController
@RequestMapping("/api/location")
public class LocationController {

    private final AtmService atmService;
    private final CateringService cateringService;
    private final FoodShopService foodShopService;
    private final HotelService hotelService;
    private final PubService pubService;


    public LocationController(AtmService atmService, CateringService cateringService, FoodShopService foodShopService, HotelService hotelService, PubService pubService) {
        this.atmService = atmService;
        this.cateringService = cateringService;
        this.foodShopService = foodShopService;
        this.hotelService = hotelService;
        this.pubService = pubService;
    }


    @GetMapping(value = "/atms", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Atm> getAtms() {
        return atmService.listAll();
    }

    @GetMapping(value = "/caterings", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Catering> getCaterings() {
        return cateringService.listAll();
    }

    @GetMapping(value = "/foodshops", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<FoodShop> getFoodShops() {
        return foodShopService.listAll();
    }

    @GetMapping(value = "/hotels", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Hotel> getHotels() {
        return hotelService.listAll();
    }

    @GetMapping(value = "/pubs", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Pub> getPubs() {
        return pubService.listAll();
    }


}
