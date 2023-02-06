package mk.ukim.finki.service.impl;

import mk.ukim.finki.model.FoodShop;
import mk.ukim.finki.repository.jpa.FoodShopRepository;
import mk.ukim.finki.service.FoodShopService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FoodShopServiceImpl implements FoodShopService {

    private final FoodShopRepository foodShopRepository;

    public FoodShopServiceImpl(FoodShopRepository foodShopRepository) {
        this.foodShopRepository = foodShopRepository;
    }

    @Override
    public List<FoodShop> listAll() {
        return this.foodShopRepository.findAll();
    }
}
